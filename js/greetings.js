//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function paintGreetings(username){
    greeting.innerText = `Welcome! ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    link.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){   
    event.preventDefault();
    const username = loginInput.value;   
    loginForm.classList.add(HIDDEN_CLASSNAME)
    //greeting.innerText = "Welcome! " + username;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}









