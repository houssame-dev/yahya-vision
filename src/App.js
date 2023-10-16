import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Topbar from "./Components/Topbar";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Inferenced from "./Components/Projects/Inferenced";
import Sando from "./Components/Projects/Sando";
import "aos/dist/aos.css";
import Zero from "./Components/Projects/Zero";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inferenced" element={<Inferenced />} />
          <Route path="sando" element={<Sando />} />
          <Route path="zero" element={<Zero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
