const randomNum =Math.floor(Math.random()* 24)
const chosenImage = `${randomNum}.png`;

const bgImg =  `./img/${chosenImage}`;

document.body.style.backgroundImage= "url('" + bgImg + "')";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "100vh";

