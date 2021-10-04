// console.log("Welcome to JavaScript console log");

$(function () {
    loadUpdates();
    window.addEventListener('resize', loadUpdates);
});

function loadUpdates() {
    var x = window.matchMedia("(max-width: 350px)");
    console.log("(max-width: 350px)", x)
    if (x.matches) { // If media query matches
        $("#updates").load("/blog/updates.html");
    } else {
    }
}
