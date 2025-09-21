import type { ChartData } from "../charts/BiaxialBarChart";

export interface CreditCard {
  balance: number;
  cardNumber: number;
  cardHolder: string;
  expiry: string;
}

export function fetchCreditCardsData(): CreditCard[] {
  return [
    {
      balance: 5000,
      cardNumber: 1234567890123456,
      cardHolder: "Sosa Omoruyi",
      expiry: "12/24",
    },
    {
      balance: 3200,
      cardNumber: 9876543210987654,
      cardHolder: "Sosa Omoruyi",
      expiry: "11/23",
    },
  ];
}

export function fetchRecentTransactions() {
  return [
    {
      id: 1,
      description: "Grocery Store",
      amount: -150.75,
      date: "2023-10-01",
    },
    {
      id: 2,
      description: "Salary",
      amount: 2500.0,
      date: "2023-09-30",
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: -75.5,
      date: "2023-09-28",
    },
  ];
}

export function fetchweeklyActivityData(): ChartData[] {
  return [
    {
      name: "Monday",
      deposit: 4000,
      withdraw: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      deposit: 3000,
      withdraw: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      deposit: 2000,
      withdraw: 9800,
      amt: 2290,
    },
    {
      name: "Thursday",
      deposit: 2780,
      withdraw: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      deposit: 1890,
      withdraw: 4800,
      amt: 2181,
    },
    {
      name: "Saturday",
      deposit: 2390,
      withdraw: 3800,
      amt: 2500,
    },
    {
      name: "Sunday",
      deposit: 3490,
      withdraw: 4300,
      amt: 2100,
    },
  ];
}

export function fetchExpenseStatistics() {
  return [
    { name: "Entertainment", value: 400 },
    { name: "Investement", value: 300 },
    { name: "Others", value: 300 },
    { name: "Bill expense", value: 200 },
  ];
}
