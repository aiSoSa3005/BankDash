import { useEffect, useState } from "react";
import { fetchRecentTransactions } from "../services/cards";

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
}

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const data = fetchRecentTransactions();
    setTransactions(data);
  }, []);

  const formatAmount = (amount: number) => {
    const isPositive = amount > 0;
    const formattedAmount = Math.abs(amount).toFixed(2);
    return {
      sign: isPositive ? "+" : "-",
      amount: formattedAmount,
      color: isPositive ? "text-green-600" : "text-red-600",
    };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex-1 h-[100%]">
      <h3 className="text-lg font-semibold text-[#4d547d] mb-4">
        Recent Transactions
      </h3>
      <div className="space-y-3">
        {transactions.map((transaction) => {
          const { sign, amount, color } = formatAmount(transaction.amount);
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.amount > 0 ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <span className="text-lg">
                    {transaction.amount > 0 ? "↗" : "↙"}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#4d547d] text-sm">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold text-sm ${color}`}>
                  {sign}${amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentTransactions;
