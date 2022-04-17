// creating an array and passing the number, questions, options, and answers
var audio = new Audio('audio_file.mp3');
audio.play();
let questions = [
    {
    numb: 1,
    question: "Does your child appear to have an attention problem? ",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 2,
    question: "Does/did your child have noticeable hesitations or repetitions in speech? ",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 3,
    question: "Does/did your child have difficulty using single words by 14-16 months?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 4,
    question: "Does your child struggle with rhymes and alterations?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 5,
    question: "Can your child blend and segment sounds?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
  {
    numb: 6,
    question: "Does/did your child struggle to say certain sounds?  ",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 7,
    question: "Does/did your child mispronounce all words? ",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 8,
    question: "Is your child a regular baby or a premature baby?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
    ]
  },
    {
    numb: 9,
    question: "Does anyone in your family have this issue?",
    answer: "Yes",
    options: [
      "Yes",
      "No"
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