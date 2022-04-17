// <!-- The core Firebase JS SDK is always required and must be listed first -->

function alert() {
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
  firebase.initializeApp(firebaseConfig);

  var a = 0,
    b = 0,
    c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;

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
  // if (document.getElementById) {
  //  window.alert = function (txt) {
  //     createCustomAlert(a);
  //   }
  // }
  // var user = firebase.auth().currentUser.uid;
  // console.log("user");
  // firebase.database().ref('users/'+user).set({
  //   "4": a,
  // });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      var rootRef =firebase.database().ref().child(uid);
      var usersRef= rootRef.child("Dyslexia/4");
    usersRef.set({
           "4":a,
         });
    }
  });
  
  var txt="";
  if(a>=4)
  {
    txt="Congrats! 😎🎉, You got "+a+" out of 5"
  }
  else if(a==3)
  {
    txt="Nice! 😎, You got 3 out of 5";
  }
  else if(a==2 || a==1)
  {
    txt="Sorry! 😐, You got "+a+" out of 5";
  }
  var ALERT_TITLE = "Completed !";
  var ALERT_BUTTON_TEXT = "Ok";
  d = document;

    if (d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    //btn.href = "/Dyslexia.html";
    btn.focus();
    btn.onclick = function () {
      removeCustomAlert(a);
      return false;
    }
    alertObj.style.display = "block";
  // if (document.getElementById) {
  //   window.alert = function (txt) {
  //     createCustomAlert(a);
  //   }
  // }
  // function createCustomAlert(txt) {
  // }

  function removeCustomAlert(txt) {
    
    window.location.href = "/Dyslexia.html";
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
  }
  function ful() {
    alert('Alert this pages');
  }
}
