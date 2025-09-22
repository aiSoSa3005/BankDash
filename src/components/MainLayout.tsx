import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";

import "../index.css";

const MainLayout = () => {
  const location = useLocation();
  const dynamicHeading =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2).replace("-", " ");
  console.log(dynamicHeading);
  return (
    <div className="grid grid-cols-[1fr_5fr] grid-rows-[auto_1fr] w-screen h-screen overflow-x-hidden">
      <aside className="row-span-2 ">
        <SideBar />
      </aside>
      <nav className=" col-span-1 ">
        <NavBar
          heading={dynamicHeading || "Overview"}
          onSearch={(q) => console.log(q)}
        />
      </nav>
      <main className=" col-span-1 row-span-1 overflow-y-auto p-5 bg-[#f5f7fa]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
