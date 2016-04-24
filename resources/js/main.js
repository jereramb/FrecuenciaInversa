var map;
var _isSelectEdad = false;
var _isSelectCiudad = false;
var _indexEdad = -1;
var _indexCiudad = -1;

$(document).ready(function(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 0, lng: 0},
		zoom: 2
	});

	newMarker(-32.9543499, -60.6580895, "Rosario", "i");
	newMarker(-23.6029336, -46.641568, "San Pablo", "i");
	newMarker(48.8586329, 2.3218811, "Paris", "i");
	newMarker(35.7117067, 139.6953929, "Tokio", "i");
	newMarker(55.7532508, 37.561263, "Moscu", "i");
	newMarker(40.7247955, -74.0101607, "New York", "i");
	newMarker(-33.8653142, 151.1944544, "Sidney", "i");
	newMarker(52.5156735, 13.3430367, "Berlin", "i");
	newMarker(-26.2024546, 28.0162336, "Johannesburgo", "i");

	$("#edadDropdown>li").on('click', function(event) {
		event.preventDefault();
		var num = $(this).index();
		$("#dropdownMenu1").html($("#edadDropdown>li>a").eq(num).text() + '<span class="caret"></span>');
		_isSelectEdad = true;
		_indexEdad = num;
	});

	$("#ciudadDropdown>li").on('click', function(event) {
		event.preventDefault();
		var num = $(this).index();
		$("#dropdownMenu2").html($("#ciudadDropdown>li>a").eq(num).text() + '<span class="caret"></span>');
		_isSelectCiudad = true;
		_indexCiudad = num;
	});

	$("#SendInfo").on('click', submitInfo);
});

function newMarker(latArg, longArg, title, contenido) {
	pos = {lat: latArg, lng: longArg};
	var markerImage = 'resources/images/markerMaps.png';

	var infowindow = new google.maps.InfoWindow({
		content: contenido
	});

	var marker = new google.maps.Marker({
		icon: markerImage,
		position: pos,
		map: map,
		title: title
	});

	marker.addListener('click', function(){
		infowindow.open(map,marker);
	});
}

function submitInfo(e) {
	if(_isSelectEdad && _isSelectCiudad){
		var preg1 = $("input[name='optionsRadios1']:checked").parent().parent().index() - 1;
		var preg2 = $("input[name='optionsRadios2']:checked").parent().parent().index() - 1;
		var preg3 = $("input[name='optionsRadios3']:checked").parent().parent().index() - 1;
		var preg4 = $("input[name='optionsRadios4']:checked").parent().parent().index() - 1;
		var preg5 = $("input[name='optionsRadios5']:checked").parent().parent().index() - 1;
		var preg6 = $("input[name='optionsRadios6']:checked").parent().parent().index() - 1;
		var preg7 = $("input[name='optionsRadios7']:checked").parent().parent().index() - 1;
	}
	else{
		alert("Faltan datos por seleccionar");
	}
}