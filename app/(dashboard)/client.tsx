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
import { deleteClient } from './actions';
import { EditClient } from './edit-client';
import type { SelectClient } from '@/lib/db';

export type { SelectClient };

export function Client({ client }: { client: SelectClient }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{client.ClientName}</TableCell>
      <TableCell>{client.ClientAddr}</TableCell>
      <TableCell className="hidden md:table-cell">{client.PhoneNumber}</TableCell>
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
            <EditClient client={client} />
            <DropdownMenuItem>
              <form action={deleteClient}>
                <input type="hidden" name="id" value={client.ClientID} />
                <button type="submit">Устгах</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
