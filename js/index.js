window.onscroll = function() {addClassName()};

function addClassName() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixed-class").classList.add('shadow-inset');
    } else {
        document.getElementById("fixed-class").classList.remove('shadow-inset');
    }
}

const video_display = document.querySelector('.mask-brand-video');
const video_button = document.getElementById('video-start');
const close_video = document.querySelector('.close-video');
const navbar = document.querySelector('nav');


video_button.onclick = function() {addVideoModal()};
close_video.onclick = function () {removeVideoModal()};
function addVideoModal() {
    video_display.style.display = 'block';
    navbar.style.zIndex = 1
}

function removeVideoModal() {
    video_display.style.display = 'none';
    navbar.style.zIndex = 500
}

(function ($){
    $.fn.counter = function() {
        const $this = $(this),
            numberFrom = parseInt($this.attr('data-from')),
            numberTo = parseInt($this.attr('data-to')),
            delta = numberTo - numberFrom,
            deltaPositive = delta > 0 ? 1 : 0,
            time = parseInt($this.attr('data-time')),
            changeTime = 10;

        let currentNumber = numberFrom,
            value = delta*changeTime/time;
        var interval1;
        const changeNumber = () => {
            currentNumber += value;
            (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
            this.text(parseInt(currentNumber));
            currentNumber == numberTo ? clearInterval(interval1) : currentNumber;
        };

        interval1 = setInterval(changeNumber,changeTime);
    }
}(jQuery));

$(document).ready(function(){

    $('.count-up').counter();
    $('.count1').counter();
    $('.count2').counter();
    $('.count3').counter();

    new WOW().init();

    setTimeout(function () {
        $('.count5').counter();
    }, 3000);
});

























