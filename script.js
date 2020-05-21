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

refresh();

setInterval(next, 5000);