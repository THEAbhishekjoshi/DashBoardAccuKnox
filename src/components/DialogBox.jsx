import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addWidget, categorySelector } from "@/features/categories/categoriesSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export function DialogBox(props) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const dashboardData = useSelector(categorySelector)
  console.log("data:", dashboardData)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !text.trim()) return
    dispatch(addWidget({ categoryId: props.id, title, text }))
    setTitle("")
    setText("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {props.children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Widget</DialogTitle>
            <DialogDescription>
              Add widgets into this section.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input
                id="name-1"
                placeholder="Give the Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Content</Label>
              <Input
                id="username-1"
                placeholder="Enter the Content"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
