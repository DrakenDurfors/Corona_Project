
// -|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-

// This code is for the "scroll-to-top" and will be copy-pasted into the 
// main js file


// To add the button you need to add the Id "ScrollBtn" and also give it the "display:"none"" attribute

// -|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-


// Find the button that will take you to the top:
var mybutton = document.getElementById("ScrollBtn");
// Check when the user is scrolling
window.onscroll = function() {scrollfunction()}

function scrollfunction(){
    // Check the position of the user from the top (px)
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// This adds an event listener to the button
mybutton.addEventListener("click", function() {ScrollTop()})

// This function makes the thing scroll to the top
function ScrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}