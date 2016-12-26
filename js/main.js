;(function() {
	"use strict";

	window.onload = function() {
		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;

		var calculate = document.querySelector('#calculate');
		var mapDiv = document.querySelector('.ba-map');

		var map = new google.maps.Map(mapDiv, {
			zoom: 14,
			center: {lat: 49.592552, lng: 34.547128}
		});

		directionsDisplay.setMap(map);

		calculate.addEventListener('click', function() {
			calculateAndDisplayRoute(directionsService, directionsDisplay);
		});

		function calculateAndDisplayRoute(directionsService, directionsDisplay) {
			directionsService.route({
				origin: document.getElementById('start').value,
				destination: document.getElementById('end').value,
				travelMode: google.maps.TravelMode.DRIVING
			}, function(response, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);
				} else {
					window.alert('Відкриваємо свої оченята і ДИВИМОСЯ ЩО ВВОДИМО. ');

				}
			});
		}

	};
})();
