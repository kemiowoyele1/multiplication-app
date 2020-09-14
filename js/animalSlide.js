







var currentQuestion = 0;
var container = document.getElementById('container');
var alphabet = document.getElementById("alphabet");
var image1 = document.getElementById("image");
var spelling = document.getElementById("spelling");
var playbtn = document.getElementById("playbtn");
var back = document.getElementById("back");
var next = document.getElementById("next");
var body = document.getElementById("body");
	var pop = document.getElementById("pop");
function loadquestion (currentQuestion) {
	//  var r1 = Math.floor(Math.random()* words.length);
      
	// var q = words[r1];
	var q = words[currentQuestion];
	image1.src ="../images/"+ q.image;
 //    alphabet.textContent=  q.name ;
	// spelling.textContent =  q.item ;  
 // image1.style.backgroundSize = "cover";
	// image1.style.backgroundRepeat = "no-repeat";
	// image1.style.visibility = "visible";
      
		// // let voice = new p5.Speech();
		// // voice.speak(speak1);
	    var r2 = Math.floor(Math.random()*155)  ;
             var r3 = Math.floor(Math.random()*155) ;
             var r4 = Math.floor(Math.random()*155) ;
              var r5 =  "rgb(" + r2 + ", " + r3 + ", " + r4 + ")";
              p1 = r2+40;
            p2 = r3+40;
            p3 = r4+40;
                var r6 =  "rgb(" + p1 + ", " + p2 + ", " + p3 + ")";
          
          // spelling.style.color = r6;
          // alphabet.style.color = r5;
 setTimeout(function(){
           speak();
             },50);

    
}
function loadNextQuestion(){
	 // window.location = "quiz.html"
	 // r1 = Math.floor(Math.random()*questions.length);

	  // var currentQuestion = r1;
   
	  currentQuestion++;
	 if ( currentQuestion >= words.length) {
	 	currentQuestion = 0
	 }
	 w1 = Math.floor(Math.random()*2);
     // body.style.backgroundImage = "url(../vehicles/w" +w1 +".png)"
	loadquestion(currentQuestion);
//forwardOne();
 // setTimeout(function(){
 //           speak();
 //             },50);
} 


 loadquestion(currentQuestion);



function backOne(){
		 // var currentQuestion = Math.floor(Math.random()*questions.length);;
 // var currentQuestion = r1;
	currentQuestion--;
	
     if(currentQuestion < 0){
	currentQuestion = words.length;

	};
	 w1 = Math.floor(Math.random()*2);
     body.style.backgroundImage = "url(../images/w" +w1 +".png)"

		loadquestion(currentQuestion);
setTimeout(function(){
           speak();
             },50);
};




container.addEventListener('touchstart', function(evt){
    startingX = evt.touches[0].clientX;
     });
 container.addEventListener('touchmove', function(evt){
   var touch = evt.touches[0];
      var change = startingX - touch.clientX;
       });
 container.addEventListener('touchend', function(evt){
 var change = startingX - evt.changedTouches[0].clientX;
      var threshold = screen.width / 8;
     //	 if (change < threshold){
    	
          if (change > 0 && change > threshold){
        loadNextQuestion();   
      }
    
      else if (change < threshold && change < 0){
        backOne();
      }
      else {
        loadquestion(currentQuestion);
      }
      
   });


// playbtn.addEventListener("click", function(){
	
// 	 window.location = "words.html";	
  
	
// });
// 	
setTimeout(function(){
           speak();
             },50);