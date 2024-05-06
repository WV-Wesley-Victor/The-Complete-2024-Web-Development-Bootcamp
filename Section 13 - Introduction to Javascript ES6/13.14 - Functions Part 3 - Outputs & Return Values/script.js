var money = 4;
var price = 1.5;

function calcBottles(money, price) {
    var bottles = Math.floor(money / price);
    return bottles;
}
var bottles = calcBottles(money, price);

function calcChange(money, price) {
    var change = money % price;
    return change;
}
var change = calcChange(money, price);

function getMilk(change, bottles) {
    var mensagem = "The price of each bottle of milk is $" + price + ". You gave me $" + money + ", so you can purchase " + bottles + " bottles of milk. Your change will be $" + change;
    return mensagem;
}
var mensagem = getMilk(change, bottles);

console.log(mensagem);
