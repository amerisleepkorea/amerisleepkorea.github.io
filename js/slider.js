var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    var index = 0, time = 6000;
    slides[index].classList.add('active');
    setInterval(() => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0;
        slides[index].classList.add('active');
        
        if (index == 2) {
            var vid = document.getElementById("myVideo");
            vid.play();   
        }else{
            var vid = document.getElementById("myVideo");
            vid.pause();
        }
    }, time);
}