import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Selling from "./pages/Selling"
import Renting from "./pages/Renting"
import ContactUs from "./pages/ContactUs"
import Header from "./components/Header"


export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/renting" element={<Renting/>} />
        <Route path="/contact-us" element={<ContactUs />} />



      </Routes>
    </BrowserRouter>
    
  );
}
