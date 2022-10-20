const animation = document.querySelector('.animated-text');
const text = document.querySelector('.text');
const animationFooter = document.querySelector('.animated-footer-text');
const footerText = document.querySelector('.footer-text');
const cards = document.querySelectorAll('.card');
const innerCards = document.querySelectorAll('.inner-card');
const innerImage = document.querySelectorAll('.inner-image');
const btn = document.querySelector('.button');

const innerWords = ['<h3 class="inner-text-head">Birthdays</h3>', 
'<h3 class="inner-text-head">Weddings</h3>', 
'<h3 class="inner-text-head">child naming</h3>',
'<h3 class="inner-text-head">anniver<span class="span">saries</span></h3>',
'<h3 class="inner-text-head">parties</h3>',
'<h3 class="inner-text-head">funerals</h3>',
'<h3 class="inner-text-head">festivals</h3>',
'<h3 class="inner-text-head">carnivals</h3>',
'<h3 class="inner-text-head">concerts</h3>'];

const mouseoverWords = [' We are Ready to Lighten up Your Birthday and leave with you a moment to remember',
'We are Ready to Glamour your Beautiful Moment of Love and wish you the best of Love',
'We are Happy for the Beautiful Little Angel and are ready to make it more Wonderful',
'We cherish your Moments and are focused on Celebrating another Beautiful year of happiness with you',
'we know the Value of Happy Moments and are ever ready to give one to Remember for a Lifetime',
'Sadly you lost a Loved one, but they will forever be in your heart. Give them a Glorious Farewell through us',
'Traditions and Cultures are part of us. They are our History! Lets make a Wonderful one with Us',
'Joy is Inevitable when we are there to add unforgetable beat and melodies to your Carnivals',
'Music is what we do, it is what we are called for, lets give you a thirst of our savour through the music we give in your Concerts'];


const images = ['<img src="images/ceremony (24).jpg" alt="">',
'<img src="images/ceremony (16).jpg" alt="">',
' <img src="images/ceremony (22).jpg" alt="">',
'<img src="images/ceremony (15).jpg" alt="">',
'<img src="images/ceremony (11).jpg" alt="">',
'<img src="images/ceremony (19).jpg" alt="">',
'<img src="images/ceremony (10).jpg" alt="">',
' <img src="images/ceremony (7).jpg" alt="">',
'<img src="images/ceremony (13).jpg" alt="">'];


const cardColors = ['black', 'rgb(45,41,45)', 'teal',
'rgb(45,41,45)','teal','black',
'teal','black','rgb(45,41,45)',];

const innerCardColors = ['lightgray', 'khaki', '#D3E3E2', 
'khaki', '#D3E3E2', 'lightgray', 
'#D3E3E2', 'lightgray', 'khaki'];

window.addEventListener('load', () => {
	for(let i = 0; i < innerWords.length; i++){
		innerCards[i].innerHTML = innerWords[i];
		innerImage[i].innerHTML = images[i];
		cards[i].style.backgroundColor = cardColors[i];
		innerCards[i].style.backgroundColor = innerCardColors[i];
	} 
});

btn.addEventListener('click', (e) => {
	btn.classList.toggle('open');
});


for(let i = 0; i < cards.length; i++){
	innerImage[i].addEventListener('mouseover', (e) => {
		console.log(e);
		innerCards[i].innerHTML = images[i];
		innerImage[i].innerHTML = innerWords[i];

		innerCards[i].firstElementChild.classList.add('img');
		innerImage[i].firstElementChild.classList.add('inner-text-head2');
		innerImage[i].style.backgroundColor =  innerCardColors[i];
		innerImage[i].classList.add('inner-image2');
		const paragraph = document.createElement('p');
		paragraph.innerText	= mouseoverWords[i];
		paragraph.classList.add('inner-card-body');
		paragraph.style.fontFamily = "'varela Round', sans-serif";
		innerImage[i].append(paragraph);
	});
	
	cards[i].addEventListener('pointerout', () => {
		innerCards[i].innerHTML = innerWords[i];
		innerImage[i].innerHTML = images[i];

		innerCards[i].firstElementChild.classList.remove('img');
		innerImage[i].firstElementChild.classList.remove('inner-text-head2');
		innerImage[i].style.backgroundColor = '';
		innerImage[i].classList.remove('inner-image2');				
	});
}





	







// window.addEventListener('scroll', (e) => {
// 	if(pageYOffset > 960){
// 		let time2 = 0;

// 		function textSlider(){
// 		const stopAnimation = setInterval(() => {
// 			time2 += 1;
		
// 			if(time2 > 200){
// 				clearInterval(stopAnimation)
// 			};
		
// 			footerText.style.left = `${time}px`;
// 		}, 300);
// 		}

// 		textSlider()
// 	}
// })



let time = 100;
let counter = 0;

const clear = setInterval(() => {
	time += 20;
	counter++;

	if(time === 300 || counter === 14){
		clearInterval(clear)
	}

	text.style.transform = `translateX(-${time}px)`
}, 300);
