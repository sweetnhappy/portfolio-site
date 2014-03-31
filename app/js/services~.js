'use strict';

/* Services */

var hmwSite = hmwSite || {};

hmwSite.services = angular.module('services', ['ngResource']);

hmwSite.services.factory('JsonResource', ['$resource',
	function ($resource) {
		return $resource('json/:jsonFile.json', {}, {
			query: {
				method: 'GET',
				params: null,
				isArray: true
			}
		});
	}]);

// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');
