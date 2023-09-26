import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister'; // Import your LoginRegister component
import Deal from './components/Deal';
import MyDeals from './components/MyDeals';
import MakeADeal from './components/MakeADeal';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/>
        <Routes>
          <Route path="/mydeals" element={<MyDeals />} />
          <Route path="/makedeal" element={<MakeADeal />} />
          <Route path="/deal" element={<Deal/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
