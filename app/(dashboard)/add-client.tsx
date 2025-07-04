'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addClient } from "./actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";

export function AddClient() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Шинэ үйлчлүүлэгч
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Шинэ үйлчлүүлэгч</DialogTitle>
                    <DialogDescription>
                        Шинэ үйлчлүүлэгчийн мэдээллийг оруулна уу.
                    </DialogDescription>
                </DialogHeader>
                <form action={addClient} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="ClientName">Нэр</Label>
                        <Input id="ClientName" name="ClientName" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="ClientAddr">Хаяг</Label>
                        <Input id="ClientAddr" name="ClientAddr" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="PhoneNumber">Утасны дугаар</Label>
                        <Input id="PhoneNumber" name="PhoneNumber" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="RegNo">Регистрийн дугаар</Label>
                        <Input id="RegNo" name="RegNo" />
                    </div>
                    <Button type="submit">Хадгалах</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
