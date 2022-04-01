import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Navbar from "./components/Navbar/Navbar.component";

import SiginView from "./views/Signin.view";
import SignupView from "./views/Signup.view";
function App() {
  return (

    <AuthProvider>

      <BrowserRouter>

        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/signin" element={<SiginView />} />
            <Route path="/signup" element={<SignupView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
