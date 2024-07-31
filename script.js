// Color Wheel Questions script.js
let display = document.getElementById('appear');
function cwq1()
{
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "RED"

  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq2.html"> <button> To Next Question </button> </a>';
  }
  else {
    display.textContent = `Try Again`;
  }

  
}

function cwq2()
{
  let input = document.getElementById("answerInput").value;
  console.log(input);
  var correct = "YELLOWORANGE"

  if (input == correct){
    display.textContent = `Correct`;
    document.getElementById("appear").innerHTML = '<a href = "cwq3.html"> <button> To Next Question </button> </a>';
  }
  else {
    display.textContent = `Try Again`;
  }


}