import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export type PieChartData = {
  name: string;
  value: number;
};

interface Props {
  data: PieChartData[];
  colors?: string[];
}

const RADIAN = Math.PI / 180;
const DEFAULT_COLORS = ["#fa00ff", "#343c6a", "#1814f3", "#fc7900"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y + 14}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="14"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const PieChartWithCustomizedLabel = ({
  data,
  colors = DEFAULT_COLORS,
}: Props) => {
  return (
    <ResponsiveContainer
      className={"bg-white rounded-xl shadow-md"}
      width="100%"
      height="100%"
    >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={8}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWithCustomizedLabel;
