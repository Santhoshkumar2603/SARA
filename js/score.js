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
  let total1=0,total2=0,total3=0,total4=0,total5=0,total6=0;

      let thirs1=0,first1=0,second1=0,fourth1=0,five1=0;
      let thirs2=0,first2=0,second2=0;
      let first3=0,second3=0;
      let first4=0,second4=0;
      let first5=0,second5=0;
      let thirs6=0,first6=0,second6=0;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      var rootRef = firebase.database().ref().child(uid);
      rootRef.on("child_added",snap => {


      first1 = snap.child("/1/1").val();
      second1 = snap.child("/2/2").val();
      thirs1 = snap.child("/3/3").val();
      fourth1 = snap.child("/4/4").val();
      five1 = snap.child("/5/5").val();
      if(five1>0){
      total1 = ((100-first1)+(100-second1)+thirs1+fourth1+five1)/5;
      console.log(total1);
      }
    
     // console.log(total1);

      
      first2 = snap.child("/21/1").val();
      second2 = snap.child("/22/2").val();
      thirs2 = snap.child("/23/3").val();
     
      if(thirs2>0){
      total2 = ((100-first2)+(100-second2)+thirs2)/3;
      console.log(total2);

      }
     // console.log(total2);



     let first3=0,second3=0;
     first3 = snap.child("/31/1").val();
     second3 = snap.child("/32/2").val();
     
     if(second3>0){
     total3 = ((100-first3)+second3)/2;
     console.log(total3);

     }



     first4 = snap.child("/41/1").val();
     second4 = snap.child("/42/2").val();
     
     if(second4>0){
     total4 = ((100-first4)+second4)/2;
     console.log(total4);

     }

     first5 = snap.child("/51/1").val();
     second5 = snap.child("/52/2").val();
     
     if(second5>0){
     total5 = ((100-first5)+second5)/2;
     console.log(total5);

     }


     first6 = snap.child("/61/1").val();
     second6 = snap.child("/62/2").val();
     thirs6 = snap.child("/63/3").val();
    
     if(thirs6>0){
     total6 = ((100-first6)+(second6)+thirs6)/3;
     console.log(total6);

    }

     
        let labels2 = ['Dyslexia','Dyspraxia', 'Dysgraphia', 'ADHD', 'Autism','Dyscalculia'];
        let data2 = [total1, total2, total3, total4,total5,total6];
        //let data2 =[a, b, c, d, e, f];
        let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#f5ce42','#f05b74'];
        
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
  
  

 