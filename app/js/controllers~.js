'use strict';

/* Controllers */

var hmwSite = hmwSite || {};

hmwSite.controllers = angular.module('controllers', []);

hmwSite.controllers.controller('NavbarLinksCtrl', ['$scope', '$http',
	function ($scope, $http) {
		
		//$scope.navbarLinks = JsonResource.get({ jsonFile: "navbar-links" });
		$http.get('json/navbar-links.json').success(function (data) {
			
			$scope.navbarLinks = data;
			
		});
		
		$scope.isLinkActive = function (linkId) {
			
			return $scope.currentPage === linkId;
			
		}
		
	}]);

// angular.module('myApp.controllers', [])
//   .controller('MyCtrl1', [function() {
// 
//   }])
//   .controller('MyCtrl2', [function() {
// 
//   }]);
