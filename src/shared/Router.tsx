import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
