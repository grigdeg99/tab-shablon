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
	let deadline = "2021-03-20";

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




});