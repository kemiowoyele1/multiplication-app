var currentSlide = 1;
var container = document.querySelector('.container');
var overlay = document.querySelector('.overlay');
var alien = document.querySelector('.alien');
var nums = document.querySelectorAll('.nums');
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');
var answer = document.querySelector('.answer');
var times = document.querySelector('.times');
var equals = document.querySelector('.equals');
var nextBtn = document.querySelector('.next');

// document.addEventListener('deviceready', function () {

function loadSlide (currentSlide){
    var q = tables[currentSlide];
    num1.textContent=  q.number1 ;
	num2.textContent =  q.number2 ;   
    answer.textContent =  q.answer ; 
    alien.style.animation = ' alien 5.5s linear both';
	num1.style.animation = 'nums 1s 1';
    num2.style.animation = 'nums 1s 1 2s';
    answer.style.animation = 'nums 1s 1 4s';
    times.style.animation = 'nums 1s 1 1s';
    equals.style.animation = 'nums 1s 1 3s';
    nextBtn.style.animation ="next 1s ease 6s 1 normal both";
    overlay.style.display="block";
    sound.play();
    setTimeout(function(){
        overlay.style.display = 'none';
        alien.style.animation= "none";
        num1.style.animation = 'none';
        num2.style.animation = 'none';
        answer.style.animation = 'none';
        times.style.animation = 'none';
        equals.style.animation = 'none';
     },5700);
   var sound1 =setInterval(function() {
       sound.play();
       setTimeout(function(){
           clearInterval(sound1)
       },3000)
   },1000);
   document.addEventListener('deviceready', function () {

    TTS.speak({
        text: q.speech,
        locale: 'en-GB',
        rate: 0.75
    });
});
     allSpeech();
   
}
loadSlide(currentSlide);

//increment slide on clicking the next button
function loadNextSlide () {
    if(currentSlide === tables.length-1){
        currentSlide = 0;
    }
    currentSlide++;
   
    nextBtn.style.animation = 'none'
   

loadSlide(currentSlide);
}
//Slide event listener
container.addEventListener('touchstart', function(evt){
    startingX = evt.touches[0].clientX;
     });
 container.addEventListener('touchmove', function(evt){
   var touch = evt.touches[0];
      var change = startingX - touch.clientX;
       });
 container.addEventListener('touchend', function(evt){
 var change = startingX - evt.changedTouches[0].clientX;
      var threshold = screen.width / 4;
     //  if (change < threshold){
      
          if (change > 0 && change > threshold){
        loadNextSlide();   
      }
    
    });



    num2.addEventListener('click', function(){
        // num2.classList.add("nums-add");
        // num2.style.animationDelay = "0s";
        // setTimeout(function(){
        //          num2.classList.remove("nums-add");
        // },1300);
        TTS.speak({
            text: q.number2,
            locale: 'en-US',
            rate: 0.009
        } );
    })
    

    num1.addEventListener('click', function(){
        num1.classList.add("nums-add");
    //     num1.style.animationDelay = "0s";
    //     setTimeout(function(){
    //         num1.classList.remove("nums-add");
    // },1300);
         TTS.speak({
            text: q.number1,
            locale: 'en-US',
            rate: 0.009
        } );
       
    })

    
times.addEventListener('click', function(){
//     times.classList.add("nums-add");
//     times.style.animationDelay = "0s";
//     setTimeout(function(){
//         times.classList.remove("nums-add");
// },1300);
     TTS.speak({
        text: "multiply",
        locale: 'en-US',
        rate: 0.009
    } );
   
})

equals.addEventListener('click', function(){
//     equals.classList.add("nums-add");
//     equals.style.animationDelay = "0s";
//     setTimeout(function(){
//         equals.classList.remove("nums-add");
// },1300);
     TTS.speak({
        text: "is equal",
        locale: 'en-US',
        rate: 0.009
    } );
   
})


answer.addEventListener('click', function(){
//     answer.classList.add("nums-add");
//     answer.style.animationDelay = "0s";
//     setTimeout(function(){
//         answer.classList.remove("nums-add");
// },1300);
     TTS.speak({
        text: q.answer,
        locale: 'en-US',
        rate: 0.009
    } );
   
})
alien.addEventListener('click',function(){
    loadSlide(currentSlide);
})
// }, false);
