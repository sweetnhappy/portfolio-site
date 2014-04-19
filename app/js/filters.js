'use strict';

/* Filters */

var hmwSite = hmwSite || {};

hmwSite.filters = angular.module('filters', []);

hmwSite.filters.filter('renderContactInfo', function () {
	return function (input) {
		var output = input || "";
		var decoys = ["dott", "dashh", "att", "nospam"];
		var replacements = [".", "-", "@", ""];
		var index = -1;
		
		for (var i = 0; i < decoys.length; i++) {
			index = output.indexOf(decoys[i]);
			
			while (index > -1) {
				output = output.replace(decoys[i], replacements[i]);
				
				index = output.indexOf(decoys[i]);
			}
		}
		
		return output;
	};
});

// angular.module('myApp.filters', []).
//   filter('interpolate', ['version', function(version) {
//     return function(text) {
//       return String(text).replace(/\%VERSION\%/mg, version);
//     };
//   }]);
