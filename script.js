var i = 1;
var wrong = new Audio('assets/wrong.mp3');
var correct = new Audio('assets/correct.wav');

function check(clicked_id)
{
    var element = document.getElementById(clicked_id);
  
    console.log(clicked_id);

    if(clicked_id == i ) {
        i = i + 1;
        element.classList.add("correct");
        correct.play();
        
    }

    else {
        wrong.play();  
    }

     
    console.log(i);
}