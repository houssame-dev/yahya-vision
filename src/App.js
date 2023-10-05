import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Topbar from "./Components/Topbar";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
