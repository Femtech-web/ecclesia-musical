/* --logic for smaller screen hamburger-- */
const btn = document.querySelector('.button');

btn.addEventListener('click', (e) => {
	btn.classList.toggle('open');
});



/* --logic for the image slides-- */
let activeIndex = 0;
const mySlide = () => {
    const showcaseActive = document.querySelectorAll('.showcase-container');
    const showcaseLength = document.querySelectorAll('.showcase-container').length;

    activeIndex++;
    if(activeIndex > showcaseLength){
        activeIndex = 1;
    }

    for( let i = 0; i < showcaseLength; i++){
        showcaseActive[i].style.display = 'none';
    };

    showcaseActive[activeIndex -1].style.display = 'block';

    setTimeout(mySlide, 5000);
}

mySlide();
