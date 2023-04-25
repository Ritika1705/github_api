import React from "react";
import { on } from "unleash-server/dist/lib/db/client-metrics-store";

function User_profile() {

  function requestUserRepos(username){
    // create a variable to hold the `Promise` returned from `fetch`
    return Promise.resolve(fetch("https://api.github.com/users/" + username));
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

    Promise.resolve(fetch("https://api.github.com/users/" + username)).then(response => response.json()).then(data => {
    
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
        console.log(data.avatar_url);
        // console.log('Repo:', data[i].name);
        // console.log('Description:', data[i].description);
        // console.log('URL:', data[i].owner.avatar_url);
        // console.log('=========================')
        

        
        //let row = document.getElementsByClassName("row");
        let card_size = document.createElement("div");
        card_size.className = "col-sm-12 centercard";

        let card_div = document.createElement("div");
        card_div.className = "card";
        
        let card_body_img = document.createElement("img");
        card_body_img.className = "card-img-top round"
        card_body_img.src = data.avatar_url;

        let card_body_div = document.createElement("div");
        card_body_div.className = "card-body";

        let title = document.createElement("h5");
        title.className = "card-title";
        title.innerHTML = data.name;

        let text1 = document.createElement("h6");
        text1.className = "card-text";
        text1.innerHTML = "Public repositories: " + data.public_repos;

        let text2 = document.createElement("h6");
        text2.className = "card-text";
        text2.innerHTML = "Followers: " + data.followers;

        let button = document.createElement("a");
        button.className = "btn btn-primary";
        button.href = data.html_url;
        button.innerHTML = "View Profile"

        card_body_div.appendChild(title);
        card_body_div.appendChild(text1);
        card_body_div.appendChild(text2);
        card_body_div.appendChild(button);

        
        card_div.appendChild(card_body_img);
        card_div.appendChild(card_body_div);
        
        card_size.appendChild(card_div);

        document.getElementsByClassName("row")[0].appendChild(card_size);
      
    }
    });
    //console.log(res.PromiseResult);
  }

  return(
    <div>
      <h3 className="text-center mt-5">GitHub User Search</h3>
      <p></p>
      <div className="container">
        <div className="form">
          <form id="gitHubUserForm" className="form-inline mx-auto" >
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

export default User_profile;