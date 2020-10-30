// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml12');
textWrapper.forEach(addSpan);
function addSpan(item, index) {
  textWrapper[index].innerHTML = textWrapper[index].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

// Wrap every letter in a span
var numberWrapper = document.querySelector('.ml14');
numberWrapper.innerHTML = numberWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); 


$(document).ready(function() { 

    $('body').addClass('animate');

    anime.timeline({loop: false})
      .add({
        targets: '.animate .ml12 .letter',
        translateX: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 5000,
        delay: (el, i) => 500 + 30 * i
      })

    anime.timeline({loop: false})
      .add({
        targets: '.animate .txt01',
        translateY: [40,0],
        translateX: [20,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2200,
        delay: 1000
    })

    anime.timeline({loop: false})
      .add({
        targets: '.animate .ml14 .letter, .animate .phone .letter',
        translateX: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 500 + 60 * i
    })

    anime.timeline({loop: false})
      .add({
        targets: '.animate .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: 1800
    })

    anime.timeline({loop: false})
      .add({
        targets: '.animate .dots span',
        translateX: [150,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 5000,
        delay: (el, i) => 500 + 90 * i
    })

    anime.timeline({loop: false})
      .add({
        targets: '#mzwa',
        translateY: [40,0],
        translateX: [20,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2200,
        delay: 1000
    })

    anime.timeline({loop: false})
      .add({
        targets: '#mzwa',
        translateY: [60,0],
        translateX: [20,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2600,
        delay: 1000
    })

    anime.timeline({loop: false})
      .add({
        targets: '.circle-big',
        scale: [3,1],
        translateY: [200,0],
        translateX: [20,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuint",
        duration: 1200,
        delay: 450
    }).add({
        loop: true,
        backgrouundImage: 'linear-gradient(0deg, red 0%, #dad3c1 100%)'
    })

      anime.timeline({loop: false})
      .add({
        targets: '.circle-small',
        scale: [0,1],
        translateY: [200,0],
        translateX: [20,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuint",
        duration: 2200,
        delay: 1650
    })





    
     




});



