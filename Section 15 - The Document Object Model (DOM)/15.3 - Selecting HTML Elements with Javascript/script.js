//document.getElementsByTagName()
console.log(document.getElementsByTagName("li"));
document.getElementsByTagName("li")[2].style.color = "purple";
console.log(document.getElementsByTagName("li").length);

//document.getElementsByClassName()
console.log(document.getElementsByClassName("btn"));
document.getElementsByClassName("btn")[0].style.color = "red";

//document.getElementById()
console.log(document.getElementById("title"));
document.getElementById("title").innerHTML = "Text Changed With Javascript";

//document.querySelector()
console.log(document.querySelector("h1"));
console.log(document.querySelector("#title"));
console.log(document.querySelector(".btn"));
console.log(document.querySelector("li a"));
console.log(document.querySelector("li.item"));
console.log(document.querySelector("#list a"));
console.log(document.querySelector("#list .item"));
document.querySelector(".item a").style.color = "red";

//document.querySelectorAll()
console.log(document.querySelectorAll("#list .item"));
document.querySelectorAll("#list .item")[2].style.color = "blue";
