var latitude = null;
var longitude = null;
let map = L.Wrld.map("map", "a2bb22f903e342cdeff0a8ca1fb12e02", {
    center: [0, 0],
    zoom: 0,
    minZoom: 0,
    maxZoom: 0,
    zoomControl: false,
	scrollWheelZoom: false,
	doubleClickZoom: false,
	tap: false,
	touchZoom: false,
    environmentThemesManifest: "https://webgl-cdn1.wrld3d.com/mobile-themes-new/v1141/default/web.manifest.bin"
});

var issIcon = L.icon({
    iconUrl: 'pointer.png',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [40, 80], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function centerMap() {
	$.getJSON("http://api.open-notify.org/iss-now.json", function(data) {
        latitude = data["iss_position"]["latitude"]
        longitude = data["iss_position"]["longitude"]
        map.panTo(new L.LatLng(latitude, longitude));
    })
}

function initIssPosition() {
    $.getJSON("http://api.open-notify.org/iss-now.json", function(data) {
        latitude = data["iss_position"]["latitude"];
        longitude = data["iss_position"]["longitude"];
        map.panTo(new L.LatLng(latitude, longitude));
        points = [
            [latitude, longitude]
        ];
        trajectory = L.polyline(points, {
            color: "red"
        }).addTo(map)
    })
}
initIssPosition();

point = L.marker([0, 0], {
    icon: issIcon
}).addTo(map);
point.bindPopup("<b>Hello world!</b><br>I am the ISS.");

function updateIssPosition() {
    $.getJSON("http://api.open-notify.org/iss-now.json", function(data) {
        latitude = data["iss_position"]["latitude"]
        longitude = data["iss_position"]["longitude"]
        point.setLatLng([latitude, longitude])
        points.push([latitude, longitude])
        map.removeLayer(trajectory)
        trajectory = L.polyline(points, {
            color: "red"
        }).addTo(map)
    })
}
setInterval(updateIssPosition, 3000);

$("#centerthemap").click(function() {
    centerMap();
});