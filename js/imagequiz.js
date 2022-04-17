var firebaseConfig = {
    apiKey: "AIzaSyDstn0y3uLlMCXC2ITsWBbblT3JIuAih80",
    authDomain: "nallaerupom-96758.firebaseapp.com",
    databaseURL: "https://nallaerupom-96758.firebaseio.com",
    projectId: "nallaerupom-96758",
    storageBucket: "nallaerupom-96758.appspot.com",
    messagingSenderId: "456782876188",
    appId: "1:456782876188:web:347f8ea0aa408324b199d9",
    measurementId: "G-2LV5JX102J"
  };


//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Identify the symbol and mark the correct option?",
    imgSrc: "images/q1.png",
    choiceA: "Addition",
    choiceB: "Subtraction",
    choiceC: "Multiplication",
    choiceD: "Division",
    correctAnswer: "C"
}, {
    question: "What is reverse of this number?",
    imgSrc: "images/q2.png",
    choiceA: "257",
    choiceB: "752",
    choiceC: "572",
    choiceD: "275",
    correctAnswer: "B"
}, {
    question: "Identify the number of ballons in this images",
    imgSrc: "https://m.media-amazon.com/images/I/61FP-y0nL1L._AC_UL320_.jpg",
    choiceA: "11",
    choiceB: "13",
    choiceC: "14",
    choiceD: "12",
    correctAnswer: "D"
}, {
    question: "What is the time mentioned in this image?",
    imgSrc: "https://staticimg.titan.co.in/Titan/Catalog/W0001PA01_1.jpg?impolicy=pqmed&imwidth=320",
    choiceA: "10.10",
    choiceB: "10.02",
    choiceC: "10.20",
    choiceD: "10.01",
    correctAnswer: "A"
}, {
    question: "Count the number of fingers, by closing right side of the eye",
    imgSrc: "https://media.istockphoto.com/photos/counting-woman-hands-picture-id184852105?k=20&m=184852105&s=612x612&w=0&h=jaxUs_Zhl4zsmGN-6oUKpngpzHhhY5LTn-FlILk8Mwo=",
    choiceA: "14",
    choiceB: "13",
    choiceC: "15",
    choiceD: "16",
    correctAnswer: "C"
 }, 
//{
//     question: "Which bird is this?",
//     imgSrc: "assets/birds/kakapo.jpg",
//     choiceA: "Kākā",
//     choiceB: "Kea",
//     choiceC: "Kākāpō",
//     choiceD: "Kōkako",
//     correctAnswer: "C"
// }, {
//     question: "Which bird is this?",
//     imgSrc: "assets/birds/kotuku.jpg",
//     choiceA: "New Zealand Fairy Tern/Tara iti",
//     choiceB: "White Heron/Kōtuku",
//     choiceC: "Shore Plover/Tūturuatu",
//     choiceD: "Spotted Shag/Parekareka",
//     correctAnswer: "B"
// }, {
//     question: "Which bird is this?",
//     imgSrc: "assets/birds/kea.jpg",
//     choiceA: "New Zealand Robin/Toutouwai",
//     choiceB: "Paradise Duck / Pūtakitaki",
//     choiceC: "Pūkeko",
//     choiceD: "Kea",
//     correctAnswer: "D"
// }, {
//     question: "Which bird is this?",
//     imgSrc: "assets/birds/kaka.jpg",
//     choiceA: "Kākā",
//     choiceB: "Tomtit/Miromiro",
//     choiceC: "Yellowhead/Mohua",
//     choiceD: "Fiordland Crested Penguin/Tawaki",
//     correctAnswer: "A"
// }, {
//     question: "Which bird is this?",
//     imgSrc: "assets/birds/kereru.jpg",
//     choiceA: "Kiwi",
//     choiceB: "New Zealand Pigeon/Kererū",
//     choiceC: "Kingfisher/Kōtare",
//     choiceD: "Eastern Bar-Tailed Godwit/Kuaka",
//     correctAnswer: "B"
// },
 ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<h2> You scored " + score + " out of 5!</h2>";

    if (score<=5) {
        scoreMessage.innerHTML = "<h3>Assessment was Completed Successfully !!!</h3>";
    }
  
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,700);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,700);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,700);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,700);
        }
    }
}

function restartQuiz() {
    firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
              var rootRef =firebase.database().ref().child(uid);
              var usersRef= rootRef.child("Dyscalculia/63");
            usersRef.set({
                   "3": score,
                 });
            } 
          });
          setTimeout(function(){
            location.href="/dyscalculia.html";
        },4500);
    // start.style.display = "block";
    // scoreBlock.style.display = "none";
    // scoreMessage.style.display = "none";
    // quizAgain.style.display = "none";
    // score = 0;
    // questionIndex = 0;
}