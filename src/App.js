import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetUs from './pages/MeetUs';

import EventsPage from './pages/EventsPage';
import Sponsor from './pages/Sponsor';


/* General Page to allow for different pages */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet" element={<MeetUs />} />

        <Route path="/events" element={<EventsPage />} />
        <Route path="/sponsor" element={<Sponsor/>} />
      </Routes>
    </Router>
  );
}

export default App;