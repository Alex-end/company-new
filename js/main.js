function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

let menuBurger = document.querySelector('.menu__burger');
menuBurger.addEventListener('click', function(){
	if(menuBurger){
		let menuBody = document.querySelector('.menu__body');
		let bodyBlock = document.querySelector('body');
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
		bodyBlock.classList.toggle('lock');
	}
})
