import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import ESummitPage from './HomePage';
// import Hero from './component/hero_section/Hero';
import Team from './team';
import About from './About/about';



const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ESummitPage/>} />
        <Route path="/events" element={<About/>} />
        <Route path="/speakers" element={<h1>Speakers Page</h1>} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;