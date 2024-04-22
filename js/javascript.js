function changeStyle(newStyle) {
    document.getElementById('color').setAttribute('href', newStyle);
}

let visitorName = prompt("Welcome to our site!\nPlease tell us your name.");

document.getElementById('pageWelcome').innerHTML = "Welcome " + visitorName;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}