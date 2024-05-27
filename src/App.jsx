import { Route, Routes } from "react-router-dom";
import Index from "./components/home/Index";
import About from "./components/about/About";
import Porfolioar from "./components/portfolio/Porfolioar";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Porfolioar />} />
      </Routes>
    </>
  );
}

export default App;
