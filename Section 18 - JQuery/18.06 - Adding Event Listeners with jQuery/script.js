for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "purple";
    });
}

$("button").click(function () {
    $("h1").css("color", "green");
});

document.addEventListener("keydown", function (event) {
    console.log(event.code);
});

$(document).keydown(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "blue");
});
