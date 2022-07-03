import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header";
import Login from "./Layout/Login";
import Signup from "./Layout/Signup";
//import Welcome from "./components/Welcome";
import Sider from "./Layout/Sider";
import Home from "./component/Home";
import { Footer } from "antd/lib/layout/layout";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
  <>
        <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="sider">
            <Sider />
          </div>
          <div className="detail">
            <Routes>
              <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && <Route path="Home" element={<Home/>}/>}{" "}
              {/* <Route path="/Supplier" element={<Supplier />} />
              <Route path="/Supplier/add" element={<AddUser />} />
              <Route path="/Supplier/edit/:id" element={<EditUser />} /> */}
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  </>
  );
}

export default App;
