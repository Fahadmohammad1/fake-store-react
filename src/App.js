import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto my-4">
        <Menubar></Menubar>
      </div>
      <Products></Products>
    </div>
  );
}

export default App;
