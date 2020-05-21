let i = 0;
const container = document.getElementById("slider");
const slides = container.querySelectorAll(".slider-items");

function refresh() {

    for (slide of slides) {
        slide.className = "slider-items display-none";
    };

    slides[i].className = "slider-items display-flex";
};

function next() {
    i++;

    if (i >= slides.length) i = 0;

    refresh();
};

function prev() {
    i--;

    if (i < 0) i = slides.length - 1;

    refresh();
};

container.querySelector(".next").addEventListener("click", next);
container.querySelector(".prev").addEventListener("click", prev);
container.querySelector(".pause").addEventListener("click", pause);
container.querySelector(".start").addEventListener("click", start);

refresh();

let changeImage = setInterval(next, 5000);

function pause() {
    clearInterval(changeImage);
    container.querySelector(".pause").className = "start";
};

function start() {
    changeImage = setInterval(next, 5000);
    container.querySelector(".start").className = "pause";
};