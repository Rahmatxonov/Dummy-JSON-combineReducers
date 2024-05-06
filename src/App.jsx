import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import LikesPage from "./pages/LikesPage";
import BoughtPage from "./pages/BoughtPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/likes" element={<LikesPage />}></Route>
        <Route path="/bought" element={<BoughtPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
