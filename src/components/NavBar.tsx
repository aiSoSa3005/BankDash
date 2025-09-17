import InputSearch from "./InputSearch";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

interface Props {
  onSearch: (value: string) => void;
  heading: string;
}

const NavBar = ({ onSearch, heading }: Props) => {
  return (
    <nav className="bg-white col-span-2 p-4 flex justify-between items-center border-b-2 border-[#e6eff5]">
      <h1 className="font-semibold text-3xl text-[#4d547d]">{heading}</h1>
      <div className="flex gap-6 items-center">
        <InputSearch
          placeholder="Search for something"
          onSearch={(q) => onSearch(q)}
        />
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-[#f5f7fa] flex justify-center items-center">
            <CiSettings color="#718ebf" size={25} />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#f5f7fa]">
            <IoMdNotificationsOutline color="#fe5c73" size={25} />
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d53369] to-[#daae51] flex justify-center items-center text-white font-semibold">
            PO{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
