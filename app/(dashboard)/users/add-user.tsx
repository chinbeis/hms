'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addUser } from "./actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";

export function AddUser() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Шинэ хэрэглэгч
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Шинэ хэрэглэгч</DialogTitle>
                    <DialogDescription>
                        Шинэ хэрэглэгчийн мэдээллийг оруулна уу.
                    </DialogDescription>
                </DialogHeader>
                <form action={addUser} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Нэр</Label>
                        <Input id="name" name="name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">И-мэйл</Label>
                        <Input id="email" name="email" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Нууц үг</Label>
                        <Input id="password" name="password" type="password" />
                    </div>
                    <Button type="submit">Хадгалах</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
