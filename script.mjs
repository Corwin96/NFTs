var values = [];
var lastCardUltraRare = false;

var cardname = document.getElementById("card-name");
var cardnumber = document.getElementById("card-number-styling");
var cardimage = document.getElementById("card-image");

//Attributes
var health = document.getElementById("health-text");
var inspiring = document.getElementById("inspiring-text");
var proHodler = document.getElementById("pro-hodler-text");
var friendlyBird = document.getElementById("friendly-bird-text");
var education = document.getElementById("education-text");

var style = {
    transform: 'scale(1)',
    top: 0,
    left: 0,
    margin: 0,
    width: '297px',
    height: '420px',
  };

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
    cardimage.src = "assets/magnifico.png";
    cardname.innerHTML = "el magnifico";
    cardnumber.innerHTML = "00";
    drawCard("Magnifico");
    health.innerHTML = 9000;
    inspiring.innerHTML = 9000;
    proHodler.innerHTML = 9000;
    friendlyBird.innerHTML = 9000;
    education.innerHTML = 9000;
    lastCardUltraRare = true;
}

function generateBlackbird() {
    if (lastCardUltraRare) {
        drawCard("common");
        lastCardUltraRare = false;
    }
    cardimage.src = "assets/blackbird.png";
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

function drawCard(cardType) {
    if (cardType === "Magnifico") {
        document.getElementById("health-description").style.left = "140px";
        document.getElementById("inspiring-description").style.left = "140px";
        document.getElementById("pro-hodler-description").style.left = "140px";
        document.getElementById("friendly-bird-description").style.left = "140px";
        document.getElementById("education-description").style.left = "140px";
    }
    else {
        document.getElementById("health-description").style.left = "102px";
        document.getElementById("inspiring-description").style.left = "102px";
        document.getElementById("pro-hodler-description").style.left = "102px";
        document.getElementById("friendly-bird-description").style.left = "102px";
        document.getElementById("education-description").style.left = "102px";
    }
}

function exportPNG() {
    var node = document.getElementById('nft-card');

    domtoimage.toPng(node, {style: style, width:297, height: 420})
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}

function exportJPG() {
    domtoimage.toJpeg(document.getElementById('nft-card'), {style: style, width:297, height: 420}, { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-card.jpeg';
            link.href = dataUrl;
            link.click();
        });
}

function exportSVG() {
    function filter(node) {
        return (node.tagName !== 'i');
    }

    domtoimage.toSvg(document.getElementById('nft-card'), {style: style, width:297, height: 420}, { filter: filter })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-card.svg';
            link.href = dataUrl;
            link.click();
        });
}