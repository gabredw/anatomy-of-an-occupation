const isMobile = window.innerWidth > window.innerHeight;;

const zoomLevel = isMobile ? 4 : 8; // tweak these values

const map = L.map('map', {
    scrollWheelZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    dragging: false
}).setView([31.5, 35.0], zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);