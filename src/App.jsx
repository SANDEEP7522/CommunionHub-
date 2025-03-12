import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/Home/Home';
import Community01 from './Pages/Communities/Community01/Community01';
import Community02 from './Pages/Communities/Community02/Community02';
import AllEvents from './Pages/Events/AllEvents/AllEvents';
import AddEvent from './Pages/Events/AddEvent/AddEvent';
import Leaders from './Pages/Leaders/Leaders';
import Support from './Pages/Support/Support';
import Communion from './components/Communion/Communion';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Communion />} />
          <Route path="/community1" element={<Community01 />} />
          <Route path="/community2" element={<Community02 />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/support" element={<Support />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App