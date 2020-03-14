// top nav js

const dropLogBtn = document.getElementById("dropLogBtn");
const loggedid = document.getElementById("loggedid");

dropLogBtn.addEventListener("click", function() {
    loggedid.classList.toggle("open");
});

// center nav js
const hamburger = document.getElementById("hamburger");
const openmenu = document.getElementById("openmenu");

hamburger.addEventListener("click", function() {
    openmenu.classList.toggle("active");
});