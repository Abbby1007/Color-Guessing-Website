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
      display.textContent = `Hint: ___ (3 letters).Try Again`;
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
      display.textContent = `Hint: RED------ (9 letters).Try Again`;
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
      display.textContent = `Hint: ------ (6 letters).Try Again`;
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
      display.textContent = `Hint: YELLOW------ (12 letters).Try Again`;
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
      display.textContent = `Hint: ------ (6 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq6()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "YELLOWGREEN"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq7.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: YELLOW----- (11 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq7()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "GREEN"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq8.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ----- (5 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq8()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "BLUEGREEN"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq9.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: BLUE----- (9 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq9()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "BLUE"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq10.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ---- (4 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq10()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "BLUEVIOLET"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq11.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: BLUE------ (10 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq11()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "VIOLET"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq12.html"> <button> To Next Question </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: ------ (6 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}

function cwq12()
{
  click ++;
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "REDVIOLET"



  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwqcongratulations.html"> <button> To Congratulations Screen </button> </a>';
  }
    else if(click >= 3)
     {
      display.textContent = `Hint: RED------ (9 letters).Try Again`;
    }
  else {
    display.textContent = `Try Again`;
  }


}