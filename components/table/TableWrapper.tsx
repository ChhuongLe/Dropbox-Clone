'use client'

import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function TableWrapper ({ skeletonFiles} : { skeletonFiles: FileType[] }) {
  const { user } = useUser();
  const [initaliFiles, setInitalFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
  <div>
    <Button
      onClick={()=> setSort(sort === "desc" ? "asc" : "desc")}
  >
    Sort By {sort === "desc" ? "Newest" : "Oldest"}</Button>
    <DataTable columns={columns} data={skeletonFiles} />
  </div>
  )
}