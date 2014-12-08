(function() {

	window.onload = function() {
		var IMG_DIR = 'images/intro/',
			images = [
				'pipeline.png',
				'centers.png'
			],
			INTERVAL = 10000,
			i = 0;
		setInterval(function() {
			$('#introduction img').fadeOut(function() {
				$(this).attr('src', IMG_DIR + images[i]).fadeIn();
			});
			i++;
			if (i % images.length == 0) {
				i = 0;
			}
 		}, INTERVAL);
	}
})();