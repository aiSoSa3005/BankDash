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
      className={"bg-white pt-5 rounded-xl shadow-md"}
      width="100%"
      height="100%"
    >
      <BarChart
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
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
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
