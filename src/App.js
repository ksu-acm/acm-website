import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetUs from './pages/MeetUs';
import SponsorsPage from './pages/SponsorsPage';
import EventsPage from './pages/EventsPage';


/* General Page to allow for different pages */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet" element={<MeetUs />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;