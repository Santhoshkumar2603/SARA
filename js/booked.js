
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

var rootRef = firebase.database().ref().child("Users");
console.log(rootRef);

rootRef.on("child_added",snap => {
    
    var first = snap.child("Name").val();
    var last = snap.child("Age").val();
    var gender = snap.child("gender").val();
    //var blood = snap.child("bloodgroup").val();
    //var dept = snap.child("department").val();
    var phone = snap.child("phone").val();
    var address = snap.child("address").val();
    var city = snap.child("dob").val();
    var state = snap.child("state").val();
    var time = snap.child("time").val();
    

    $("#table_body").append("<tr><td>"+ first + "</td><td>" + last + "</td><td>"+ city +"</td><td>"+ gender+ "</td><td>"+ phone+ "</td><td>" + address+ "</td><td>"+state+ "</td><td>"+ time +"</td><td><button>BOOKED</button></td></tr>");
});
