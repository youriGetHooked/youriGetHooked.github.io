mapboxgl.accessToken = 'pk.eyJ1IjoieW91cmlnIiwiYSI6ImNsaGhic3FrajJlMzMzbG51d2FqazE2MzkifQ.J5rYtFNXG8Hz9jxgKe5gSw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9,
    projection: 'globe'
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([12.554729, 55.70651])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([12.65147, 55.608166])
.addTo(map);


const el = document.createElement('div');
const width = 20;
const height = 20;

el.className = 'marker';
el.style.backgroundColor = 'red';
el.style.width = `${width}px`;
el.style.height = `${height}px`;
el.style.backgroundSize = '100%';
el.style.borderRadius = '100%';
    
el.addEventListener('click', () => {
    window.alert('hoi');
});
    
// Add markers to the map.
new mapboxgl.Marker(el)
.setLngLat([-63.292236, -18.281518])
.addTo(map);
