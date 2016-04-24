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

	newMarker(-32.9543499, -60.6580895, "Rosario", "<p><h2>Rosario</h2></p>Calidad del Aire: <b>Optima</b><p></p><p><u>Parametros</u></p><p>PM10: 30</p><p>[O3]: 16</p><p>[SO2]: 12</p><p>[CO]: 0</p><p>Presion: 1026</p><p>Humedad: 100</p><p></p><p>Casos de <u>Tos</u> relevados: <b>10</b></p>", 1);
	newMarker(40.7247955, -74.0101607, "New York", "<p><h2>New York</h2></p>Calidad del Aire: <b>Optima</b><p></p><p><u>Parametros</u></p><p>PM10: </p><p>[O3]: 29</p><p>[NO2]: 15</p><p>[SO2]: 1</p><p>[CO]: 4</p><p>Presion: 990</p><p>Humedad: 97</p><p></p><p>Casos de <u>Tos</u> relevados: <b>5</b></p>", 1);
	newMarker(-33.8653142, 151.1944544, "Sidney", "<p><h2>Sidney</h2></p>Calidad del Aire: <b>Optima</b><p></p><p><u>Parametros</u></p><p>PM10: 21</p><p>[O3]: 30</p><p>[NO2]: 18</p><p>[SO2]: 16</p><p>[CO]: 5</p><p>Presion: 1030</p><p>Humedad: 100</p><p></p><p>Casos de <u>Tos</u> relevados: <b>8</b></p>", 1);
	newMarker(48.8586329, 2.3218811, "Paris", "<p><h2>Paris</h2></p>Calidad del Aire: <b>Parcial</b><p></p><p><u>Parametros</u></p><p>PM10: 61</p><p>[O3]: 32</p><p>[NO2]: 29</p><p>[SO2]: 2</p><p>[CO]: 0</p><p>Presion: 1025</p><p>Humedad: 93</p><p></p><p>Casos de <u>Tos</u> relevados: <b>24</b></p>", 2);
	newMarker(55.7532508, 37.561263, "Moscu", "<p><h2>Moscú</h2></p>Calidad del Aire: <b>Parcial</b><p></p><p><u>Parametros</u></p><p>PM10: 30</p><p>[O3]: </p><p>[NO2]: 42</p><p>[SO2]: 2</p><p>[CO]: 3</p><p>Presion: 1012</p><p>Humedad: 100</p><p></p><p>Casos de <u>Tos</u> relevados: <b>20</b></p>", 2);
	newMarker(52.5156735, 13.3430367, "Berlin", "<p><h2>Berlin</h2></p>Calidad del Aire: <b>Parcial</b><p></p><p><u>Parametros</u></p><p>PM10: 51</p><p>[O3]: 32</p><p>[NO2]: 64</p><p>[SO2]: </p><p>[CO]: </p><p>Presion: 1019</p><p>Humedad: 87</p><p></p><p>Casos de <u>Tos</u> relevados: <b>28</b></p>", 2);
	newMarker(-26.2024546, 28.0162336, "Johannesburgo", "<p><h2>Johannesburgo</h2></p>Calidad del Aire: <b>Parcial</b><p></p><p><u>Parametros</u></p><p>PM10: 82</p><p>[O3]: </p><p>[NO2]: </p><p>[SO2]: </p><p>[CO]: </p><p>Presion: 1032</p><p>Humedad: 89</p><p></p><p>Casos de <u>Tos</u> relevados: <b>33</b></p>", 2);
	newMarker(35.7117067, 139.6953929, "Tokio", "<p><h2>Tokio</h2></p>Calidad del Aire: <b>No Optima</b><p></p><p><u>Parametros</u></p><p>PM10: 45</p><p>[O3]: 50</p><p>[NO2]: 26</p><p>[SO2]: 7</p><p>[CO]: 3</p><p>Presion: 1022</p><p>Humedad: 92</p><p></p><p>Casos de <u>Tos</u> relevados: <b>31</b></p>", 3);
	newMarker(-23.6029336, -46.641568, "San Pablo", "<p><h2>San Pablo</h2></p>Calidad del Aire: <b>No Optima</b><p></p><p><u>Parametros</u></p><p>PM10: 116</p><p>[O3]: 54</p><p>[NO2]: 28</p><p>[SO2]: 8</p><p>[CO]: 21</p><p>Presion: 1029</p><p>Humedad: 100</p><p></p><p>Casos de <u>Tos</u> relevados: <b>40</b></p>", 3);

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

	//initCarousel();
	$('#md-youtube').unslider({
		autoplay: true,
		arrow: false
	});

	new Chartist.Line('.md-chart', {
		labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		series: [[ 0.47884, 0.49799, 0.5363, 0.68953, 0.55545, 0.47884, 0.43096, 0.38307, 0.3735, 0.06704, -0.3735, -0.07661, 0.60334, 1.01514, 1.28329, 1.39821, 1.06303, 0.64165, 0.38307, 0.05746, 0.1245, 0.34477, 0.63207, 0.6608, 0.62249, 0.51715, 0.69911, 0.71826, 0.67038, 0.05746, 0.10534, 0.5363, 1.15879, 0.97683, 0.62249, 0.33519, 0.17238, 0.10534, 0.19154, 0.3735, 0.82361, 0.82361, 0.71826, 0.52672, 0.49799, 0.58419, 0.63207, 0.64165, 0.56503, 0.55545, 0.48842, 0.43096, 0.33519, 0.33519, 0.34477, 0.36392, 0.40223, 0.4118, 0.43096, 0.45011, 0.47884, 0.48842]]
	},
	{
		fullWidth: true,
		chartPadding:{
			right: 10
		}
	});
});

function newMarker(latArg, longArg, title, contenido, tipo) {
	pos = {lat: latArg, lng: longArg};
	var markerImage = 'resources/images/markerMaps.png';
	if(tipo == 1){markerImage = 'resources/images/markerMapsVerde.png';}
	if(tipo == 2){markerImage = 'resources/images/markerMapsAmarillo.png';}
	if(tipo == 3){markerImage = 'resources/images/markerMapsRojo.png';}
	

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

/*
function initCarousel() {
	var options = {
	    $FillMode: 2,
	    $AutoPlay: true,
	    $Idle: 4000,
	    $PauseOnHover: 1,
	    $ArrowKeyNavigation: true,
	    $SlideEasing: $JssorEasing$.$EaseOutQuint,
	    $SlideDuration: 800,
	    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
	                    //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
	                    //$SlideHeight: 300,
	    $SlideSpacing: 0,
	    $Cols: 1,
	    $ParkingPosition: 0,
	    $UISearchMode: 1,
	    $PlayOrientation: 1,
	    $DragOrientation: 1,

	    $BulletNavigatorOptions: {
	    $Class: $JssorBulletNavigator$,
	    $ChanceToShow: 2,
	    $AutoCenter: 1,
	    $Steps: 1,
	    $Rows: 1,
	    $SpacingX: 8,
	    $SpacingY: 8,
	    $Orientation: 1,
	    $Scale: false
	    },

	    $ArrowNavigatorOptions: {
	        $Class: $JssorArrowNavigator$,
	        $ChanceToShow: 1,
	        $AutoCenter: 2,
	        $Steps: 1
	    }
	};

	var jssor_slider1 = new $JssorSlider$("slider1_container", options);
}*/