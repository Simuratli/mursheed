const loggedBtn = document.getElementById("dropLogBtn");
const logContainer = document.getElementById("loggedContainer");
const responsivenavIcon = document.getElementById('responsivenavIcon');
const navbarMenu = document.getElementById('navbarMenu');
const bottomHeader = document.getElementById('')
loggedBtn.addEventListener("click", function() {
    logContainer.classList.toggle("open");
});
responsivenavIcon.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
});