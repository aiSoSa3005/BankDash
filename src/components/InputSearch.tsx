import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

interface Props {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const InputSearch = ({ placeholder, onSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className=" border-gray-300 rounded-xl p-2 pr-4 bg-[#f5f7fa] flex gap-2 items-center">
      <IoMdSearch size={20} className="text-[#8ba3cb]" />
      <input
        className="text-sm text-[#8ba3cb] bg-[#f5f7fa] outline-none"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default InputSearch;
