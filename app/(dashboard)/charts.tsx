'use client';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function Charts({ id, data, type, title }: { id: string, data: any[], type: 'line' | 'pie' | 'bar' | 'table', title: string }) {
  useLayoutEffect(() => {
    if (type === 'table') return;
    let root = am5.Root.new(id);

    root.setThemes([am5themes_Animated.new(root)]);

    if (type === 'pie') {
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
        }));

        let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "count",
            categoryField: "WorkState"
        }));

        series.data.setAll(data);

        series.appear(1000, 100);

    } else {
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: true,
              panY: true,
              wheelX: 'panX',
              wheelY: 'zoomX',
              pinchZoomX: true,
            })
          );

          let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
          cursor.lineY.set('visible', false);

          let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
              maxDeviation: 0.2,
              baseInterval: {
                timeUnit: 'day',
                count: 1,
              },
              renderer: am5xy.AxisRendererX.new(root, {}),
              tooltip: am5.Tooltip.new(root, {}),
            })
          );

          let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererY.new(root, {}),
            })
          );

          let series = chart.series.push(
            am5xy.LineSeries.new(root, {
              name: 'Series',
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: 'count',
              valueXField: 'date',
              tooltip: am5.Tooltip.new(root, {
                labelText: '{valueY}',
              }),
            })
          );
          if (type === 'line') {
            data = data.map(d => ({ ...d, date: new Date(d.BegDate).getTime() }))
          } else if (type === 'bar') {
            data = data.map(d => ({ ...d, date: new Date().getTime(), ClientName: d.ClientName ?? 'Тодорхойгүй' }))
            xAxis.data.setAll(data);
          }
          series.data.setAll(data);

          series.appear(1000);
          chart.appear(1000, 100);
    }


    return () => {
      root.dispose();
    };
  }, []);

  if (type === 'table') {
    return (
        <div>
            <h3 className='text-center'>{title}</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Дизайн төрөл</TableHead>
                        <TableHead>Тоо</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((d, i) => (
                        <TableRow key={i}>
                            <TableCell>{d.DesignType}</TableCell>
                            <TableCell>{d.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
  }

  return (
    <div>
        <h3 className='text-center'>{title}</h3>
        <div id={id} style={{ width: '100%', height: '500px' }}></div>
    </div>
  )
}
