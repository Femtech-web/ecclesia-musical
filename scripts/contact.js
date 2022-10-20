const btn = document.querySelector('.button');

btn.addEventListener('click', (e) => {
	btn.classList.toggle('open');
});



let index = 0;

const imageSlider = () => {
    const images = document.querySelectorAll('.image');
    const active = document.querySelector('.active');

    index++
    if(index > images.length){
        index = 1;
    }

    for(let i = 0; i < images.length; i++){
       images[i].style.display = 'none';
    }

    images[index -1].style.display = 'block'

    setTimeout(imageSlider, 5000);
}
imageSlider();