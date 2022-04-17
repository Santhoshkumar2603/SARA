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
  

  const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


  $("#btn-login").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
        
         if(email != "" && password != "")
         {
                 var result = firebase.auth().signInWithEmailAndPassword(email ,password);
                  result.catch(function(error)
                  {
                       var errorCode =error.code;
                       var errorMessage=error.message;

                       console.log(errorCode);
                       console.log(errorMessage);
                       window.alert("Message :"+ errorMessage);

                  });
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });



  $("#btn-signup").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
         var cPassword = $("#comfirmpassword").val();
         
        
         if(email != "" && password != "" && cPassword != "")
         {
              if(password == cPassword)
              {
                var result = firebase.auth().createUserWithEmailAndPassword(email ,password);
                result.catch(function(error)
                {
                    var errorCode =error.code;
                    var errorMessage=error.message;
     
                    console.log(errorCode);
                    console.log(errorMessage);
                    window.alert("Message :"+ errorMessage);
     
                       });
              }
              else 
              {
                      window.alert("password donot match");

              }
                
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });


  $("#btn-resetPassword").click(function()
  {
       var auth=firebase.auth();
       var email=$("#email").val();
       if(email !="")
       {
             auth.sendPasswordResetEmail(email).then(function()
             {
                    window.alert("Email has been to you,please check and verify");
             })
             .catch(function(error)
             {
               var errorCode =error.code;
               var errorMessage=error.message;

               console.log(errorCode);
               console.log(errorMessage);
               window.alert("Message :"+ errorMessage);

             });
       }
       else
       {
            window.alert("please fill out all the message");
       }
  });

  $("#btn-logout").click(function()
  {
       window.location.href ="signin.html";
       firebase.auth().signOut();
  });
   
$("#btn-update").click(function()
{
       var phone =$("#phone").val();
       var address  =$("#address").val();
       var bio =$("#bio").val();
       var fName=$("#firstName").val();
       var sName=$("#secondName").val();
       var country=$("#country").val();
       var gender=$("#gender").val();
       var time=$("#time").val();
       var city=$("#city").val();
       var state=$("#state").val();
         
       var rootRef =firebase.database().ref().child("Users");
       var userID = firebase.auth().currentUser.uid;
       var usersRef= rootRef.child(fName+country+userID);
        
       if(fName !="" && sName !="" && city!=""&& state!=""&&phone!="" && address !="" && bio !="" && country!=""&& gender !=""&& time!="" )
       {
                 
                 var userData =
                 {
                      "phone":phone,
                      "address":address,
                      "bloodgroup":bio,
                      "Name":fName,
                      "Age":sName,
                      "department":country,
                      "gender":gender,
                      "time":time,
                      "dob":city,
                      "state":state,

                 }
                
                 console.log(userData)
                 usersRef.set(userData,function()
                 {
                   if(error)
                   {
                      var errorCode =error.code;
                      var errorMessage=error.message;
     
                      console.log(errorCode);
                      console.log(errorMessage);
                      window.alert("Message :"+ errorMessage);
                   }
                   else
                   {
                    window.location.href ="index.html";
                   }
     
                 });
                 {
                    window.location.href ="index.html";
                 }
       }
       else
       {
            window.alert("form is incomplete");
       }
});



 