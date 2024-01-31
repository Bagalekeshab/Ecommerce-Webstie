import LoginPage from "./Component/login";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ForgetFormPage from "./Component/forgetform";
import SignUpPage from "./Component/signup";
import ErrorPage from "./Component/ErrorPage";

function App() {
  return (
    <div className="APP">
      <Router>
        <Routes>
          
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/forgetform" element={<ForgetFormPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/errorpage" element={<ErrorPage/>}/>
          
        </Routes>
      </Router>
    </div>
   
    
    
  );
}

export default App;
