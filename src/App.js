import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import ShopPage from "./pages/ShopPage";
import HomePageTwo from "./pages/HomePageTwo";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/" element={<HomePageTwo />} />
        <Route exact path="/home-2" element={<HomePageTwo />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
