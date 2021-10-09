// console.log("Welcome to JavaScript console log");

$(function () {
    console.log("loaded")
    loadUpdates();
    window.addEventListener('resize', loadUpdates);
    console.log($("#updates-mobile > ul"));
    $("#updates-mobile").click(() => { $("#updates-mobile > ul").toggle(); })

    // spinning
    console.log('add spinning');
    $(".responsive-img").click((evt) => {console.log('spinning'); spin(evt.target); })
});

function loadUpdates() {
    var x = window.matchMedia("(min-width: 700px)");
    console.log("(max-width: 350px)", x)
    if (x.matches) { // If media query matches ==> big screen
        $("#updates").load("/blog/updates.html");
        $("#updates-mobile").empty();
    } else { // for small screens
        $("#updates-mobile").load("/blog/updates.html");
        $("#updates").empty();
    }
}

function spin(target) {
    target.classList.add("spin");
    setTimeout(() => {
        target.classList.remove("spin");
    }, 2000); 
}