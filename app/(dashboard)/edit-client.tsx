'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editClient } from "./actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { SelectClient } from "./client";

export function EditClient({ client }: { client: SelectClient }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">Засах</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Үйлчлүүлэгч засах</DialogTitle>
                    <DialogDescription>
                        Үйлчлүүлэгчийн мэдээллийг засна уу.
                    </DialogDescription>
                </DialogHeader>
                <form action={editClient} className="grid gap-4">
                    <input type="hidden" name="ClientID" value={client.ClientID} />
                    <div className="grid gap-2">
                        <Label htmlFor="ClientName">Нэр</Label>
                        <Input id="ClientName" name="ClientName" defaultValue={client.ClientName ?? ''} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="ClientAddr">Хаяг</Label>
                        <Input id="ClientAddr" name="ClientAddr" defaultValue={client.ClientAddr ?? ''} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="PhoneNumber">Утасны дугаар</Label>
                        <Input id="PhoneNumber" name="PhoneNumber" defaultValue={client.PhoneNumber ?? 0} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="RegNo">Регистрийн дугаар</Label>
                        <Input id="RegNo" name="RegNo" defaultValue={client.RegNo ?? 0} />
                    </div>
                    <Button type="submit">Хадгалах</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
