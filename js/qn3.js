// creating an array and passing the number, questions, options, and answers
var audio = new Audio('audio_file.mp3');
audio.play();
let questions = [
    {
    numb: 1,
    question: "Do you find yourself reading slower than most people you know?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 2,
    question: "Do you often have to read something two or three times before it makes sense?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 3,
    question: "Are you uncomfortable reading out loud?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 4,
    question: "Do you misspell common words — misspelling them a different way every time?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 5,
    question: "Are you accused of “not listening” because you can’t summarize or recall details of a recent conversation?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
  {
    numb: 6,
    question: "Do you get lost when following directions, or confuse your left for your right?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 7,
    question: "Do you find you still have spelling mistakes in your writing even after Spell Check?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 8,
    question: "Do you struggle to pronounce long words out loud, even if you know them?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 9,
    question: "Do you get confused while reading/listening to homophones?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    {
    numb: 10,
    question: "Do you find yourself writing slower than others?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
];