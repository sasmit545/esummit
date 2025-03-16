import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import ESummitPage from './HomePage';
// import Hero from './component/hero_section/Hero';


const App = () => {
  return (
    <Router>
      <Navbar />
      <ESummitPage/>
      <Routes>
        <Route path="/" element={<h1>Here is Hero section </h1>} />
        <Route path="/events" element={<h1>Events Page</h1>} />
        <Route path="/speakers" element={<h1>Speakers Page</h1>} />
        <Route path="/team" element={<h1>Team Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
