window.onscroll = function() { myFunction() };

var navbars = document.getElementById("navbars");
var sticky = navbars.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbars.classList.add("sticky")
    } else {
        navbars.classList.remove("sticky");
    }
}