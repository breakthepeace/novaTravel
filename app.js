// Google Maps

function initMap() {
  const options = {
    zoom: 19,
    center: { lat: 51.768696, lng: 19.455705 }
  }

  const map = new google.maps.Map(document.getElementById('map'), options);
  const marker = new google.maps.Marker({ position: options.center, map: map });
};

// Materialize Scripts

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

//Modals
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// Carousel
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems);
});