// console.log("Welcome to JavaScript console log");

$(function () {
    console.log("loaded")
    loadUpdates();
    window.addEventListener('resize', loadUpdates);
});

function loadUpdates() {
    var x = window.matchMedia("(min-width: 700px)");
    console.log("(max-width: 350px)", x)
    if (x.matches) { // If media query matches
        $("#updates").load("/blog/updates.html");
    } else {
        $("#updates").empty();
    }
}
