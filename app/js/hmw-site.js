'use strict';

/* jQuery Application Level */

(function($){ 
	jQuery.fn.mailto = function() {
		return this.each(function(){
			var email = $(this).html().replace(/\s*\(.{3}\)\s*/, ".");
			email = email.replace(/\s*\(.{2}\)\s*/, "@");
			email = email.replace(/\s*\(.{3}\)\s*/, ".");
			$(this).before('<a href="mailto:' + email + '" rel="nofollow" alt="Email ' + email + '" title="Email ' + email + '">' + email + '</a>').remove();
		});
	};
})(jQuery);

$('a').tooltip();
$('span').tooltip();

if ( $('a.email').length > 0 ) {
	$('a.email').mailto();
}

$('#phone').text(function(i, text) {
	text = text.replace(/(\d{3})\(dash\)(\d{3})\(dash\)(\d{4})/, "$1-$2-$3");
	return text;
});

/* Application Level */

// Declare app level module which depends on filters, and services
angular.module('hmwSite', [
	'ngResource',
	'filters',
	'services',
	'directives',
	'controllers'
]);

// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
