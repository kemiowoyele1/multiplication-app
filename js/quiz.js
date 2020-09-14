var currentQuestion = 0;
var score = 0;
var myScore = document.querySelector('.myscore');
var timer = document.querySelector('.timer');
var question = document.querySelector('.question');
var opt1 = document.querySelector('.opt1');
var opt2 = document.querySelector('.opt2');
var opt3 = document.querySelector('.opt3');
var clock = document.querySelector('.clock-meter');
var replay1 = document.querySelector('.play-again');
var nextButton = document.querySelector('.next');
var correctAns = document.querySelector('.correct-ans');
var marking1 = document.querySelector('.marking1');
var marking2 = document.querySelector('.marking2');
var marking3 = document.querySelector('.marking3');
var half1 = document.querySelector('.half1');
var half2 = document.querySelector('.half2');
var lightRay = document.querySelector('.light-ray');
var rocket = document.querySelector('.rocket');
var clockHand = document.querySelector('.clock-hand');
var replay = document.querySelector('.replay');
var half1 = document.querySelector('.half1');
var half2 = document.querySelector('.half2');
var sound = document.querySelector('#sound');
var timeSound = document.querySelector('#time-sound');
var timeKeep;

function loadquestion (currentQuestion) {
    var q = tables[currentQuestion];
    question.textContent = q.question + " = ?";
	opt1.textContent     = q.option1;
    opt2.textContent     = q.option2;
    opt3.textContent     = q.option3;
    myScore.textContent = score +"/"+currentQuestion;
    clockHand.style.animation = 'clock-hand 20s linear';
    timeSound.play();
   timeKeeper();
   tickClock();
   let voice = new p5.Speech();
    voice.speak(q.question);

}


var timeKeeper = function (){
    timeKeep = setTimeout(function (){
      wrong();    
},20000)
}
var tickClock = function (){
    tick = setTimeout(function (){
        sound.src = "../audio/time.mp3";
        sound.play();
        
},15000)
}
function correct(){
     var q = tables[currentQuestion];
     score++;
lightRay.style.display = 'block';
correctAns.textContent = q.correct;
nextButton.style.display = 'block';
lightRay.style.height = '100%';
lightRay.style.animation = 'light-widen 1s infinite';
lightRay.style.backgroundColor = "rgb(9,231,217)";
lightRay.style.backgroundImage = "linear-gradient(90deg, rgba(9,231,217,0.5) 60%, rgba(250,250,250,0.4) 77%, rgba(36,243,230,0.2) 100%)";
myScore.textContent = score +"/"+ currentQuestion;
marking1.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
marking2.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
marking3.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
marking1.style.display = "block";
marking2.style.display = "block";
marking3.style.display = "block";
marking1.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
marking2.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
marking3.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
half1.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,0.4) 13%, rgba(80,255,80,0.4) 32%, rgba(9,255,9,0.4) 100%)";
half2.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,0.4) 13%, rgba(80,255,80,0.4) 32%, rgba(9,255,9,0.4) 100%)";
clockHand.style.animation = 'none';
sound.src = "../audio/correct.mp3";
sound.play();
timeSound.pause();

clearTimeout(tick);
clearTimeout(timeKeep);
let voice = new p5.Speech();
   
voice.speak(q.speech);
 
}
function wrong(){
var q = tables[currentQuestion];
lightRay.style.display = 'block';
nextButton.style.display = 'block';
lightRay.style.height = '20%';
lightRay.style.animation = 'none';
lightRay.style.background = "rgb(231, 42, 9)";
correctAns.textContent = q.correct;
marking1.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
marking2.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
marking3.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
marking1.style.display = "block";
marking2.style.display = "block";
marking3.style.display = "block";
marking1.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
marking2.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
marking3.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
half1.style.backgroundImage = "radial-gradient(circle, rgba(247,70,80,0.6) 13%, rgba(234,34,7,0.6) 32%, rgba(222,9,22,0.6) 100%)";
half2.style.backgroundImage = "radial-gradient(circle, rgba(247,70,80,0.6) 13%, rgba(234,34,7,0.6) 32%, rgba(222,9,22,0.6) 100%)";
clockHand.style.animation = 'none';
sound.src = "../audio/wrong.mp3";
sound.play();
timeSound.pause();

clearTimeout(tick);
let voice = new p5.Speech();
voice.speak('incorrect');

}
loadquestion(currentQuestion);
function loadNextQuestion(){
    currentQuestion++;
    rocket.style.display = 'block';
    lightRay.style.display = 'none';
    correctAns.textContent = "";
    marking1.style.display = "none";
    marking2.style.display = "none";
    marking3.style.display = "none";
    half1.style.background = 'rgba(0, 225, 255, 0.5)';
    half2.style.background = 'rgba(0, 225, 255, 0.5)';
    nextButton.style.display = 'none';
    clearTimeout(timeKeep);
    clearTimeout(tick);
    sound.pause();
  
    if (currentQuestion === tables.length) {
        gameover();
              }


    
loadquestion(currentQuestion);
}

 function gameover(){
    question.textContent = "";
    opt1.textContent     = "";
    opt2.textContent     = "";
    opt3.textContent     = "";    
    rocket.style.opacity='0';
    timer.style.padding = "40px";
    timer.style.left = "25%";
     timer.style.top = "30%";
    timer.textContent = "score: "+score +"/"+tables.length;
    nextButton.style.display = 'none';
    setTimeout(function(){
        timer.style.padding = "5px";
        timer.style.left = "70%";
         timer.style.top = "7%";
         timer.textContent = score +"/"+tables.length;
        rocket.style.opacity ="1";
      },2000)
   setTimeout(function(){
    lightRay.style.display = "block";
    lightRay.style.height = "150%";
  timer.style.display = "none";
   clock.style.display = "none";
    if(score >= 6){
        passDisplay();
          }else{
            failDisplay();
    }
   },2500)
   setTimeout(function(){
       replay1.style.display = "block";
       replay1.style.animation = 'replay 1s infinite';
   },8000);
}
function passDisplay(){
    rocket.style.animation = 'rocket-move 5s linear both';
    lightRay.style.animation = 'light-widen 1s infinite';
    lightRay.style.backgroundColor = "rgb(9,231,217)";
    lightRay.style.backgroundImage = "linear-gradient(90deg, rgba(9,231,217,0.5) 60%, rgba(250,250,250,0.4) 77%, rgba(36,243,230,0.2) 100%)";
     marking1.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
    marking2.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
    marking3.style.boxShadow = " 0 0 5px #17f403,0 0 25px rgb(11, 244, 3)";
    marking1.style.display = "block";
    marking2.style.display = "block";
    marking3.style.display = "block";
    marking1.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
    marking2.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
    marking3.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,1) 13%, rgba(80,255,80) 32%, rgba(9,255,9,1) 100%)";
    half1.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,0.4) 13%, rgba(80,255,80,0.4) 32%, rgba(9,255,9,0.4) 100%)";
    half2.style.backgroundImage = "radial-gradient(circle, rgba(147,255,180,0.4) 13%, rgba(80,255,80,0.4) 32%, rgba(9,255,9,0.4) 100%)";
    sound.src = "../audio/pass.mp3";
    sound.play();
    let voice = new p5.Speech();
    voice.speak(`game over your total score is ${score} out of ${tables.length} you have done well, keep it up`);

}

function failDisplay(){
    rocket.style.animation = 'rocket-fail-move 7s linear both';
    lightRay.style.background = "rgb(231, 42, 9)";
     marking1.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
    marking2.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
    marking3.style.boxShadow = " 0 0 5px #fe1745,0 0 25px rgb(244,17, 3)";
    marking1.style.display = "block";
    marking2.style.display = "block";
    marking3.style.display = "block";
    marking1.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
    marking2.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
    marking3.style.backgroundImage = "radial-gradient(circle, rgba(247,170,180,1) 13%, rgba(241,36,7,1) 32%, rgba(222,9,22,1) 100%)";
    half1.style.backgroundImage = "radial-gradient(circle, rgba(247,70,80,0.6) 13%, rgba(234,34,7,0.6) 32%, rgba(222,9,22,0.6) 100%)";
    half2.style.backgroundImage = "radial-gradient(circle, rgba(247,70,80,0.6) 13%, rgba(234,34,7,0.6) 32%, rgba(222,9,22,0.6) 100%)";
    sound.src = "../audio/fail.mp3";
    sound.play();
    let voice = new p5.Speech();
voice.speak(`game over your total score is ${score} out of ${tables.length} endeavour to do better next time`);

}

opt1.addEventListener("click", function(){
    var q = tables[currentQuestion];
      
    if(q.answer == 1){
        var q = tables[currentQuestion];
 
    correct();

    } else {
    wrong();
     
}
});

opt2.addEventListener("click", function(){
    var q = tables[currentQuestion];
    
    if(q.answer == 2){
      
    correct();

    } else {
    wrong();
   
}
});
opt3.addEventListener("click", function(){
    var q = tables[currentQuestion];
      
    if(q.answer == 3){
    
    correct();
    
    } else {
    wrong();
   }
});