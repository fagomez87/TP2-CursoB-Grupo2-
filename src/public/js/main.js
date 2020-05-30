// Es para usar leaflet 
const map = L.map('map-template').setView([-34.6099906,-58.431331], 12)

// Al ejecutarlo se conecta al servidor y nos devuelve un socket para escuchar y enviar eventos
const socket = io()
 
const tileUrl3 = "http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"

L.tileLayer(tileUrl3).addTo(map)

// Al activar este método, Leaflet utiliza la API de geolocalización del navegador para localizar mejor al usuario
map.locate({enableHighAccuracy: true})
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng]
    const marker = L.marker(coords)
    marker.bindPopup('You are Here!')
    map.addLayer(marker)
 // evento al servidor xa q escuche las llamadas
    socket.emit('userCoordinates',e.latlng)   
})

