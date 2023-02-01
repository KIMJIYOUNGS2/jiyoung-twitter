import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
