import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdsContent from "./Components/AdsContent";
import NavBar from "./Components/NavBar";
import GlobeStateProvider from "./GlobleState/GlobleState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserCardFull from "./Components/UserCardFull";
import CoverPage from "./Components/coverpage";

const App = () => {
  return (
    <GlobeStateProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route element={<NavBar />}>
              <Route path="/home" element={<AdsContent />} />

              <Route path={"/Card/"} element={<UserCardFull />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </GlobeStateProvider>
  );
};

export default App;
