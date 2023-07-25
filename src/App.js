import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdsContent from './Components/AdsContent';
import NavBar from './Components/NavBar';
import GlobeStateProvider from './GlobleState/GlobleState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserCardFull from './Components/UserCardFull';
import CoverPage from './Components/coverpage';

function App() {
  return (
    <GlobeStateProvider>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/hp" element={<AdsContent />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path={'/Card/'} element={<UserCardFull />} />
          </Routes>
        </div>
      </Router>
    </GlobeStateProvider>
  );
}

export default App;
