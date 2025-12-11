import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SocialIcon from "./components/Social-icon";
import Portfolio from "./components/Portfolio";
import ScaleBussiness from "./components/Scale-bussiness";
import Services from "./components/Services";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop smooth/>
      <div className="App">
        <Bar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ScaleBussiness />
        <Footer />
        <SocialIcon />
      </div>
    </Router>
  );
}

export default App;
