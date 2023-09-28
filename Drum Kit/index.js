//detecting button press
var numOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfButtons;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
     //query selector is selecting all buttons and for loop is incrementing the i value so that the event listener 
     // is added to all the buttons that fall under the query selector  

        var btnInnerHTML=this.innerHTML;//getting the innerHTML value of all buttons pressed
       
       makeSound(btnInnerHTML); //passing the innerHTML value as an arguement into the function

       btnAnimation(btnInnerHTML);
        
    });   
}

//detecting keyoard press
document.addEventListener("keypress",function (event) { 
// (event) is a parameter that contains the value of an event
  console.log(event.key);

  makeSound(event.key); //passing the key value of every keyboard press eg("w","a","s","d") as an arguement into the function
//   switch (event.key) 
//   { //validating button presses and keyboard key presses to create sound
//       case "w":
//           var tom1=new Audio('sounds/tom-1.mp3');
//           tom1.play();
//           break;
      
//       case "a":
//           var tom2=new Audio('sounds/tom-2.mp3');
//           tom2.play();
//           break;

//       case "s":
//           var tom3=new Audio('sounds/tom-3.mp3');
//           tom3.play();
//           break;

//       case "d":
//           var tom4=new Audio('sounds/tom-4.mp3');
//           tom4.play();
//           break;
      
//       case "j":
//           var snare=new Audio('sounds/snare.mp3');
//           snare.play();
//           break;
      
//       case "k":
//           var crash=new Audio('sounds/crash.mp3');
//           crash.play();
//           break;

//       case "l":
//           var kick= new Audio('sounds/kick-bass.mp3');
//           kick.play();
//           break;

//       default:
//           console.log(btnInnerHTML);
//           break;
//   }
    btnAnimation(event.key);

} );


function makeSound(key){
    
    switch (key) 
    { //validating button presses and keyboard key presses to create sound
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        

         case "h":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(btnInnerHTML);
            break;
    }
}

function btnAnimation(currentKey){
    var activeBtn=document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}