import { IoMdSearch } from "react-icons/io";

const InputSearch = () => {
  return (
    <div className=" border-gray-300 rounded-xl p-2 pr-4 bg-[#f5f7fa] flex gap-2 items-center">
      <IoMdSearch size={20} className="text-[#8ba3cb]" />
      <input
        className="text-sm text-[#8ba3cb] bg-[#f5f7fa] outline-none"
        placeholder="Search for something"
      ></input>
    </div>
  );
};

export default InputSearch;
