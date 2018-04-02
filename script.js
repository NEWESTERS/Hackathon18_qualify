window.onload = function() {
	var pager = new function() {
		var number = 0;

		function update(number) {
			$('#bio').text(data[number].bio);
			$('#name').html('<h2>' + data[number].name + '</h2>');
		}

		this.next = function() {
			number = number == 4 ? 0 : number+=1;
			update(number);
		}

		this.back = function() {
			number = number == 0 ? 4 : number-=1;
			update(number);
		}

		update(number);
	}

	AOS.init();

	$(document).on('click', '#clickme', function() {
		$(document.body).animate({
    		'scrollTop':   $('#team').offset().top
		}, 800);
	});

	$(document).on('click', '#left-arrow', function() {
		$('#info').animate({
			opacity: 0
		}, 250, function(){
			pager.back();
		});
		$('#info').animate({
			opacity: 1
		}, 250);
	});

	$(document).on('click', '#right-arrow', function() {
		$('#info').animate({
			opacity: 0
		}, 250, function() {
			pager.next();
		});
		$('#info').animate({
			opacity: 1
		}, 250);
	})
	
};	




