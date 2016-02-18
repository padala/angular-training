<!doctype html>
<html lang="en" ng-app="weatherApp">
<head>
 	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
	<script src="ngAutocomplete.js"></script>
 	<script src="ISOCountries.js"></script>
 	<link rel="stylesheet" type="text/css" href="weather_app.css">
 	
 	
  <script src="app.js"></script>
  <script src="controller.js"></script>
  
  <script src="services.js"></script>
   
 
  <script src="directives.js"></script>
  
</head>
<body>

  <div ng-view></div>

</body>
</html>