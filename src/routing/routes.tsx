import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "transactions",
        element: <div>Transactions</div>,
      },
      {
        path: "Accounts",
        element: <div>Accounts</div>,
      },
      {
        path: "Investments",
        element: <div>Investments</div>,
      },
      {
        path: "credit-cards",
        element: <div>Credit Cards</div>,
      },
      {
        path: "Loans",
        element: <div>Loans</div>,
      },
      {
        path: "Services",
        element: <div>Services</div>,
      },
      {
        path: "privileges",
        element: <div>My Privileges</div>,
      },
      {
        path: "Settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

export default router;
