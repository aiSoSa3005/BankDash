import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";

import "../App.css";

const MainLayout = () => {
  const location = useLocation();
  const dynamicHeading =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2).replace("-", " ");

  return (
    <div className="grid grid-cols-[1fr_3fr] grid-rows-[auto_1fr] w-screen h-screen">
      <aside className="row-span-2 ">
        <SideBar />
      </aside>
      <nav className=" col-span-1 ">
        <NavBar heading={dynamicHeading} onSearch={(q) => console.log(q)} />
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
