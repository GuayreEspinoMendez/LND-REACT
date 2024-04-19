//import "./App.css";
import Feature from "./pages/features/Feature";
import Home from "./pages/home/Home";
import Cookies from "./pages/cookies/Cookies";
import Conditions from "./pages/conditions/Conditions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Conditions" element={<Conditions/>}/>
        <Route path="/Cookies" element={<Cookies/>}/>
        <Route path="/Feature" element={<Feature />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
