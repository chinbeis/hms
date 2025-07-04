'use server';

import { db, tasks } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function deleteTask(formData: FormData) {
  let id = Number(formData.get('id'));
  await db.delete(tasks).where(eq(tasks.id, id));
  revalidatePath('/tasks');
}

export async function addTask(formData: FormData) {
    const task = {
        task: formData.get('task') as string,
        status: formData.get('status') as string,
        date: new Date(),
        category: 'General'
    }

    await db.insert(tasks).values(task);
    revalidatePath('/tasks');
}

export async function editTask(formData: FormData) {
    const task = {
        task: formData.get('task') as string,
        status: formData.get('status') as string,
        date: new Date(),
        category: formData.get('category') as string,
    }
    const id = Number(formData.get('id'));

    await db.update(tasks).set(task).where(eq(tasks.id, id));
    revalidatePath('/tasks');
}
