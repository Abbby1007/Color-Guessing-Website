// Color Wheel Questions script.js
let display = document.getElementById('appear');
var click = 0;
function cwq1()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "RED"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq2.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ___ (3 letters)`;
    }
  else {
    display.textContent = `Try Again`;
  }
   
  
}

function cwq2()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "REDORANGE"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq3.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: RED------ (9 letters)`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq3()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "ORANGE"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq4.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ------ (6 letters)`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq4()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "YELLOWORANGE"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq5.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: YELLOW------ (12 letters)`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq5()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "YELLOW"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq6.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ------ (6 letters)`;
    }
  else {
    display.textContent = `Try Again`;
  }


}
