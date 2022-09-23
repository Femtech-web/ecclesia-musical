const btn = document.querySelector('.button');
let menuOpen = false;
btn.addEventListener('click', () => {
	if(!menuOpen){
		btn.classList.add('open');
		 menuOpen = true;
	}else{
		btn.classList.remove('open');
		 menuOpen = false;
	};
});