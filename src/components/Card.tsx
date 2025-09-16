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
  return (
    <div
      className={`w-72 rounded-2xl shadow-md  m-4 flex flex-col gap-3 h-auto bg-${
        color ? color : "gradient-to-r from-[#6b5bff] to-[#1a16f3]"
      } `}
    >
      <div className="flex justify-between items-center mb-4 pl-4 pt-4 pr-4">
        <span
          className={` text-sm flex flex-col gap-1/2 ${
            textColor ? textColor : "text-white"
          }`}
        >
          <p className="text-xs">Balance</p> <p>${balance}</p>
        </span>
        <FaMicrochip
          className={`text-${textColor ? textColor : "white"} text-2xl`}
        />
      </div>
      <div className="flex gap-14 pl-4">
        <span className={` flex flex-col gap-1/2 `}>
          <p className="text-xs text-[#c3c2fa]">CARD HOLDER</p>
          <p className={`text-xs text-${textColor ? textColor : "white"}`}>
            {cardHolder}
          </p>
        </span>
        <span
          className={` flex flex-col gap-1/2 ${
            textColor ? textColor : "text-white"
          }`}
        >
          <p className="text-xs text-[#c3c2fa]">VALID THRU</p>
          <p className={`text-${textColor ? textColor : "white"} text-xs`}>
            {expiry}
          </p>
        </span>
      </div>
      <div
        className={`flex justify-evenly items-center pt-1 pb-4 bg-${
          color ? color : "gradient-to-l from-[#6b5bff] to-[#1a16f3]"
        } rounded-b-2xl`}
      >
        <p
          className={`text-lg tracking-widest mt-2 text-${
            textColor ? textColor : "white"
          }`}
        >
          {hiddenCardNumber(cardNumber)}
        </p>
        <FaCcMastercard
          size={30}
          color={`${textColor ? textColor : "white"}`}
        />
      </div>
    </div>
  );
};

export default Card;
