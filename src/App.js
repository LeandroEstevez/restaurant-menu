import "./App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header></Header>
      </div>
      <Order></Order>
      <Inventory></Inventory>
    </div>
  );
}

export default App;
