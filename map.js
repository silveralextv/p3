class Carte {
  constructor(modal) {
    this.contractName = "Lyon";
    this.apiKey = "95095e2132411b499e70e8bd5b06f24d7e925d41";
    this.modal = modal;
    this.mapInit();
    console.log("La carte est initialisée");
  }

  mapInit() {
    this.map = L.map("mapid").setView([45.75, 4.85], 13);
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
    ).addTo(this.map);

    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${this.contractName}&apiKey=${this.apiKey}`;

    this.ajaxGet(url, (pointers) => {
      for (let item of pointers) {
        if (item.banking == true || item.status == "OPEN") {
          let name = item.name.replace(item.number + " - ", "");
          let marker = L.marker([item.position.lat, item.position.lng]).addTo(
            this.map
          );
          marker.bindPopup("<b>" + name + "</b> <br>" + item.address);
          marker.on("click", () => {
            document.getElementById(this.modal).innerHTML =
              `<p>Adresse : <b>` +
              item.address +
              `</b></p><p><b>` +
              item.available_bike_stands +
              `</b> places</p><p><b>` +
              item.available_bikes +
              `</b> vélos disponibles</p>
                <form>
                <h1>Réserver</h1>
                <label name="lastname">Nom : </label>
                <input type="text" name="lastname" id="lastname">
                <label name="firstname">Prénom : </label>
                <input type="text" name="firstname" id="firstname">
                <canvas id="signature" width="200" height="100"></canvas>
                <a href="#" id="book">Réserver</a>
                </form>
                `;
            let canvas = new Signature("#signature")
          });
        }
      }
    });
  }

  ajaxGet(url, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        callback(response);
      }
    };
    request.open("GET", url);
    request.send();
  }
}
