import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form';
import Profile from './User_profile';
import Main from './Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/repos" element={<Form/>}/>
        <Route path="/user_profile" element={<Profile/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
    

