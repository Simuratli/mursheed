// top nav
const dropLogBtn = document.getElementById("dropLogBtn");
const loggedid = document.getElementById("loggedid");

dropLogBtn.addEventListener("click", function() {
    loggedid.classList.toggle("open");
});