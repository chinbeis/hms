'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTask } from "./actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";

export function AddTask() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Шинэ таск
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Шинэ таск</DialogTitle>
                    <DialogDescription>
                        Шинэ таскын мэдээллийг оруулна уу.
                    </DialogDescription>
                </DialogHeader>
                <form action={addTask} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="task">Таск</Label>
                        <Input id="task" name="task" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="status">Төлөв</Label>
                        <Input id="status" name="status" />
                    </div>
                    <Button type="submit">Хадгалах</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
