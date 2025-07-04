import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db, users } from '@/lib/db';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        name: { label: "Name", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials.password) {
          return null;
        }

        const user = await db.select().from(users).where(eq(users.name, credentials.name as string)).limit(1);

        if (user.length === 0) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(credentials.password as string, user[0].password as string);

        if (!passwordMatch) {
          return null;
        }

        return { ...user[0], id: user[0].id.toString() };
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
});
