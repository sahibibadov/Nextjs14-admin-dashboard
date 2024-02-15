"use client";
import { LineChart } from "@tremor/react";

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];
const ChartItem = () => {
  // const dataFormatter = (number: number) =>
  //   `$${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div className="mb-3 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      <h2 className="mb-5 text-xl font-bold">Weekly Recap</h2>

      <LineChart
        className="h-80"
        data={data}
        index="name"
        categories={["visit", "click"]}
        colors={["indigo", "rose"]}
        // valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
        showAnimation
      />
    </div>
  );
};

export default ChartItem;
