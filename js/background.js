const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
];

const BACKGROUND_CSS = "bgImage";

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImage}`;

(document.body.appendChild(bgImages)).classList.add(BACKGROUND_CSS);



