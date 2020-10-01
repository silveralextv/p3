const date = new Date();
/*Diapo*/
class Diapo {
  constructor(container) {
    this.i = 0;
    this.play = true;
    this.container = document.getElementById(container);
    this.slides = this.container.querySelectorAll(".slider-items");
    this.container.querySelector(".next").addEventListener("click", () => {
      this.next();
    });
    this.container.querySelector(".prev").addEventListener("click", () => {
      this.prev();
    });
    this.btn = this.container.querySelector(".btn");
    this.btn.addEventListener("click", () => {
      this.playPause();
    });
    this.refresh();
    this.changeImage = setInterval(() => {
      this.next();
    }, 1000);
    this.keys();
  }

  keys() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.prev();
          break;
        case "ArrowRight":
          this.next();
          break;
      }
    });
  }

  refresh() {
    for (let slide of this.slides) {
      slide.className = "slider-items display-none";
    }

    this.slides[this.i].className = "slider-items display-flex";
  }

  next() {
    this.i++;

    if (this.i >= this.slides.length) this.i = 0;

    this.refresh();
  }

  prev() {
    this.i--;

    if (this.i < 0) this.i = this.slides.length - 1;

    this.refresh();
  }

  playPause() {
    if (this.play) {
      clearInterval(this.changeImage);
      this.btn.className = "btn play";
    } else {
      this.changeImage = setInterval(() => {
        this.next();
      }, 1000);
      this.btn.className = "btn pause";
    }
    this.play = !this.play;
  }
}

const diapo = new Diapo("slider");

/*Map*/

let mymap = L.map("mapid").setView([45.75, 4.85], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "sk.eyJ1Ijoic2lsdmVyYWxleHR2IiwiYSI6ImNrYzM2eXdnOTI0bmsyeW80emVvMGd5aHIifQ.JPNW0aI1E6eDH6K90Pvt9w",
  }
).addTo(mymap);

const contractName = "Lyon";

const apiKey = "95095e2132411b499e70e8bd5b06f24d7e925d41";

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
}

console.log(url);

ajaxGet(url, (response) => {
  console.log(response);
  let pointers = response;

  for (let item of pointers) {
    if (item.banking == true || item.status == "OPEN") {
      let name = item.name.replace(item.number + " - ", "");
      let marker = L.marker([item.position.lat, item.position.lng]).addTo(
        mymap
      );
      marker.bindPopup("<b>" + name + "</b> <br>" + item.address);
      marker.on("click", () => {
        document.getElementById("modal").innerHTML =
          `
                <p>Adresse : <b>` +
          item.address +
          `</b></p>
                <p><b>` +
          item.available_bike_stands +
          `</b> places</p>
                <p><b>` +
          item.available_bikes +
          `</b> vélos disponibles</p>
                <form>
                
                <h1>Réserver</h1>
            
                <label name="lastname">Nom : </label>
                <input type="text" name="lastname" id="lastname">
            
                <label name="firstname">Prénom : </label>
                <input type="text" name="firstname" id="firstname">

                
                <canvas id="signature" height="100px">
                    Get a better browser, bro.
                </canvas>

                <a href="" id="book">Réserver</a>
                </form>
                `;
        initCanvas();
        initBook();
      });
    }
  }
});

if (localStorage.getItem("bookHour") > new Date().getTime){
  
} else {

};
const end = Math.floor(Date.now() / 1000) + 20 * 60;
const now = Math.floor(Date.now() / 1000);
let total = end - now
  const minutes = Math.floor(total / 60);
  const secondes = ("0" + total % 60).substr(-2);
  console.log(minutes, secondes);