import "./App.css";
import Card from "./components/Card";
import MainLayout from "./components/MainLayout";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <MainLayout>
        <Card
          balance={5758}
          cardHolder="Eddy Cusuma"
          expiry="12/26"
          cardNumber={3888399922002}
        />
      </MainLayout>
    </>
  );
}

export default App;
