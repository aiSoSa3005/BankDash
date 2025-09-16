const MainLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] grid-rows-[auto_1fr] w-screen h-screen">
      <nav className="bg-gray-400 col-span-2 p-4">
        {/* Navigation content goes here */}
        NAVBAR
      </nav>
      <aside className="row-span-2 bg-yellow-300">Sidebar</aside>
      <main className="p-4 bg-red-300">Main Content</main>
    </div>
  );
};

export default MainLayout;
