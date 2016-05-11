var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
	$scope.bars = [
	  {
	  	"name": "Galway",
	  	"adresse": "13 quai des Grands Augustins,Paris",
	  	"image":"img/galway.jpg",
	  	"api":"<div id="api-bdv" data-option='{"main":false, "luminosity":true, "pollution":false, "quietness":false, "proximity":false, "mapCursor":"null"}' data-ref='{"bdvkey":"jeremiebb73d4465608582ffc8dcd3cb76639f53", "address":"13 quai des Grands Augustins,Paris", "floor":"0"}' ></div>"
	  }
	  {
	  	"name": "Pub St Michel",
	  	"adresse": "19 Quai Saint-Michel,Paris",
	  	"image":"img/le-pub-saint-michel.jpg",
	  	"api":"<div id="api-bdv" data-option='{"main":false, "luminosity":true, "pollution":false, "quietness":false, "proximity":false, "mapCursor":"null"}' data-ref='{"bdvkey":"jeremiebb73d4465608582ffc8dcd3cb76639f53", "address":"19 Quai Saint-Michel,Paris", "floor":"0"}' ></div>"
	  },
	  {
	  	"name": "Le Bistrot de la Huchette",
	  	"adresse": "27 rue de la Huchette,Paris",
	  	"image":"img/bistrotdelahuchette1.jpg",
	  	"api":"<div id="api-bdv" data-option='{"main":false, "luminosity":true, "pollution":false, "quietness":false, "proximity":false, "mapCursor":"null"}' data-ref='{"bdvkey":"jeremiebb73d4465608582ffc8dcd3cb76639f53", "address":"27 rue de la Huchette,Paris", "floor":"0"}' ></div>"
	  },
	  {
	  	"name": "Ze Bar",
	  	"adresse": "20 rue de la Huchette,Paris",
	  	"image":"img/zeBar.jpg"
	  },
	  {
	  	"name": "Le Relais de la Huchette",
	  	"adresse": "16 rue de la Huchette,Paris",
	  	"image":"img/RelaisDeLaHuchette.jpg"
	  },
	  {
	  	"name": "Georges Café",
	  	"adresse": "4 rue de la Huchette,Paris",
	  	"image":"GeorgesCafés.jpg"
	  },
	  {
	  	"name": "Le petit pont",
	  	"adresse": "1 rue de la Huchette,Paris",
	  	"image":"cafe-le-petit-pont.jpg"
	  },
	  {
	  	"name": "Le Polly Maggoo",
	  	"adresse": "5 rue du petit pont,Paris",
	  	"image":"polly-magoo.jpg"
	  },
	  {
	  	"name": "Shywawa Pub",
	  	"adresse": "7 rue du petit pont,Paris",
	  	"image":"Shywawa.jpg"
	  },
	  {
	  	"name": "Gentleman",
	  	"adresse": "3 rue Hautefeuille,Paris",
	  	"image":"Gentleman.jpg"
	  }
	];


});

