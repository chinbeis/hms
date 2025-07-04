'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { User } from './user';
import { SelectUser } from '@/lib/db';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddUser } from './add-user';

export function UsersTable({
  users,
  offset,
  totalUsers
}: {
  users: SelectUser[];
  offset: number;
  totalUsers: number;
}) {
  let router = useRouter();
  let usersPerPage = 5;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/users?offset=${offset}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
            <div>
                <CardTitle>Хэрэглэгчид</CardTitle>
                <CardDescription>
                Хэрэглэгчдээ удирдана уу.
                </CardDescription>
            </div>
            <AddUser />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Нэр</TableHead>
              <TableHead>И-мэйл</TableHead>
              <TableHead>
                <span className="sr-only">Үйлдэл</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Нийт <strong>{totalUsers}</strong>-аас{' '}
            <strong>
              {Math.max(0, Math.min(offset - usersPerPage, totalUsers) + 1)}-{offset}
            </strong>
            -г харуулж байна
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === usersPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Өмнөх
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + usersPerPage > totalUsers}
            >
              Дараах
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
