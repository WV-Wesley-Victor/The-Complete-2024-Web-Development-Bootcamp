function beer() {
    console.log("Lyrics of the song 99 Bottles of Beer")
    var i = 98;
    while (i >= 1) {
        var text = (i + 1) + " bottles of beer on the wall, " + (i + 1) + " bottles of beer. Take one down and pass it around, " + i + " bottle of beer on the wall.";
        i--;
        console.log(text);
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}
beer();
