var acc = document.getElementsByClassName("guide_search_content_header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var c = this.children;
        for (i = 0; i < c.length; i++) {
            if (c[i].classList.contains("plus")) {
                c[i].classList.toggle("activate");
            }
        }
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";

        } else {
            panel.style.display = "none";
        }
    });
}


var acc = document.getElementsByClassName("accomadation_search_content_header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var c = this.children;
        for (i = 0; i < c.length; i++) {
            if (c[i].classList.contains("plus")) {
                c[i].classList.toggle("activate");
            }
        }
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";

        } else {
            panel.style.display = "none";
        }
    });
}



// Toggle table

var acc = document.getElementsByClassName("buttontable");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("activetable");
        var panel = $(this).closest('tr').next().slideToggle();
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}