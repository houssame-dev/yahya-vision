import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Topbar from "./Components/Topbar";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Inferenced from "./Components/Projects/Inferenced";
import Sando from "./Components/Projects/Sando";

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
          <Route path="inferenced" element={<Inferenced />} />
          <Route path="sando" element={<Sando />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
