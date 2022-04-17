// <!-- The core Firebase JS SDK is always required and must be listed first -->

var user ;

function check() {
  var a = 0,
    b = 0,
    c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  
  if (q1 == "Yes") {
    a++;
  } else if (q1 == "No") {
    b++;
  } else {
    c++;
  }

  if (q2 == "Yes") {
    a++;
  } else if (q2 == "No") {
    b++;
  } else {
    c++;
  }

  if (q3 == "Yes") {
    a++;
  } else if (q3 == "No") {
    b++;
  } else {
    c++;
  }

  if (q4 == "Yes") {
    a++;
  } else if (q4 == "No") {
    b++;
  } else {
    c++;
  }

  if (q5 == "Yes") {
    a++;
  } else if (q5 == "No") {
    b++;
  } else {
    c++;
  }

  localStorage.setItem("myValue", a);
  window.location.href="/DYSLEXIA.html";
 




  if (c !== 0) {    
     alert("Please! fill-in all the details");
  } else if (a == 5) {
     alert("You may have an exposure to the virus, so please contact the counselor from counseling forum.");
  } else if (b == 5) {

    alert("The risk of being affected is less. Stay safe in your home!");
  } else if (a != 5 && b != 5) {
    
    alert("You may have an exposure to the virus, So please contact the counselor from counseling forum.");
  }
  
}