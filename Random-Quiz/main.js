//Random Quiz

//Gloabal variables
let score = 0;

//Event Listeners
document.getElementById('Btn').addEventListener('click', markEvent);
//Event Functions
function markEvent() {
  let q1Answer = document.getElementById('Q1').value.toLowerCase();
  if (q1Answer == "flash" || q1Answer == "the flash") {
    document.getElementById("q1Result").innerHTML = 'Correct';
    score++;  // score = score + 1  or use score += 1
  } else {
    document.getElementById("q1Result").innerHTML = "Incorrect";
  }

  let q2Answer = document.getElementById('Q2').value.toLowerCase();
  if (q2Answer == "reverse flash"){
    document.getElementById('q2Result').innerHTML = 'Correct';
    score++;
  } else{
    document.getElementById('q2Result').innerHTML = 'Incorrect';
  }

  let q3Answer = document.getElementById('Q3').value.toLowerCase();
  if (q3Answer == "tony stark"){
    document.getElementById('q3Result').innerHTML = 'Correct';
    score++;
  } else {
    document.getElementById('q3Result').innerHTML = 'Incorrect';
  }

  let q4Answer = document.getElementById('Q4').value.toLowerCase();
  if(q4Answer == "peggy carter"){
    document.getElementById('q4Result').innerHTML = 'Correct';
    score++;
  } else {
    document.getElementById('q4Result').innerHTML = 'Incorrect';
  }

  document.getElementById('score-area').innerHTML = score;
}
