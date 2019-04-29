function initMap() {
    // The location of Midtown, USA
    var midtown = {lat: 40.754932, lng: -73.984016};
    // The map, centered at Midtown
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: midtown});
    // The marker, positioned at Midtown
    var marker = new google.maps.Marker({position: midtown, map: map});
}
