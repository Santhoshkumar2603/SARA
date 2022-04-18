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
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);



var playing = false;
var score;
var correctAnswer;
var time = 31;

document.getElementById("startreset").onclick = () => {
    if (playing == true) {
        //location.reload(true);
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
              var rootRef =firebase.database().ref().child(uid);
              var usersRef= rootRef.child("Dyscalculia/62");
              var du=score;
              du=du*6;
            usersRef.set({
                   "2": du,
                 });
              // ...
            } 
          });
          setTimeout(function(){
            location.href="/dyscalculia.html";
        },4500); 
    } else {
        playing = true
        score = 0;
        remainingTime();
        show("timeremaining");
        hide("gameOver");
        text("startreset", "Exit");
        generateQA();
    }
}

for (let i = 1; i < 5; i++) {
    document.getElementById("box"+i).onclick = () => {
        if (playing == true) {
            if (document.getElementById("box"+i).innerHTML == correctAnswer) {
                score++;

                document.getElementById("scorevalue").innerHTML = score;

                hide("wrong");
                show("correct");
                setTimeout(() => {
                    hide("correct");
                }, 1000);
                
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(() => {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

var remainingTime = () => {
    setInterval(() => {
        time--;
        if (time >= 0) {
            // ACTIVE TIME
            document.getElementById("timeremainingvalue").innerHTML = " " + time + " ";
        } else {
            // expired time
            clearInterval(this);
            document.getElementById("gameOver").innerHTML = "<p>Assessment Completed</p><p>Your score is: " + score + "</p>";
            show("gameOver");
            hide("timeremaining");
        }
    }, 1000);
}

var generateQA = () => {
    var x = Math.floor(Math.random() * 9) + 1;
    var y = Math.floor(Math.random() * 9) + 1;
    if(time>=20)
    {
        correctAnswer = x * y;
        var correctPosition = 1 + (Math.round(3 * Math.random()));
    
        var answers = [correctAnswer];
        // displaying question 
        document.getElementById("question").innerHTML = "<p>" + x + " X " + y + "</p>";
    
        for (let i = 1; i <= 4; i++) {
            if (i != correctAnswer) {
                do {
                    // generate random wrong answer
                    var wrongAnswer = (Math.floor(Math.random() * 9) + 1) * (Math.floor(Math.random() * 9) + 1);
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                } while (answers.indexOf(wrongAnswer) > -1);
            }
        }
        // disaplying correct answer
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
        answers.push(wrongAnswer);
        return correctAnswer;   
    }
    else if(time>=10 && time<20)
    {
        correctAnswer = x + y;
        var correctPosition = 1 + (Math.round(3 * Math.random()));
    
        var answers = [correctAnswer];
        // displaying question 
        document.getElementById("question").innerHTML = "<p>" + x + " + " + y + "</p>";
    
        for (let i = 1; i <= 4; i++) {
            if (i != correctAnswer) {
                do {
                    // generate random wrong answer
                    var wrongAnswer = (Math.floor(Math.random() * 9) + 1) + (Math.floor(Math.random() * 9) + 1);
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                } while (answers.indexOf(wrongAnswer) > -1);
            }
        }
        // disaplying correct answer
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
        answers.push(wrongAnswer);
        return correctAnswer;
    }
    else{
        correctAnswer = x - y;
        var correctPosition = 1 + (Math.round(3 * Math.random()));
    
        var answers = [correctAnswer];
        // displaying question 
        document.getElementById("question").innerHTML = "<p>" + x + " - " + y + "</p>";
    
        for (let i = 1; i <= 4; i++) {
            if (i != correctAnswer) {
                do {
                    // generate random wrong answer
                    var wrongAnswer = (Math.floor(Math.random() * 9) + 1) - (Math.floor(Math.random() * 9) + 1);
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                } while (answers.indexOf(wrongAnswer) > -1);
            }
        }
        // disaplying correct answer
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
        answers.push(wrongAnswer);
        return correctAnswer;
    }
}

// FAST EASY FUNCTIONS
var show = (id) => {
    document.getElementById(id).style.display = "block";
}

var hide = (id) => {
    document.getElementById(id).style.display = "none";
}

var text = (id, text) => {
    document.getElementById(id).innerHTML = text;
}

var showTimeout = (id, time) => {
    setTimeout(() => {
        show(id)
    }, time);
}

show("gameOver");
text("gameOver", "<p>Please click procedd to start assessment</p>");
text("startreset", "Start Assessment");