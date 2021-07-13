// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213,-122.3790], 5);

// Coordinates for each point to be used in the polyline.
// LAX, SFO, SLC, and SEA
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18, 
    tileSize: 512,  
    zoomOffset: -1,
    accessToken: API_KEY
});

// New airline route: SFO, AUS, YYZ, JFK

// let map = L.map('mapid').setView([40.7, -94.5], 4);

// let line = [
//   [37.6213, -122.3790],
//   [30.18999924, -97.668663992],
//   [43.678524, -79.629129],
//   [40.641766, -73.780968]
// ];
// L.polyline(line, {
//   stroke: true,
//   dashArray: "5, 10",
//   dashOffset: "0",
//   color: "blue",
//   weight: 4,
//   opacity: .5
// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18, 
//     tileSize: 512,  
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
console.log(" completed logic.js");