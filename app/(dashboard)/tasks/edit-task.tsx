'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editTask } from "./actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { SelectTask } from "@/lib/db";

export function EditTask({ task }: { task: SelectTask }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">Засах</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Таск засах</DialogTitle>
                    <DialogDescription>
                        Таскын мэдээллийг засна уу.
                    </DialogDescription>
                </DialogHeader>
                <form action={editTask} className="grid gap-4">
                    <input type="hidden" name="id" value={task.id} />
                    <div className="grid gap-2">
                        <Label htmlFor="task">Таск</Label>
                        <Input id="task" name="task" defaultValue={task.task ?? ''} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="status">Төлөв</Label>
                        <Input id="status" name="status" defaultValue={task.status ?? ''} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Төрөл</Label>
                        <Input id="category" name="category" defaultValue={task.category ?? ''} />
                    </div>
                    <Button type="submit">Хадгалах</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
