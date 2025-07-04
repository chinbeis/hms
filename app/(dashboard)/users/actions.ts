'use server';

import { db, users } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export async function deleteUser(formData: FormData) {
  let id = Number(formData.get('id'));
  await db.delete(users).where(eq(users.id, id));
  revalidatePath('/users');
}

export async function addUser(formData: FormData) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData.get('password') as string, salt);

    const user = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: hashedPassword,
    }

    await db.insert(users).values(user);
    revalidatePath('/users');
}

export async function createAdmin() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);

    const user = {
        name: 'admin',
        email: 'admin@admin.com',
        password: hashedPassword,
    }

    await db.insert(users).values(user);
}
