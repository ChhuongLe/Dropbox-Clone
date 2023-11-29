import { auth } from '@clerk/nextjs'
import Dropzone from "@/components/Dropzone"

export default function Dashboard () {
  const { userId } = auth();
  return (
    <div>
      <Dropzone />
    </div>
  )
}