import React from "react";
import { on } from "unleash-server/dist/lib/db/client-metrics-store";

function Form() {

  function requestUserRepos(username){
    // create a variable to hold the `Promise` returned from `fetch`
    return Promise.resolve(fetch("https://api.github.com/users/" + username + "/repos"));
  }

  function cleardoc()
  {
    window.location.reload();
  }

  
  function onsubmitfunction()
  {
    
    console.log("Hi");
    var username = document.getElementById("usernameInput").value;
    document.getElementsByClassName("form")[0].innerHTML = "";
    document.getElementById("search_button").style.display = "block";

    Promise.resolve(fetch("https://api.github.com/users/" + username + "/repos")).then(response => response.json()).then(data => {
    
    if (data.message === "Not Found") {
          
      let div_row = document.getElementsByClassName("row")[0];
      let p = document.createElement("p");
      let message = document.createElement("h3");
      message.innerHTML = "Sorry!! Username not found.."
      message.style.color = "red";
      div_row.appendChild(p);
      div_row.appendChild(message);
    }
    else
    {
      for (let i in data) {
        
        // console.log('Repo:', data[i].name);
        // console.log('Description:', data[i].description);
        // console.log('URL:', data[i].owner.avatar_url);
        // console.log('=========================')
        

        
        //let row = document.getElementsByClassName("row");
        let card_size = document.createElement("div");
        card_size.className = "col-lg-4 mb-3 d-flex align-items-stretch";
        let card_div = document.createElement("div");
        card_div.className = "card";
        let card_header_div = document.createElement("div");
        card_header_div.className = "card-header text-white bg-primary";
        card_header_div.innerHTML = data[i].name;
        let card_body_div = document.createElement("div");
        card_body_div.className = "card-body";
        let title = document.createElement("h6");
        title.className = "card-title";
        title.innerHTML = data[i].description;
        let text = document.createElement("a");
        text.className = "card-text";
        text.innerHTML = data[i].html_url;
        card_body_div.appendChild(title);
        card_body_div.appendChild(text);
        card_div.appendChild(card_header_div);
        card_div.appendChild(card_body_div);
        card_size.appendChild(card_div);

        document.getElementsByClassName("row")[0].appendChild(card_size);
      }
    }
    });
    //console.log(res.PromiseResult);
  }

  return(
    <div>
      <h3 className="text-center mt-5">GitHub Repos</h3>
      <p></p>
      <div className="container">
        <div className="form">
          <form id="gitHubForm" className="form-inline mx-auto" >
            <input id="usernameInput" className="form-control mb-5" type="text" name="username"  placeholder="GitHub Username"></input>
            <button name="submit" className="btn btn-dark ml-2 mb-5 btn-lg" value="Submit" type="button" onClick={onsubmitfunction}>Submit</button>
          </form>
        </div>
        <div className="centre-div">
          <p></p>
          <p></p>
          <button style={{ display: "none" }} name="search" className="btn btn-dark btn-lg" id="search_button" value="Search" type="button" onClick={cleardoc}>Search for a new user</button>
          <div className="row">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
      

  );
}

export default Form;