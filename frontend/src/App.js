import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Team from "./team";
import EventPage from "./EventPage";
import ESummitPage from "./HomePage";

const App = () => {
  return (
    <Router>
       
      <Navbar />
      <Routes>
        <Route path="/" element={<ESummitPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/speakers" element={<h1>Speakers Page</h1>} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
