function portfolioOnload( link ) {
	var element = document.getElementsByClassName(link)[0];

	
	this.show_block = function () {
		var h = window.innerHeight;
		element.setAttribute('shown','yes');
		element.style.height = h + 'px';
		// $('html,body').animate({scrollTop:h},700);
		$(document.body).animate({
    		'scrollTop':   $('#portfolio').offset().top
		}, 2000);
	}

	this.show_components = function( property , value ){
		element.setAttribute( property , value );
	}
			
};

window.onload = function (){
	blockk = new portfolioOnload("portfolio");
	dog = document.getElementById('clickme');
	dog.onclick = function(){
		blockk.show_block();
	};
};	




