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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var rootRef = firebase.database().ref().child(uid);
    //console.log(rootRef);
    rootRef.on("child_added",snap => {
    var first = snap.child("/1/1").val();
    var second = snap.child("/2/2").val();
    var thirs = snap.child("/3/3").val();
    var fourth = snap.child("/4/4").val();
    var five = snap.child("/5/5").val();


let labels2 = ['Family Background','Self Assessment', 'Decoding', 'Listening', 'Speaking'];
let data2 = [first, second, thirs, fourth,five];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#f5ce42'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Maximum no of Scores",
            display: true
        },
        legend: {
          display: false
        }
    }
});
    
});
  } 
});





$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var faqs = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/faq.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    faqs =  faqs.data;
  
      
    var c=-1;
    // console.log(faqs);
    faqs.forEach(element => { 
      c+=1;
      if(faqs[c].no==='1'){
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.question1}</b></h5>
    </div>
    <br>
    <p style="color:#0a2166" class="mb-1"> ${element.answer1}</p>
    </div>`;
      }
          
    });   
});

var firebaseConfig= (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "json/fb_config.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  }); 
  return json;
})();
firebase.initializeApp(firebaseConfig); 
console.log("init");  

firebase.auth().onAuthStateChanged (firebaseUser => {
  if (firebaseUser){
      console.log(firebaseUser.email);
  }
  else{
      console.log('not logged in');
      window.location = "signinwithphno.html";
  }

});



