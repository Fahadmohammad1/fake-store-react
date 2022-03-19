import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";
import Products from "./components/Products/Products";
import { useState } from "react";

function App() {
  const [item, setItem] = useState(0);
  const cartItem = () => {
    setItem(item + 1);
  };
  return (
    <div className="App">
      <div className="container mx-auto my-4">
        <Menubar item={item}></Menubar>
      </div>
      <Products cartItem={cartItem}></Products>
    </div>
  );
}

export default App;
