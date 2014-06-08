'use strict';

/* Controllers */

var hmwSite = hmwSite || {};

hmwSite.controllers = hmwSite.controllers || angular.module('controllers', []);

hmwSite.controllers.controller('TransitNavbarLinksCtrl', ['$scope', '$http',
	function ($scope, $http) {
		
		$http.get('json/transit-navbar-links.json').success(function (data) {
			
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
