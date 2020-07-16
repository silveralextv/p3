/*Diapo*/
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

/*Map*/

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoic2lsdmVyYWxleHR2IiwiYSI6ImNrYzM2eXdnOTI0bmsyeW80emVvMGd5aHIifQ.JPNW0aI1E6eDH6K90Pvt9w'
}).addTo(mymap);

let marker = L.marker([51.5, -0.09]).addTo(mymap);

const contractName = 'Lyon';

const apiKey = '95095e2132411b499e70e8bd5b06f24d7e925d41';

const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${contractName}&apiKey=${apiKey}`;

function ajaxGet(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            callback(response);
        }
    };
    request.open("GET", url);
    request.send();
};


console.log(url);

ajaxGet(url, (response) => {
    console.log(response);
});

for each(let item in ajaxGet(url, (response))){
    console.log(item);
};