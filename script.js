"use strict";

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const img = document.querySelector("img");
const div = document.querySelector("div");
const h2 = document.createElement("h2");
let a = [
  "lol you thought you had a choice",
  "bala manyake",
  "wer khayye oule yes",
  "eh la tize",
  "bro kbese yes hala2 7ej tetmanyake",
];
let number = 0;
let seen = [];
yes.addEventListener("click", () => {
  img.srcset = "diwali.gif";
  yes.setAttribute("hidden", true);
  no.setAttribute("hidden", true);
  h2.textContent = "GOOD CHOICE SEE YOU FEB 14 @ 6:30 PM <3";
  div.appendChild(h2);
});
no.addEventListener("click", () => {
  if (number < a.length) {
    no.textContent = a[number];
    number++;
  } else {
    no.textContent = "khalas battal fi ma ba2a tekebse ";
  }
});
