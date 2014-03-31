'use strict';

$('#blueimp-gallery').data('titleProperty', 'mytitle');
$('#blueimp-gallery').data('useBootstrapModal', false);
$('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

for (var i = 1; i <= 5; i++) {
	document.getElementById('links' + i).on('click', function (event) {
		event.preventDefault();
		blueimp.Gallery($('#links' + i + ' a'), $('#blueimp-gallery').data());
	});
};