export const runtime = 'nodejs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UsersTable } from './users-table';
import { getUsers } from '@/lib/db';

export default async function UsersPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { users, newOffset, totalUsers } = await getUsers(
    search,
    Number(offset)
  );

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Бүгд</TabsTrigger>
          <TabsTrigger value="active">Идэвхтэй</TabsTrigger>
          <TabsTrigger value="draft">Ноорог</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Архивлагдсан
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Экспорт
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <UsersTable
          users={users}
          offset={newOffset ?? 0}
          totalUsers={totalUsers}
        />
      </TabsContent>
    </Tabs>
  );
}
