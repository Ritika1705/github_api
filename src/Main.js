import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form';
import Profile from './User_profile';

function Main() {

  var i = 0;
  var txt = '<> GIT-FINDER </>';
  var speed = 150;

  window.onload = function typer(){

    if (i < txt.length) {
      var head = document.getElementById("heading").innerHTML += txt.charAt(i);
      console.log(head.innerText);
      i++;
      setTimeout(typer, speed);
    }
  }
  return (
    <div className="container-main ">
      <h1 id="heading"></h1>
      <a href="/repos">
        <button class="btn btn-primary btn-lg pad ">Search Repos</button>
      </a>
      <a href="/user_profile">
        <button class="btn btn-primary btn-lg pad ">Search Profile</button>
      </a>
    </div>
  );
}

export default Main;