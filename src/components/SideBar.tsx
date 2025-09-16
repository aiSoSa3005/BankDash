import { useState } from "react";
import { BiCreditCard, BiCog } from "react-icons/bi";
import { MdHome, MdAccountBalance } from "react-icons/md";
import { FaMoneyBillTrendUp, FaCrown } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { RiServiceFill } from "react-icons/ri";

const SideBar = () => {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: <MdHome size={25} /> },
    { label: "Transactions", icon: <BiCreditCard size={25} /> },
    { label: "Accounts", icon: <MdAccountBalance size={25} /> },
    { label: "Investments", icon: <FaMoneyBillTrendUp size={25} /> },
    { label: "Credit Cards", icon: <BiCreditCard size={25} /> },
    { label: "Loans", icon: <GiReceiveMoney size={25} /> },
    { label: "Services", icon: <RiServiceFill size={25} /> },
    { label: "My Privileges", icon: <FaCrown size={25} /> },
    { label: "Settings", icon: <BiCog size={25} /> },
  ];

  return (
    <div className="h-full flex flex-col gap-10 pt-4 bg-white border-2 border-[#e6eff5]">
      {/* Logo */}
      <div className="flex gap-2 items-center px-2">
        <BiCreditCard size={40} color="#0023c4" />
        <h1 className="text-3xl font-bold text-[#343c6a]">BankDash.</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex gap-2 items-center p-2 pl-2 cursor-pointer rounded-md
                ${
                  active === item.label
                    ? "text-[#2d60ff] font-semibold border-l-4 border-[#2d60ff]"
                    : "text-[#8ba3cb] font-semibold hover:text-[#2d60ff] hover:bg-[#f5f7fa]"
                }`}
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
