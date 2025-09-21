import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export type ChartData = {
  name: string;
  deposit: number;
  withdraw: number;
  amt: number;
};

interface Props {
  data: ChartData[];
}
const BiaxialBarChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer
      className={"bg-white pt-5 rounded-xl shadow-md outline-none border-0"}
      width="100%"
      height="100%"
      style={{ border: "none", outline: "none" }}
    >
      <BarChart
        className="outline-none border-0"
        barCategoryGap={"30%"}
        width={100}
        height={250}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        style={{ border: "none" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="none" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="deposit"
          fill="#1814f3"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="withdraw"
          fill="#16dbcc"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BiaxialBarChart;
