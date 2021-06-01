//https://www.w3schools.com/howto/howto_js_dropdown.asp
//https://stackoverflow.com/questions/42333757/multiple-dropdown-menus-using-same-js-code
//When the user clicks on the button, a dropdown menu appears
function dropdownFunc(a){
    a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}