class Diapo {
    constructor(container) {
        this.i = 0;
        this.play = true;
        this.container = document.getElementById(container);
        this.slides = this.container.querySelectorAll(".slider-items");
        this.container.querySelector(".next").addEventListener("click", () => { this.next() });
        this.container.querySelector(".prev").addEventListener("click", () => { this.prev() });
        this.btn = this.container.querySelector(".btn");
        this.btn.addEventListener("click", () => { this.playPause() });
        this.refresh();
        this.changeImage = setInterval(() => { this.next() }, 1000);
        this.keys();
    };

    keys() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft": this.prev(); break;
                case "ArrowRight": this.next(); break;
            }
        });
    };

    refresh() {
        for (let slide of this.slides) {
            slide.className = "slider-items display-none";
        };

        this.slides[this.i].className = "slider-items display-flex";
    };

    next() {
        this.i++;

        if (this.i >= this.slides.length) this.i = 0;

        this.refresh();
    };

    prev() {
        this.i--;

        if (this.i < 0) this.i = this.slides.length - 1;

        this.refresh();
    };

    playPause() {
        if (this.play) {
            clearInterval(this.changeImage);
            this.btn.className = "btn play";
        } else {
            this.changeImage = setInterval(() => { this.next() }, 1000);
            this.btn.className = "btn pause";
        };
        this.play = !this.play;
    };
};

const diapo = new Diapo("slider");

var mymap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2lsdmVyYWxleHR2IiwiYSI6ImNrYnQzZm1jZTA2MngyeXV2NHBiejRjcG0ifQ.NCah2CiEnjVmk2rf93PSjQ'
}).addTo(mymap).setView([51.505, -0.09], 13);