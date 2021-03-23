window.addEventListener("DOMContentLoaded", function () {
	"use strict";

	//tabs
	function tabShablon(a, b, c) {
		let tabsParent = document.querySelector("." + a),
			tabs = document.querySelectorAll("." + b),
			tabContent = document.querySelectorAll("." + c);


		function hideTabContent(a) {

			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove("show");
				tabContent[i].classList.add("hide");
			}

		}
		hideTabContent(1);

		function showTabContent(b) {
			if (tabContent[b].classList.contains("hide")) {
				tabContent[b].classList.remove("hide");
				tabContent[b].classList.add("show");
			}
		}

		tabsParent.addEventListener("click", function (event) {
			if (event.target && event.target.classList.contains(b)) {
				for (let i = 0; i < tabs.length; i++) {
					if (event.target == tabs[i]) {
						hideTabContent(0);
						showTabContent(i);
						break;
					}
				}
			}
		});
	}

	tabShablon("info-header", "info-header-tab", "info-tabcontent");




	//timer 
	let deadline = "2021-03-23";

	function setTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60));



		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}


	function setTimeValue(clas, endtime) {
		let timer = document.querySelector('.' + clas),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timerInterval = setInterval(updateTimer, 1000);

		function updateTimer() {
			let t = setTimeRemaining(endtime);

			function addZero(num) {
				if (num <= 9) {
					return '0' + num;
				} else return num;
			};

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timerInterval);
				hours.textContent = "00",
					minutes.textContent = "00",
					seconds.textContent = "00";
			}
		}



	}

	setTimeValue('timer-numbers', deadline);


	//pop up

	let more = document.querySelector(".more"),
		popUpContent = document.querySelector(".overlay"),
		exitPoup = document.querySelector(".popup-close"),
		tabbtn = document.querySelector(".description-btn");

	more.addEventListener("click", function () {
		popUpContent.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";

	});

	tabbtn.addEventListener("click", function () {
		popUpContent.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";

	});

	exitPoup.addEventListener("click", function () {
		popUpContent.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
		tabbtn.classList.remove("more-splash");
	});

	// Form

	// let message = {
	// 	loading: 'Загрузка',
	// 	success: 'Спасибо! Скоро мы  с Вами свяжемся',
	// 	failure: 'Что-то пошло не так '
	// };

	// let form = document.querySelector('.main-form'),
	// 	input = form.getElementsByTagName('input'),
	// 	statusMessage = document.createElement('div');

	// statusMessage.classList.add('status');

	// form.addEventListener('submit', function (event) {
	// 	event.preventDefault();
	// 	form.appendChild(statusMessage);
	// 	let formData = new FormData(form);

	// 	let request = new XMLHttpRequest();

	// 	let obj = {};
	// 	formData.forEach(function (value, key) {
	// 		obj[key] = value;
	// 	});

	// 	let json = JSON.stringify(obj);


	// 	request.open('POST', 'server.php');
	// 	request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	// 	request.send(json);
	// 	request.addEventListener('readystatechange', function () {
	// 		if (request.readyState < 4) {
	// 			statusMessage.innerHTML = message.loading;
	// 		} else if (request.readyState === 4 && request.status == 200) {
	// 			statusMessage.innerHTML = message.success;
	// 		} else {
	// 			statusMessage.innerHTML = message.failure;
	// 		}

	// 	});

	// 	for (let i = 0; i < input.length; i++) {
	// 		input[i].value = '';
	// 	}

	// })


	// Form Pop up

	let messages = {
		loading: 'Ожидайте, идет загрузка',
		success: 'Прекрасно, спасибо за вам',
		fail: 'Произошла ошибка'
	};


	let popForm = document.querySelector(".popup-form"),
		form = popForm.querySelector('.main-form'),
		input = document.querySelector('.popup-form__input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');





	function sendData(formed) {
		formed.addEventListener('submit', function (event) {
			event.preventDefault();
			formed.appendChild(statusMessage);
			let formData = new FormData(formed);

			function postData(type, url) {
				return new Promise((resolve, reject) => {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', url);
					request.send(type);
					request.addEventListener('readystatechange', function () {
						if (request.readyState < 4) {
							resolve();

						} else if (request.readyState === 4 && request.status == 200) {
							resolve();
						} else {
							reject();
						}

					});
				})




			}

			function clearInput() {
				input.value = '';
			}

			postData(formData, 'application/json; charset=utf-8')
				.then(() => statusMessage.innerHTML = messages.loading)
				.then(() => statusMessage.innerHTML = messages.success)
				.catch(() => statusMessage.innerHTML = messages.fail)
				.then(clearInput)

		});
	}

	sendData(form);














});

let drink = 1;

function shoot(arrow) {
	console.log('Вы сделали выстрел...');
	let promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");

		}, 3000);
	});
	return promise;

}

function win() {
	console.log('Вы победили');
	(drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
	console.log('Вам купили пива');
}

function giveMoney() {
	console.log('Вам заплатитли');
}

function loose() {
	console.log('Вы проииграли');
}

shoot({})
	.then(mark => console.log('Вы попали в цель'))
	.then(win)
	.catch(loose)