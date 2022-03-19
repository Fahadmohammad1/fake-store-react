import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-4">
        <Menubar></Menubar>
      </div>

      <div>
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
