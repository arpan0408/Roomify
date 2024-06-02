import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Cont from "./components/Cont"
import Add_Room from "./components/Add_Room";
import Profile from "./components/Profile";
import Signout from "./components/Signout";
import Login from "./components/Login";
import Footer from "./components/Footers"
import Feature from './components/Features'
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./components/firebase";
import { useEffect } from "react";


function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  });
  return (
    <>
      <div className="app-container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={user ? <Navigate to="/Home" /> : <Login />} />
          </Routes>
          <Routes>
            <Route path="Home" element={!user ? <Navigate to="/" />  : <Home />} />
          </Routes>
          <Routes>
            <Route path="Rooms" element={!user ? <Navigate to="/" />  : <Rooms />} />
          </Routes>
          <Routes>
            <Route path="About" element={<About />} />
          </Routes>
          <Routes>
            <Route path="Contact" element={<Cont />} />
          </Routes>
          <Routes>
            <Route path="Add_Room" element={!user ? <Navigate to="/" />  : <Add_Room />} />
          </Routes>
          <Routes>
            <Route path="Profile" element={!user ? <Navigate to="/" />  : <Profile />} />
          </Routes>
          <Routes>
            <Route path="Signout" element={<Signout />} />
          </Routes>
          <Routes>
            <Route path="Feature" element={<Feature />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
