import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Consult from './components/Consult';
import ContactUs from './components/ContactUs';
import HealthBlogs from './components/HealthBlogs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import GetMed from './components/GetMed';

import DoctorLogin from './components/DoctorLogin';
import UserSignup from './components/UserSignup';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/ConsultDoctor" element={<Consult />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/GetMed" element={<GetMed />} />
            <Route path="/HealthBlogs" element={<HealthBlogs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/doctorLogin" element={<DoctorLogin />} />
            <Route path="/userLogin" element={<Home />} />
            <Route path="/UserSignup" element={<UserSignup />} /> {/* Updated component name */}
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
