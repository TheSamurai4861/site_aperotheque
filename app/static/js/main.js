// main.js

// Initialisation de la carte avec Leaflet.js
var map = L.map('map').setView([20, 0], 2); // Vue initiale centrée sur le monde

// Ajout de la couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Données d'exemple : emplacements avec des prix
var locations = [
    {lat: 48.8566, lon: 2.3522, price: '100€'}, // Paris
    {lat: 40.7128, lon: -74.0060, price: '150€'}, // New York
    {lat: 35.6895, lon: 139.6917, price: '200€'} // Tokyo
];

// Ajout des marqueurs sur la carte
locations.forEach(function(loc) {
    L.marker([loc.lat, loc.lon]).addTo(map)
        .bindPopup('Prix : ' + loc.price);
});
