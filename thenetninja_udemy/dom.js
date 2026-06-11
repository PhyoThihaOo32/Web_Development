// /**
//  * DOM
//  * -created by the browser
//  * -document object
//  */

// /**
//  * querySelector() grabs the first matching element from the HTML page.
//  */

// let para = document.querySelector("p");
// console.log(para);

// const error = document.querySelector(".error");
// console.log(error);

// const secError = document.querySelector("div.error");
// console.log(secError);

// /**
//  * querySelectorAll() - find all HTML elements that match a CSS selector.
//  */

// para = document.querySelectorAll("p");
// console.log(para);
// // we will get a node list which is very much look like an array but that is not array
// // we can use all the array methods on a node list

// // console.log(para[0]);
// console.log(para.forEach((para) => console.log(para)));

// let errors = document.querySelectorAll(".error");

// console.log(errors);

// // get element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// // get elements by their class name
// errors = document.getElementsByClassName("error");
// console.log(errors);

// // get elements by their tag name
// let paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

//ADDING AND CHANGING PAGE CONTENTS

// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText += " Pepito is playing in the living room";

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " day 12";
// });

// const content = document.querySelector(".content");
// // console.log(content.innerHTML);

// // content.innerHTML += "<h2>This is header h2</h2>";

// const people = ["mario", "luna", "dido"];
// people.forEach((person) => {
//   content.innerHTML += `<p> ${person} </p>`;
// });

// getting and setting the attributes

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute(
//   "href",
//   "https://www.youtube.com/watch?v=LzMnsfqjzkA&t=2068s"
// );

// link.innerText = "YouTube Web Development";

// const msg = document.querySelector("p");
// console.log(msg.getAttribute("class"));

// msg.setAttribute("class", "success");
// console.log(msg.getAttribute("class"));

// // setting attributes which doesn't exit yet

// msg.setAttribute("style", "color: green");

// changing CSS styles
// const title = document.querySelector("h1");

// // title.setAttribute("style", "margin: 50px;");
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = "50px";

// title.style.color = "crimson";
// title.style.fontSize = "60px";
// title.style.margin = null;
// title.style.fontSize = "";

// adding and removing classes

const content = document.querySelectorAll("p");

// content.classList.add("error");
// console.log(content.classList);
// content.classList.remove("error");
// console.log(content.classList);

// console.log(content.classList.add("success"));

// content.forEach((eachContent) => {
//   let str = eachContent.textContent; // innerText- some text can be hidden and textContent - get all the text inside the tag
//   if (str.includes("error")) {
//     eachContent.classList.add("error");
//   }
//   if (str.includes("success")) {
//     eachContent.classList.add("success");
//   }
// });

// const title = document.querySelector(".title");
// title.classList.toggle("test");
// title.classList.toggle("test");

// parent child and siblings

const article = document.querySelector("article");
// console.log(article.children);

// // we cannot use for each on html collector
// console.log(Array.from(article.children)); // return array doesn't chage original value

// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });

// const title = document.querySelector("h2");

// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children);

// events basics

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("we clicked");
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log("item clicked");
//     // console.log(e.target);
//     e.target.style.textDecoration = "line-through";
//   });
// });

// creating and removing elements
// event bubbling and event deligation

// const ul = document.querySelector("ul");

// // ul.remove();

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   //   ul.innerHTML += "<li>do more</li>";
//   const li = document.createElement("li");
//   li.textContent = "feed pepito";
//   //   ul.append(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll("li");

// // items.forEach((item) => {
// //   item.addEventListener("click", (e) => {
// //     console.log("event bubble in li");
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });

// ul.addEventListener("click", (e) => {
//   //   console.log("event bubble in ul");
//   //   console.log(e.target);
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

// more dom events

// const copy = document.querySelector(".copy-me");
// copy.addEventListener("copy", () => {
//   console.log("OI! my content is copyright.");
// });

// const box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   //   console.log(e.offsetX, e.offsetY);
//   box.textContent = `(x pos - ${e.offsetX} , y pos - ${e.offsetY})`;
// });

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });

// building pop-up
