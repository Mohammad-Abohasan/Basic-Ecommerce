import About from "./components/About";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="products/:productID" element={<ProductDetails />}/>
      </Routes>

    </div>
  );
}

export default App;
