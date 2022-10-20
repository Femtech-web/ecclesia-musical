const btn = document.querySelector('.button');
const page = document.querySelector('#landing-page');
const loadIcon = document.querySelector('.load-icon');


window.addEventListener('load', () => {
	setTimeout(() => {
		loadIcon.style.display = 'none'
		page.style.visibility = 'visible'
	}, 3000)
})

btn.addEventListener('click', (e) => {
	btn.classList.toggle('open');
});

