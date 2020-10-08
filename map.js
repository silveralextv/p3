class Map {
constructor() {
    this.contractName = "Lyon";
    this.apiKey = "95095e2132411b499e70e8bd5b06f24d7e925d41";
    this.mapInit();   
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
    this.url = `https://api.jcdecaux.com/vls/v1/stations?contract=${this.contractName}&apiKey=${this.apiKey}`;
    
    ajaxGet(url, callback) {
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
}
}