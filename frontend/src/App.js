import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import ESummitPage from './HomePage';
import InvestorsPage from './InvestorsPage';
import SponsorsPage from './SponsorsPage';
// import Hero from './component/hero_section/Hero';
import Team from './team';
import EventPage from './EventPage';
import InvestorsPage from './InvestorsPage';
import SponsorsPage from './SponsorsPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ESummitPage />} />
        <Route path="/events" element={<h1>Events Page</h1>} />
        <Route path="/speakers" element={<h1>Speakers Page</h1>} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <InvestorsPage/>
      <SponsorsPage/>

    </Router>
  );
};

export default App;
