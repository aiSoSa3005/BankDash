import { useEffect, useState } from "react";
import {
  fetchCreditCardsData,
  fetchweeklyActivityData,
  type CreditCard,
} from "../services/cards";
import Card from "../components/Card";
import BiaxialBarChart, { type ChartData } from "../charts/BiaxialBarChart";
import PieChartWithCustomizedLabel from "../charts/PieChartWithCustomizedLabel";

const DashBoard = () => {
  const [myCards, setMyCards] = useState<CreditCard[]>([]);
  const [weeklyCashFlow, setWeeklyCashFlow] = useState<ChartData[]>([]);
  useEffect(() => {
    const data = fetchCreditCardsData();
    const weeklyData = fetchweeklyActivityData();
    setWeeklyCashFlow(weeklyData);
    setMyCards(data);
  }, []);
  return (
    <div className="grid grid-rows-[1fr_1fr_1fr] gap-4  bg-[#f5f7fa] min-h-screen">
      <div className="">
        <h2 className="text-2xl font-semibold text-[#4d547d] p-4">My Cards</h2>
        <div className="flex gap-4 overflow-x-auto px-4 w-2xl">
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
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-4 px-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4d547d] p-4">
              Weekly Activity
            </h2>
            <div className="h-64">
              <BiaxialBarChart data={weeklyCashFlow} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#4d547d] p-4">
              Expense Statistics
            </h2>
            <div className="h-64">
              <PieChartWithCustomizedLabel />
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default DashBoard;
