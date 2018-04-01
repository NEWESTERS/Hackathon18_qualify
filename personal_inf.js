function portfolioOnload( link ) {
			var element = document.getElementsByClassName(link)[0];
		
			
			this.show_block = function () {
				var h = window.innerHeight;
				element.setAttribute('shown','yes');
				element.style.height = h + 'px';
				$('html,body').animate({scrollTop:h},700);
			}

			this.show_components = function( property , value ){
				element.setAttribute( property , value );
			}
			
};

window.onload = function (){
	blockk = new portfolioOnload("portfolio");
	but = document.getElementById('clickme');
	but.onclick = function(){
		blockk.show_block();
	};
};		