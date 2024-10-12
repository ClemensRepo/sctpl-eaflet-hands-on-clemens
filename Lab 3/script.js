let cambridge = [52.20, 0.12];
let singapore = [1.29, 103.85];
let singaporeMap = L.map("map").setView(singapore, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(singaporeMap);

