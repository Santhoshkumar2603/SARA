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


try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}
var noteTextarea1 = $('#note-textarea1');
var noteTextarea2 = $('#note-textarea2');
var noteTextarea3 = $('#note-textarea3');
var noteTextarea4 = $('#note-textarea4');
var noteTextarea5 = $('#note-textarea5');


var instructions1 = $('#recording-instructions1');
var instructions2 = $('#recording-instructions2');
var instructions3 = $('#recording-instructions3');
var instructions4 = $('#recording-instructions4');
var instructions5 = $('#recording-instructions5');

var noteContent1 = '';
var noteContent2 = '';
var noteContent3 = '';
var noteContent4 = '';
var noteContent5 = '';

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;

var count=0;
/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function (event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    // Add the current transcript to the contents of our Note.
    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if (!mobileRepeatBug) {
        if (a == 0) {
            noteContent1 += transcript;
            noteTextarea1.val(noteContent1);
            a = 1;
        }
        else if (b == 0) {
            noteContent2 += transcript;
            noteTextarea2.val(noteContent2);
            b = 1;
        }
        else if (c == 0) {
            noteContent3 += transcript;
            noteTextarea3.val(noteContent3);
            c = 1;
        }
        else if (d == 0) {
            noteContent4 += transcript;
            noteTextarea4.val(noteContent4);
            d = 1;
        }
        else if (e == 0) {
            noteContent5 += transcript;
            noteTextarea5.val(noteContent5);
            e = 1;
        }
    }
};

recognition.onstart = function () {
    if (a == 0)
        instructions1.text('Voice recognition activated. Try speaking into the microphone.');
    else if (b == 0)
        instructions2.text('Voice recognition activated. Try speaking into the microphone.');
    else if (c == 0)
        instructions3.text('Voice recognition activated. Try speaking into the microphone.');
    else if (d == 0)
        instructions4.text('Voice recognition activated. Try speaking into the microphone.');
    else if (e == 0)
        instructions5.text('Voice recognition activated. Try speaking into the microphone.');
}


// recognition.onspeechend = function () {
//     if(a==0)
//     instructions1.text('You were quiet for a while so voice recognition turned itself off.');
//     else if(b==0)
//     instructions2.text('You were quiet for a while so voice recognition turned itself off.');

// }

recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
        if (a == 0)
            instructions1.text('No speech was detected. Try again.');
        else if (b == 0)
            instructions2.text('No speech was detected. Try again.');
        else if (c == 0)
            instructions3.text('No speech was detected. Try again.');
        else if (d == 0)
            instructions4.text('No speech was detected. Try again.');
        else if (e == 0)
            instructions5.text('No speech was detected. Try again.');
    };
}
// Sync the text inside the text area with the noteContent variable.

/*-----------------------------
      App buttons and input 
------------------------------*/
//one
// noteTextarea1.on('input', function() {
//     noteContent1 = $(this).val();

// })

// function getDifference(a, b) {
//     var i = 0;
//     var j = 0;
//     var result = "";

//     while (j < b.length) {
//         if (a[i] != b[j] || i == a.length)
//             result += b[j];
//         else
//             i++;
//         j++;
//     }
//     return result;
// }

$('#start-record-btn1').on('click', function (e) {
    a=0;
    if (noteContent1.length) {
        noteContent1 += ' ';
    }
    recognition.start();
    a = 0;
});
$('#pause-record-btn1').on('click', function (e) {
    recognition.stop();
    instructions1.text('Voice recognition paused.');
});
$('#save-note-btn1').on('click', function (e) {
    recognition.stop();
    let x = noteContent1;
    let y = "cat sat bat";
    if (x === y) {
        noteTextarea1.val("Congrats! 🎉, You Spelled Correctly");
        count++;
    }
    else {
        noteTextarea1.val("Sorry! 😐, Please try again");
    }
    if (!noteContent1.length) {
        instructions1.text('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        //saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent1 = '';
        //renderNotes(getAllNotes());
        //noteTextarea2.val('');
        instructions1.text('Note saved successfully.');
    }

})

//two

// noteTextarea2.on('input', function() {
//     noteContent2 = $(this).val();
// })

$('#start-record-btn2').on('click', function (e) {
    
    if (noteContent2.length) {
        noteContent2 += ' ';
    }
    recognition.start();
    b = 0;
});


$('#pause-record-btn2').on('click', function (e) {
    recognition.stop();
    instructions2.text('Voice recognition paused.');
});

$('#save-note-btn2').on('click', function (e) {
    recognition.stop();
    let x = noteContent2;
    let y = "well sell tell";
    if (x === y) {
        noteTextarea2.val("Congrats! 🎉, You Spelled Correctly");
        count++;
    }
    else {
        noteTextarea2.val("Sorry! 😐, Please try again");
    }
    if (!noteContent2.length) {
        instructions2.text('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        //saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent2 = '';
        //renderNotes(getAllNotes());
        //noteTextarea.val('');
        instructions2.text('Note saved successfully.');
    }

});


//three

$('#start-record-btn3').on('click', function (e) {
    if (noteContent3.length) {
        noteContent3 += ' ';
    }
    recognition.start();
    c = 0;
});
$('#pause-record-btn3').on('click', function (e) {
    recognition.stop();
    instructions3.text('Voice recognition paused.');
});
$('#save-note-btn3').on('click', function (e) {
    recognition.stop();
    let x = noteContent3;
    let y = "happy nappy sappy";
    if (x === y) {
        noteTextarea3.val("Congrats! 🎉, You Spelled Correctly");
        count++;
    }
    else {
        noteTextarea3.val("Sorry! 😐, Please try again");
    }
    if (!noteContent3.length) {
        instructions3.text('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        //saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent3 = '';
        //renderNotes(getAllNotes());
        //noteTextarea2.val('');
        instructions3.text('Note saved successfully.');
    }

});

//four

$('#start-record-btn4').on('click', function (e) {
    if (noteContent4.length) {
        noteContent4 += ' ';
    }
    recognition.start();
    d = 0;
});
$('#pause-record-btn4').on('click', function (e) {
    recognition.stop();
    instructions4.text('Voice recognition paused.');
});
$('#save-note-btn4').on('click', function (e) {
    recognition.stop();
    let x = noteContent4;
    let y = "ball fall tall";
    if (x === y) {
        noteTextarea4.val("Congrats! 🎉, You Spelled Correctly");
        count++;
    }
    else {
        noteTextarea4.val("Sorry! 😐, Please try again");
    }
    if (!noteContent4.length) {
        instructions4.text('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        //saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent4 = '';
        //renderNotes(getAllNotes());
        //noteTextarea2.val('');
        instructions4.text('Note saved successfully.');
    }

});

//five

$('#start-record-btn5').on('click', function (e) {
    if (noteContent5.length) {
        noteContent5 += ' ';
    }
    recognition.start();
    e = 0;
});
$('#pause-record-btn5').on('click', function (e) {
    recognition.stop();
    instructions5.text('Voice recognition paused.');
});
$('#save-note-btn5').on('click', function (e) {
    recognition.stop();
    let x = noteContent5;
    let y = "map sap lap";
    if (x === y) {
        noteTextarea5.val("Congrats! 🎉, You Spelled Correctly");
        count++;
    }
    else {
        noteTextarea5.val("Sorry! 😐, Please try again");
    }
    if (!noteContent5.length) {
        instructions5.text('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        //saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent5 = '';
        //renderNotes(getAllNotes());
        //noteTextarea2.val('');
        instructions5.text('Note saved successfully.');
    }

});

function speech()
{
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            var rootRef =firebase.database().ref().child(uid);
            var usersRef= rootRef.child("Dyslexia/5");
          usersRef.set({
                 "5": count,
               });
          // ...
        } 
      });
      setTimeout(function(){
        location.href="/Dyslexia.html";
    },2000); 
}