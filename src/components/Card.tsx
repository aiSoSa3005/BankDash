import { FaMicrochip } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
interface Props {
  balance: number;
  cardNumber: number;
  cardHolder: string;
  expiry: string;
  color: string | null;
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
      className={`flex-1 rounded-3xl shadow-md  flex flex-col justify-between  ${backgroundClass} `}
    >
      <div className="flex justify-between items-center mb-4 pl-4 pt-4 pr-4 flex-2">
        <span className={` text-sm flex flex-col gap-1 ${textClass}`}>
          <p className="text-xs">Balance</p> <p>${balance}</p>
        </span>
        <FaMicrochip className={`${textClass} text-2xl`} />
      </div>
      <div className="flex justify-between flex-2 pl-4 pr-4">
        <span className={` flex flex-col gap-1 `}>
          <p className="text-xs text-[#c3c2fa]">CARD HOLDER</p>
          <p className={`text-s ${textClass}`}>{cardHolder}</p>
        </span>
        <span className={` flex flex-col gap-1 ${textClass}`}>
          <p className="text-xs text-[#c3c2fa]">VALID THRU</p>
          <p className={`${textClass} text-s`}>{expiry}</p>
        </span>
      </div>
      <div
        className={`flex flex-1 justify-evenly items-center pt-1 pb-4 ${footerBackgroundClass} rounded-b-3xl`}
      >
        <p className={`text-lg tracking-widest mt-2 ${textClass}`}>
          {hiddenCardNumber(cardNumber)}
        </p>
        <FaCcMastercard size={30} className={`${textClass} `} />
      </div>
    </div>
  );
};

export default Card;
