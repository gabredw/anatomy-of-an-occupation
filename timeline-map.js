// const isLandscape = window.innerWidth > window.innerHeight;
// const isPhone = window.innerWidth < 768; // typical phone breakpoint

// const zoomLevel = (isPhone && isLandscape) ? 5 : 8;

const map = L.map('map', {
    scrollWheelZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    dragging: false
}).setView([31.5, 35.0], 7.5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

