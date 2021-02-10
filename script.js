var values = [];

var cardname = document.getElementById("card-name");
var cardnumber = document.getElementById("card-number-styling");
var cardimage = document.getElementById("card-image");

//Attributes
var health = document.getElementById("health-text");
var inspiring = document.getElementById("inspiring-text");
var proHodler = document.getElementById("pro-hodler-text");
var friendlyBird = document.getElementById("friendly-bird-text");
var education = document.getElementById("education-text");

function generateCard() {
    var rarity = Math.floor(Math.random() * 10000);
    console.log(rarity);
    switch (rarity) {
        case 0:
            generateMagnifico();
            break;
        default:
            generateBlackbird();
    }
}

function generateMagnifico() {
    cardimage.src="assets/magnifico.png";
    cardname.innerHTML = "el magnifico";
    cardnumber.innerHTML = "00";
    health.innerHTML = 9000;
    inspiring.innerHTML = 9000;
    proHodler.innerHTML = 9000;
    friendlyBird.innerHTML = 9000;
    education.innerHTML = 9000;
}

function generateBlackbird() {
    cardimage.src="assets/blackbird.png";
    cardname.innerHTML = "the blackbird";
    cardnumber.innerHTML = "01";
    generateAttributes();
}

function generateAttributes() {
    for (let i = 0; i < 5; i++) {
        values[i] = Math.floor((Math.random() * 99) + 1);
    }
    health.innerHTML = values[0];
    inspiring.innerHTML = values[1];
    proHodler.innerHTML = values[2];
    friendlyBird.innerHTML = values[3];
    education.innerHTML = values[4];
}