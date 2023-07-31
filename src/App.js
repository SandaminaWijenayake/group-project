import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdsContent from "./Components/AdsContent";
import { GlobleContext } from "./GlobleState/GlobleState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserCardFull from "./Components/UserCardFull";
import CoverPage from "./Components/coverpage";
import Protected from "./Components/Protected";
import { useState } from "react";
import EditProfile from "./Components/EditProfile";
import AboutUs from "./Components/AboutUs";
import Layout from "./Components/Layout";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [currentUSer, setCurrentUser] = useState();
  return (
    <GlobleContext.Provider
      value={{ isSignedIn, setIsSignedIn, currentUSer, setCurrentUser }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

            <Route element={<Layout />}>
              <Route
                path="/home"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <AdsContent />
                  </Protected>
                }
              />

              <Route
                path={"/Card/:id"}
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <UserCardFull />
                  </Protected>
                }
              />
              <Route
                path="/EditProfile"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <EditProfile />
                  </Protected>
                }
              />
              <Route
                path="/AboutUs"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <AboutUs />
                  </Protected>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </GlobleContext.Provider>
  );
};

export default App;
