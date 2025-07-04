'use server';

import { deleteClientById, refclient, db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function deleteClient(formData: FormData) {
  let id = Number(formData.get('id'));
  await deleteClientById(id);
  revalidatePath('/');
}

export async function addClient(formData: FormData) {
    const client = {
        ClientName: formData.get('ClientName') as string,
        ClientAddr: formData.get('ClientAddr') as string,
        PhoneNumber: Number(formData.get('PhoneNumber')) || 0,
        RegNo: Number(formData.get('RegNo')) || 0,
        ClientID: Math.floor(Math.random() * 100000)
    }

    await db.insert(refclient).values(client);
    revalidatePath('/');
}

export async function editClient(formData: FormData) {
    const client = {
        ClientName: formData.get('ClientName') as string,
        ClientAddr: formData.get('ClientAddr') as string,
        PhoneNumber: Number(formData.get('PhoneNumber')) || 0,
        RegNo: Number(formData.get('RegNo')) || 0,
    }
    const clientID = Number(formData.get('ClientID'));

    await db.update(refclient).set(client).where(eq(refclient.ClientID, clientID));
    revalidatePath('/');
}
