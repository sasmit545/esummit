import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Team from "./team";
import EventPage from "./EventPage";
import ESummitPage from './HomePage';
import About from "./About/about";
import SpeakersPage from "./speakers";

import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<ESummitPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
