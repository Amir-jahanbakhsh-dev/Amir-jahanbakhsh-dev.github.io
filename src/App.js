import Home from "./pages/home";
import Login from "./pages/loginPage";
import Articles from "./pages/Articles";
import { Routes } from "react-router";
import Admin from "./pages/adminPanel/admin";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from "./components/loginPage/login.js";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/adminOx20209935566903" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
