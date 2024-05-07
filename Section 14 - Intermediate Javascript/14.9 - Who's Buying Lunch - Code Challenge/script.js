var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    var drawnNumber = Math.floor(Math.random() * names.length);
    return names[drawnNumber] + " is going to buy lunch today!";
}

console.log(whosPaying(nameList));
