import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdsContent from "./Components/AdsContent";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<AdsContent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
