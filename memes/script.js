"use strict";

let currentImage = 0;
const myPhotos = ["img/meme1.jpg", "img/meme2.jpg", "img/meme3.png", "img/meme4.png", "img/meme5.png", "img/meme6.jfif", "img/meme7.jpg", "img/meme8.jpg", "img/meme9.jpg",
    "img/meme10.jpg", "img/meme11.jfif", "img/meme12.png", "img/meme13.png", "img/meme14.jfif", "img/meme15.jpg", "img/meme16.jfif", "img/meme17.jpg", "img/meme18.jpg",
    "img/meme19.jpg", "img/meme20.jpg"];
const container = document.getElementById('content');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', function (event) {
    event.preventDefault();

    currentImage++;
    if (currentImage > myPhotos.length - 1) { currentImage = 0; };

    swapImage();
});

prevBtn.addEventListener('click', function (event) {
    event.preventDefault();

    currentImage--;
    if (currentImage < 0) { currentImage = myPhotos.length-1; };

    swapImage();
});

function swapImage() {
    const newSlide = document.createElement('img');
    newSlide.src = myPhotos[currentImage];
    newSlide.className = "fadeinimg";
    newSlide.height = "500px";
    container.appendChild(newSlide);

    if (container.children.length > 1) {
        container.children[0].style.display = "none";
        container.removeChild(container.children[0]);
    }
}
