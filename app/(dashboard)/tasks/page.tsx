import { TasksTable } from './tasks-table';
import { getTasks } from '@/lib/db';

export default async function TasksPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { tasks, newOffset, totalTasks } = await getTasks(
    search,
    Number(offset)
  );

  return (
    <TasksTable
      tasks={tasks}
      offset={newOffset ?? 0}
      totalTasks={totalTasks}
    />
  );
}
