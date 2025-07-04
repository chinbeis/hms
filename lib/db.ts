import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import {
  mysqlTable,
  text,
  int,
  mediumtext,
  datetime,
  varchar
} from 'drizzle-orm/mysql-core';
import { eq, ilike, sql } from 'drizzle-orm';

const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'hms'
});

export const db = drizzle(connection);

export const refclient = mysqlTable('refclient', {
  ClientID: int('ClientID').primaryKey(),
  ClientName: text('ClientName'),
  RegNo: int('RegNo'),
  PhoneNumber: int('PhoneNumber'),
  ClientAddr: mediumtext('ClientAddr'),
});

export const refwork = mysqlTable('refwork', {
    WorkID: int('WorkID').primaryKey(),
    WorkCode: varchar('WorkCode', { length: 255 }),
    WorkName: varchar('WorkName', { length: 255 }),
    WorkState: varchar('WorkState', { length: 255 }),
    ProjectName: varchar('ProjectName', { length: 255 }),
    ClientID: int('ClientID'),
    BegDate: datetime('BegDate'),
    EndDate: datetime('EndDate'),
    DesignType: varchar('DesignType', { length: 255 }),
});

export type SelectClient = typeof refclient.$inferSelect;
export type SelectUser = typeof users.$inferSelect;
export type SelectTask = typeof tasks.$inferSelect;

export const tasks = mysqlTable('tasks', {
    id: int('id').primaryKey().autoincrement(),
    task: text('task'),
    status: text('status'),
    date: datetime('date'),
    category: text('category'),
});

export const users = mysqlTable('users', {
    id: int('id').primaryKey().autoincrement(),
    name: text('name'),
    email: text('email'),
    password: text('password'),
});

export async function getUsers(
    search: string,
    offset: number
): Promise<{
    users: SelectUser[];
    newOffset: number | null;
    totalUsers: number;
}> {
    if (search) {
        return {
            users: await db
                .select()
                .from(users)
                .where(ilike(users.name, `%${search}%`))
                .limit(1000),
            newOffset: null,
            totalUsers: 0
        };
    }

    if (offset === null) {
        return { users: [], newOffset: null, totalUsers: 0 };
    }

    const totalUsers: any = await db.select({ count: sql`count(*)` }).from(users);
    let moreUsers = await db.select().from(users).limit(5).offset(offset);
    let newOffset = moreUsers.length >= 5 ? offset + 5 : null;

    return {
        users: moreUsers,
        newOffset,
        totalUsers: totalUsers[0].count as number
    };
}

export async function getTasks(
    search: string,
    offset: number
): Promise<{
    tasks: SelectTask[];
    newOffset: number | null;
    totalTasks: number;
}> {
    if (search) {
        return {
            tasks: await db
                .select()
                .from(tasks)
                .where(ilike(tasks.task, `%${search}%`))
                .limit(1000),
            newOffset: null,
            totalTasks: 0
        };
    }

    if (offset === null) {
        return { tasks: [], newOffset: null, totalTasks: 0 };
    }

    const totalTasks: any = await db.select({ count: sql`count(*)` }).from(tasks);
    let moreTasks = await db.select().from(tasks).limit(5).offset(offset);
    let newOffset = moreTasks.length >= 5 ? offset + 5 : null;

    return {
        tasks: moreTasks,
        newOffset,
        totalTasks: totalTasks[0].count as number
    };
}

export async function getClients(
  search: string,
  offset: number
): Promise<{
  clients: SelectClient[];
  newOffset: number | null;
  totalClients: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      clients: await db
        .select()
        .from(refclient)
        .where(ilike(refclient.ClientName, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalClients: 0
    };
  }

  if (offset === null) {
    return { clients: [], newOffset: null, totalClients: 0 };
  }

  const totalClients: any = await db.select({ count: sql`count(*)` }).from(refclient);
  let moreClients = await db.select().from(refclient).limit(5).offset(offset);
  let newOffset = moreClients.length >= 5 ? offset + 5 : null;

  return {
    clients: moreClients,
    newOffset,
    totalClients: totalClients[0].count as number
  };
}

export async function deleteClientById(id: number) {
  await db.delete(refclient).where(eq(refclient.ClientID, id));
}

export async function getChartsData() {
    const workStateData = await db.select({ WorkState: refwork.WorkState, count: sql`count(*)` }).from(refwork).groupBy(refwork.WorkState);
    const designTypeData = await db.select({ DesignType: refwork.DesignType, count: sql`count(*)` }).from(refwork).groupBy(refwork.DesignType);
    const clientData = await db.select({ ClientName: refclient.ClientName, count: sql`count(*)` }).from(refwork).leftJoin(refclient, eq(refwork.ClientID, refclient.ClientID)).groupBy(refclient.ClientName);
    const begDateData = await db.select({ BegDate: refwork.BegDate, count: sql`count(*)` }).from(refwork).groupBy(refwork.BegDate);

    return {
        workStateData,
        designTypeData,
        clientData,
        begDateData
    }
}
