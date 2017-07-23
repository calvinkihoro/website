$('#main-slideshow').vegas({
    delay: 7000,
    timer: false,
    shuffle: false,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transitionDuration: 2000,
    slides: [
        { src: 'images/slideshow/pic02.jpg' },
        { src: 'images/slideshow/pic01.jpg' },
        { src: 'images/slideshow/pic09.jpeg' }
    ],
	  animation: 'kenburns' 
});
