import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

// Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import CartShop from "./components/CartShop";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<CartShop />} />
          <Route path="/" element={<Navigate to={"/products"} />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
