const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector(".login-btn");
const todoFlex = document.querySelector("#todo-form");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const quoteMain = document.querySelector(".quote-main");
const quoteAuthor = document.querySelector(".quote-author");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  todoFlex.classList.remove(HIDDEN_CLASSNAME);
  quoteMain.classList.add(HIDDEN_CLASSNAME);
  quoteAuthor.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  localStorage.clear();
  window.open.reload();
}

logoutForm.addEventListener("submit", onLogoutSubmit);

function paintGreetings(username) {
  greeting.innerText = `어서오세요 ${username}님, 환영합니다.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
