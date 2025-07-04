import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClientsTable } from './clients-table';
import { getClients, getChartsData } from '@/lib/db';
import { Charts } from './charts';

export default async function ClientsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { clients, newOffset, totalClients } = await getClients(
    search,
    Number(offset)
  );
  const { workStateData, designTypeData, clientData, begDateData } = await getChartsData();

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
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Шинэ үйлчлүүлэгч
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="col-span-1 lg:col-span-2">
                <Charts id="chartdiv4" data={begDateData} type="line" title="Эхэлсэн огноо" />
            </div>
            <Charts id="chartdiv1" data={workStateData} type="pie" title="Ажлын төлөв" />
            <Charts id="chartdiv2" data={designTypeData} type="table" title="Дизайн төрөл" />
            <div className="col-span-1 lg:col-span-2">
                <Charts id="chartdiv3" data={clientData} type="bar" title="Үйлчлүүлэгч" />
            </div>
        </div>
        <ClientsTable
          clients={clients}
          offset={newOffset ?? 0}
          totalClients={totalClients}
        />
      </TabsContent>
    </Tabs>
  );
}
