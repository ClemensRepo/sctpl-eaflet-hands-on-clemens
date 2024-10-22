window.addEventListener("DOMContentLoaded", async function () {

    // create a singapore map and point it at the center of singapore
    let latLng = [1.29, 103.85]
    let singaporeMap = L.map('map');
    singaporeMap.setView(latLng, 13);

    // setup the tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);

    let markerClusterGroup = L.markerClusterGroup();
    markerClusterGroup.addTo(singaporeMap);

    drawMarkers(markerClusterGroup);

    // setInterval to call the function in the first parameter
    // after the interval
    setInterval(async function () {
        drawMarkers(markerClusterGroup);
    }, 30000);
})

async function drawMarkers(clusterGroup) {
    let response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    
    clusterGroup.clearLayers(); // remove all the existing layers in the group
    for (let coordinates of response.data.features[0].geometry.coordinates) {
        let latLng = [coordinates[1], coordinates[0]];
        L.marker(latLng).addTo(clusterGroup);
    }
}

// window.addEventListener("DOMContentLoaded", async function () {
//     let cambridge = [52.20, 0.12];
//     let singapore = [1.29, 103.85];
//     let singaporeMap = L.map("map").setView(singapore, 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
//         maxZoom: 19, 
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
//     }).addTo(singaporeMap);

//     let markerClusterLayer = L.markerClusterGroup();
//     markerClusterLayer.addTo(singaporeMap);

//     drawMarkers();

//     setInterval(async function () {
//         drawMarkers();
//     }, 3000);

//     async function drawMarkers() {
//         let response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");

//         // Clear the markers before adding new ones
//         markerClusterLayer.clearLayers();
        
//         console.log(response.data.features[0].geometry.coordinates);
        
//         for (let coordinates of response.data.features[0].geometry.coordinates) {
//             L.marker([coordinates[1], coordinates[0]]).addTo(markerClusterLayer);
//         }
//     }
// });


// window.addEventListener("DOMContentLoaded", async function () {
//     let cambridge = [52.20, 0.12];
//     let singapore = [1.29, 103.85];
//     let singaporeMap = L.map("map").setView(singapore, 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(singaporeMap);


//     let markerClusterLayer = L.markerClusterGroup();
//     markerClusterLayer.addTo(singaporeMap);

//     drawMarkers();

//     setInterval(async function () {
//         drawMarkers();
//     },3000);


//     async function drawMarkers() {
//         let response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
//         markerClusterLayer.clearLayers();
//         console.log(response.data.features[0].geometry.coordinates);
//         for (let coordinates of response.data.features[0].geometry.coordinates) {
//             L.marker([coordinates[1], coordinates[0]]).addTo(markerClusterLayer);
//         }
//     }
// })

