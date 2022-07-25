import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Business from "./components/Business";
import Sports from "./components/Sports";
import Politics from "./components/Politics";
import Technology from "./components/Technology";
import Entertainment from "./components/Entertainment";
import Science from "./components/Science";
import Automobile from "./components/Automobile";
import Error from "./components/Error";
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/politics" element={<Politics />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/entertainment" element={<Entertainment />}></Route>
        <Route path="/science" element={<Science />}></Route>
        <Route path="/automobile" element={<Automobile />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
