import { useEffect, useState } from "react";
import {
  fetchCreditCardsData,
  fetchExpenseStatistics,
  fetchweeklyActivityData,
  type CreditCard,
} from "../services/cards";
import Card from "../components/Card";
import BiaxialBarChart, { type ChartData } from "../charts/BiaxialBarChart";
import PieChartWithCustomizedLabel, {
  type PieChartData,
} from "../charts/PieChartWithCustomizedLabel";
import RecentTransactions from "../components/RecentTransactions";

const DashBoard = () => {
  const [myCards, setMyCards] = useState<CreditCard[]>([]);
  const [weeklyCashFlow, setWeeklyCashFlow] = useState<ChartData[]>([]);
  const [expenseData, setExpenseData] = useState<PieChartData[]>([]);

  useEffect(() => {
    const data = fetchCreditCardsData();
    const weeklyData = fetchweeklyActivityData();
    const expenseStats = fetchExpenseStatistics();
    setWeeklyCashFlow(weeklyData);
    setMyCards(data);
    setExpenseData(expenseStats);
  }, []);
  return (
    <div className="grid grid-rows-[1fr_1fr_1fr] gap-4  bg-[#f5f7fa] min-h-screen">
      <div className="">
        <h2 className="text-2xl font-semibold text-[#4d547d] p-4">My Cards</h2>
        <div className="flex gap-4 overflow-x-auto px-4 py-2 ">
          {myCards.map((card, index) => {
            const color = index % 2 === 0 ? null : "bg-white";
            const textColor = index % 2 === 0 ? "text-white" : "text-gray-800";

            return (
              <Card
                key={index}
                balance={card.balance}
                cardHolder={card.cardHolder}
                expiry={card.expiry}
                cardNumber={card.cardNumber}
                color={color}
                textColor={textColor}
              />
            );
          })}
          <RecentTransactions />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-4 px-4">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold text-[#4d547d] p-4">
              Weekly Activity
            </h2>
            <div className="h-full min-h-[300px]">
              <BiaxialBarChart data={weeklyCashFlow} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#4d547d] p-4">
              Expense Statistics
            </h2>
            <div className="h-full min-h-[300px]">
              <PieChartWithCustomizedLabel data={expenseData} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4"></div>
    </div>
  );
};

export default DashBoard;
