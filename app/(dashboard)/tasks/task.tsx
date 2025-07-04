'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { SelectTask } from '@/lib/db';
import { deleteTask } from './actions';
import { EditTask } from './edit-task';

export function Task({ task }: { task: SelectTask }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{task.task}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {task.status}
        </Badge>
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Үйлдэл</DropdownMenuLabel>
            <EditTask task={task} />
            <DropdownMenuItem>
              <form action={deleteTask}>
                <input type="hidden" name="id" value={task.id} />
                <button type="submit">Устгах</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
