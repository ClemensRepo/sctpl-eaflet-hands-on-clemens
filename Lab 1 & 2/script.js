let cambridge = [52.20, 0.12];
let singapore = [1.29, 103.85];
let singaporeMap = L.map("map").setView(singapore, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(singaporeMap);

let marker = L.marker(singapore);
marker.addTo(singaporeMap);
marker.bindPopup("<p><bold>Orchard</bold>Orchard is a great place to shop and dine in Singapore with many shopping centers and restaurants.</p>");
marker.addEventListener("click", () => {
    alert("This is Orchard. A shopping district");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: "red",
    fillColor: "yellow",
    fillOpacity: 0.7,
    radius: 300
});
circle.addTo(singaporeMap);