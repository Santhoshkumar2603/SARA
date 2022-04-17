// creating an array and passing the number, questions, options, and answers
var audio = new Audio('audio_file.mp3');
audio.play();
let questions = [
    {
    numb: 1,
    question: "What word rhymes with a dog?",
    answer: "log",
    options: [
      "log",
      "big",
      "leg",
      "beg"
    ]
  },
    {
    numb: 2,
    question: "The ______ ate the cheese.",
    answer: "rat",
    options: [
      "mat",
      "hat",
      "rat",
      "bat"
    ]
  },
    {
    numb: 3,
    question: "What gets wetter the more it dries?",
    answer: "towel",
    options: [
      "foul",
      "towel",
      "owl",
      "hole"
    ]
  },
    {
    numb: 4,
    question: "What room has no walls?",
    answer: "Mush room",
    options: [
      "Store room",
      "Bed room",
      "Mush room",
      "Rest room"
    ]
  },
    {
    numb: 5,
    question: "I am an odd number. Take away one letter and I become even. What number am I?",
    answer: "Seven",
    options: [
      "Nine",
      "Eleven",
      "Heaven",
      "Seven"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];