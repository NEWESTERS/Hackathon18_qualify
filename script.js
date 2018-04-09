// Обработка бага с vh на мобильных устройствах
function resize() {
	$('#main').css('height', window.innerHeight)
}

// При изменении ориентации размер блока пересчитывается
window.addEventListener("orientationchange", () => {
	resize()
}, false)

window.onload = () => {
	resize()

	// Предзагрузка фотографий
	for (var i = 0; i < data.length; i++) {
		new Image().src = data[i].photo
	}

	// Объект, осуществляющий перелистывание страниц
	var pager = new function() {
		// Private
		var number = 0

		// Функция, обновляющая данные об участнике
		function update(number) {
			$('#avatar').attr('src', data[number].photo)
			$('#bio').text(data[number].bio)
			$('#name').html('<h2>' + data[number].name + '</h2>')
			$('#skills').empty()
			for (var i = 0; i < data[number].skills.length; i++) {
				$('#skills').append('<div class="skill">' + data[number].skills[i] + '</div>')
			}
		}

		update(number)

		// Public
		// Следующий участник
		this.next = () => {
			number = number == 4 ? 0 : number+=1
			$('#info').animate({
				'margin-left': '+=100px',
				'margin-right': '-=100px',
				opacity: 0
			}, 300, () => {
				update(number)
				$('#info').css('margin-left', '0')
				$('#info').css('margin-right', '0')
			})

			$('#info').animate({
				opacity: 1
			}, 300)
		}

		// Предыдущий участник
		this.back = () => {
			number = number == 0 ? 4 : number-=1
			$('#info').animate({
				'margin-right': '+=100px',
				'margin-left': '-=100px',
				opacity: 0
			}, 300, () => {
				update(number)
				$('#info').css('margin-right', '0')
				$('#info').css('margin-left', '0')
			})

			$('#info').animate({
				opacity: 1
			}, 300)
		}
	}

	// Инициализация библиотеки для появления блоков при скроллинге
	AOS.init()

	// Клик на собаку скроллит страницу на блок с участниками
	$(document).on('click', '#clickme', () => {
		$(document.body).animate({
    		'scrollTop': $('#team').offset().top
		}, 800)
	})

	// Клик на стрелку влево
	$(document).on('click', '#left-arrow', () => {		
		pager.back()		
	})

	// Клик на стрелку вправо
	$(document).on('click', '#right-arrow', () => {
		pager.next()
	})
	
}




