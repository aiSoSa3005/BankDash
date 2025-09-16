import type { ReactNode } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="grid grid-cols-[1fr_3fr] grid-rows-[auto_1fr] w-screen h-screen">
      <aside className="row-span-2 bg-yellow-300">
        <SideBar />
      </aside>
      <nav className=" col-span-1 ">
        <NavBar onSearch={onSearch} />
      </nav>
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
