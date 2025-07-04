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
import { Task } from './task';
import { SelectTask } from '@/lib/db';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddTask } from './add-task';

export function TasksTable({
  tasks,
  offset,
  totalTasks
}: {
  tasks: SelectTask[];
  offset: number;
  totalTasks: number;
}) {
  let router = useRouter();
  let tasksPerPage = 5;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/tasks?offset=${offset}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
            <div>
                <CardTitle>Таскууд</CardTitle>
                <CardDescription>
                Таскуудаа удирдана уу.
                </CardDescription>
            </div>
            <AddTask />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Таск</TableHead>
              <TableHead>Төлөв</TableHead>
              <TableHead>
                <span className="sr-only">Үйлдэл</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Нийт <strong>{totalTasks}</strong>-аас{' '}
            <strong>
              {Math.max(0, Math.min(offset - tasksPerPage, totalTasks) + 1)}-{offset}
            </strong>
            -г харуулж байна
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === tasksPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Өмнөх
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + tasksPerPage > totalTasks}
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
