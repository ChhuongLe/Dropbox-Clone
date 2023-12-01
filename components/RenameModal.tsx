'use client'

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function RenameModal () {
  const {user} = useUser();
  const [input, setInput] = useState("");

  const[isRenameModalOpen, setIsRenameModalOpen, fileId, filename] = useAppStore((state)=>[
    state.isRenameModalOpen,
    state.setIsRenameModalOpen,
    state.fileId,
    state.filename,
  ])

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen)=>{
        setIsRenameModalOpen(isOpen);
      }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the File</DialogTitle>

          <Input
            id="link"
            defaultValue={filename}
            onChange={(e)=>setInput(e.target.value)}
            // changes file name after hitting enter key
            onKeyDownCapture={(e)=>{
              if(e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <div className="flex justify-end space-x-2 py-3">
            <Button>
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}