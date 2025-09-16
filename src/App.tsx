import "./App.css";
import MainLayout from "./components/MainLayout";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <MainLayout>
        <DashBoard />
      </MainLayout>
    </>
  );
}

export default App;
