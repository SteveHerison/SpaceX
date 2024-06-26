import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Crew from "./pages/crew";
import Header from "./components/Header/Header";
import Destination from "./pages/destination";
import Technology from "./pages/technology";

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterMain;
