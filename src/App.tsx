import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";
import { Toaster } from "@/components/ui/sonner";
import RestrauntMenu from "./components/RestrauntMenu";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-item" element={<FoodItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/res-menu" element={<RestrauntMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
