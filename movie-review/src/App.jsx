import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Card from "./commons/Card";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Favorites from "./components/Favorites.jsx";
import Footer from "./commons/Footer";
import NotFound from "./commons/NotFound";
import Users from "./components/Users";
import UserCard from "./commons/UserCard";

const App = () => {

  return (
    <div className="app">
        <Navbar />
        <seccion className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserCard />} />
            <Route path="/favorites/:type/:id/*" element={<Favorites />} />
            <Route path="/media/:type/:id" element={<Card />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </seccion>
        <Footer />
    </div>
  );
};

export default App;
