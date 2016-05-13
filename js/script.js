var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
	$scope.bars = [
	  {
	  	"name": "Galway",
	  	"adresse": "13 quai des Grands Augustins,Paris",
	  	"image":"img/galway.jpg"
	  },
	  {
	  	"name": "Pub St Michel",
	  	"adresse": "19 Quai Saint-Michel,Paris",
	  	"image":"img/le-pub-saint-michel.jpg"
	  },
	  {
	  	"name": "Le Bistrot de la Huchette",
	  	"adresse": "27 rue de la Huchette,Paris",
	  	"image":"img/bistrotdelahuchette1.jpg"
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
	  	"image":"img/GeorgesCafé.jpg"
	  },
	  {
	  	"name": "Le petit pont",
	  	"adresse": "1 rue de la Huchette,Paris",
	  	"image":"img/cafe-le-petit-pont.jpg"
	  },
	  {
	  	"name": "Le Polly Maggoo",
	  	"adresse": "5 rue du petit pont,Paris",
	  	"image":"img/polly-magoo.jpg"
	  },
	  {
	  	"name": "Shywawa Pub",
	  	"adresse": "7 rue du petit pont,Paris",
	  	"image":"img/Shywawa.jpg"
	  },
	  {
	  	"name": "Gentleman",
	  	"adresse": "3 rue Hautefeuille,Paris",
	  	"image":"img/Gentleman.jpg"
	  }
	];


});

