import { FaMicrochip } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
interface Props {
  balance: number;
  cardNumber: number;
  cardHolder: string;
  expiry: string;
  color?: string;
  textColor?: string;
}

const Card = ({
  balance,
  cardHolder,
  cardNumber,
  expiry,
  color,
  textColor,
}: Props) => {
  const hiddenCardNumber = (n: number) => {
    const str = n.toString();
    const newStr = str.slice(0, 4) + " **** **** " + str.slice(-4);
    return newStr;
  };
  const backgroundClass =
    color ?? "bg-gradient-to-r from-[#6b5bff] to-[#1a16f3]";
  const footerBackgroundClass =
    color ?? "bg-gradient-to-l from-[#6b5bff] to-[#1a16f3]";
  const textClass = textColor ?? "text-white";
  return (
    <div
      className={`w-72 rounded-2xl shadow-md  m-4 flex flex-col gap-3 h-auto ${backgroundClass} `}
    >
      <div className="flex justify-between items-center mb-4 pl-4 pt-4 pr-4">
        <span className={` text-sm flex flex-col gap-1 ${textClass}`}>
          <p className="text-xs">Balance</p> <p>${balance}</p>
        </span>
        <FaMicrochip className={`${textClass} text-2xl`} />
      </div>
      <div className="flex gap-14 pl-4">
        <span className={` flex flex-col gap-1 `}>
          <p className="text-xs text-[#c3c2fa]">CARD HOLDER</p>
          <p className={`text-xs ${textClass}`}>{cardHolder}</p>
        </span>
        <span className={` flex flex-col gap-1 ${textClass}`}>
          <p className="text-xs text-[#c3c2fa]">VALID THRU</p>
          <p className={`${textClass} text-xs`}>{expiry}</p>
        </span>
      </div>
      <div
        className={`flex justify-evenly items-center pt-1 pb-4 ${footerBackgroundClass} rounded-b-2xl`}
      >
        <p className={`text-lg tracking-widest mt-2 ${textClass}`}>
          {hiddenCardNumber(cardNumber)}
        </p>
        <FaCcMastercard size={30} className={`${textClass}`} />
      </div>
    </div>
  );
};

export default Card;
