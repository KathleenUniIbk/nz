/*
Skript für Neuseelandreise
*/

//Karte initalisieren

let map = L.map('map').setView([-45.031389, 168.660833], 14);

// Hintergrundkarte definieren
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //Marker zeichnen
    let marker = L.marker([-45.031389, 168.660833]).addTo(map);

    //Popup definieren und öffnen
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();