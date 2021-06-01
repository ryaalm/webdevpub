//https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 40px";
        document.getElementById("navbar").style.height = "80px";
        document.getElementById("logo").style.fontSize = "40px";
    } else {
        document.getElementById("navbar").style.padding = "20px 60px";
        document.getElementById("logo").style.fontSize = "50px";
        document.getElementById("navbar").style.height = "90px";
    }
}