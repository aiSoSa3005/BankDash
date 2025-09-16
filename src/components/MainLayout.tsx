import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] grid-rows-[auto_1fr] w-screen h-screen">
      <aside className="row-span-2 bg-yellow-300">BankDash</aside>
      <nav className=" col-span-1 ">
        <NavBar />
      </nav>
      <main className="p-4 bg-red-300">Main Content</main>
    </div>
  );
};

export default MainLayout;
