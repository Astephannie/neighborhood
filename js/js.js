$(".neighborhood").click(function(e){
 	e.preventDefault();
 	$(".initial-text").attr("style", "display:none"); 
 	$(".change-text").attr("style", "display:block");  
    $(".change-text").fadeIn();
});



var template = 	'<li class="col-md-6">' +
				'<h2>::name::</h2>' + 
				'<p>Ambassador: Vertigo</p>' + 
				'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="200px" viewBox="0 0 574.957 574.957" class="absolute">' +
				'<use xlink:href="#city"></use>' +
				'</svg>'
				'</li>';

$(document).ready(function() {
  var $placesContainer = $('#places');
  // New York (lat, long)
  var initialLocation = new google.maps.LatLng(40.7058316, -74.2581935);
  var request = {
    limit: 20,
    location: initialLocation,
    radius: '100000',
    types: ['embassy']
  };
  // API Places
  var service = new google.maps.places.PlacesService($placesContainer[0]);
  service.nearbySearch(request, callback);  
});

// Callback search places
function callback(results, status) {
  console.log(results);
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0, l = results.length; i < l; i++) {
      var $li = template.replace('::name::', results[i].name);
      $("#places").append($li); 
    }
  }
}
