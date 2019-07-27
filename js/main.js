(function (){
	'use strict';

	function genRand(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	let backSide = document.querySelector('.coin__side--tails'),
		coin     = document.querySelector('.coin')
	
	coin.addEventListener('click', setZIndex);

	// setInterval(setZIndex, 1000);

	function setZIndex() {
		let result = genRand(0,1);
		backSide.style.zIndex = --result;
	}
})();