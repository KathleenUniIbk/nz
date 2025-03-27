/*
Skript für Neuseelandreise
*/

let lat = -45.031389;
let lng = 168.660833;
let zoom = 14;

//Karte initalisieren
let map = L.map('map').setView([lat, lng], zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
      <h2>Queenstown</h2>
      <ul> 
      <li>Geogr. Breite: ${lat.toFixed(5)}° </li>
      <li>Geogr. Länge: ${lng.toFixed(5)}° </li>
      </ul>
      `).openPopup();