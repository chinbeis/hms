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
import { Client } from './client';
import { SelectClient } from '@/lib/db';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddClient } from './add-client';

export function ClientsTable({
  clients,
  offset,
  totalClients
}: {
  clients: SelectClient[];
  offset: number;
  totalClients: number;
}) {
  let router = useRouter();
  let clientsPerPage = 5;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/?offset=${offset}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
            <div>
                <CardTitle>Үйлчлүүлэгчид</CardTitle>
                <CardDescription>
                Үйлчлүүлэгчдээ удирдана уу.
                </CardDescription>
            </div>
            <AddClient />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Нэр</TableHead>
              <TableHead>Хаяг</TableHead>
              <TableHead className="hidden md:table-cell">Утасны дугаар</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <Client key={client.ClientID} client={client} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Нийт <strong>{totalClients}</strong>-аас{' '}
            <strong>
              {Math.max(0, Math.min(offset - clientsPerPage, totalClients) + 1)}-{offset}
            </strong>
            -г харуулж байна
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === clientsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Өмнөх
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + clientsPerPage > totalClients}
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
