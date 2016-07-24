angular.module('app.controllers', ['app.services'])
  
.controller('page2Ctrl', function($scope, storeService,$timeout) {
	$scope.stores = storeService.getStores();
	console.log($scope.stores);

})
   
.controller('cartTabDefaultPageCtrl', function($scope) {

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
      
.controller('tab4DefaultPageCtrl', function($scope) {

})
 
