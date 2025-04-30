


// const questions = [
// {
//     question: "What is the biggest animal in the world?",
//     answers: [
//        { text: "Elephant", correct: false },
//        { text: "Blue Whale", correct: true },
//        { text: "Giraffe", correct: false },
//        { text: "Great White Shark", correct: false }
//     ],
// },

//  {
//     question: "How many continents are there on Earth?",
//     answers: [
//        { text: "5 continents", correct: false },
//        { text: "6 continents", correct: false },
//        { text: "7 continents", correct: true },
//        { text: "8 continents", correct: false }
//     ],
// },

//  {
//     question: "What is the capital of Japan?",
//     answers: [
//        { text: "Seoul", correct: false },
//        { text: "Beijing", correct: false },
//        { text: "Tokyo", correct: true },
//        { text: "Bangkok", correct: false }
//     ],
// },

//  {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//        { text: "Venus", correct: false },
//        { text: "Jupiter", correct: false },
//        { text: "Mars", correct: true },
//        { text: "Saturn", correct: false }
//     ],
// },

//  {
//     question: "How many hearts does an octopus have?",
//     answers: [
//        { text: "1", correct: false },
//        { text: "2", correct: false },
//        { text: "3", correct: true },
//        { text: "4", correct: false }
//     ],
// },
// ];


// const questionElement = document.getElementById('question');
// const ansbtn = document.getElementById('answer-buttons');
// const nextbtn = document.getElementById('next-btn');

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//      currentQuestionIndex = 0;
//      score = 0;
//      nextbtn.innerHTML = "Next";
//      showQuestion();

// }

// const showQuestion=()=>{
//     resetState();
// let currentQuestion = questions[currentQuestionIndex];
// let questionNo = currentQuestionIndex + 1;
// questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

// currentQuestion.answers.forEach(answer =>{
// const button = document.createElement("button");
// button.innerHTML = answer.text;
// button.classList.add("btn");
// ansbtn.appendChild(button);
// if(answer.correct){
//    button.dataset.correct = answer.correct;
// }
// button.addEventListener('click', selectAnswer );

// });

// } 

// const resetState =()=>{
//     nextbtn.style.display = 'none';
//     while(ansbtn.firstChild){
//         ansbtn.removeChild(ansbtn.firstChild);
//     }
    
// }

// const selectAnswer = (e)=>{
// let selectedBtn = e.target ;
// let isCorrect = selectedBtn.dataset.correct === 'true';
// if(isCorrect){
//    selectedBtn.classList.add('correct');
//    score++;
// }else{
//    selectedBtn.classList.add('incorrect');
// }

// Array.from(ansbtn.children).forEach(button =>{
//    if(button.dataset.correct === "true"){
//       button.classList.add('correct');
     

//    }
//    button.disabled = true;
  
// });
// nextbtn.style.display = 'block'  
// }

// const  showScore = ()=>{
//    resetState();
//    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//    nextbtn.innerHTML = 'PLay again'; 
//    nextbtn.style.display = 'block'; 
// }

// const handleNextButton = ()=>{
//    currentQuestionIndex++;
//    if(currentQuestionIndex < questions.length){
//        showQuestion();
//    }
//    else{
//       showScore();
//    }
 
// }  


// nextbtn.addEventListener('click', ()=>{
//    if(currentQuestionIndex < questions.length){
//       handleNextButton();
//    }
//    else{
//       startQuiz();
//    }
// });



// startQuiz();
































const questions = [
   {
       question: "What is the biggest animal in the world?",
       answers: [
           { text: "Elephant", correct: false },
           { text: "Blue Whale", correct: true },
           { text: "Giraffe", correct: false },
           { text: "Great White Shark", correct: false }
       ],
   },
   {
       question: "How many continents are there on Earth?",
       answers: [
           { text: "5 continents", correct: false },
           { text: "6 continents", correct: false },
           { text: "7 continents", correct: true },
           { text: "8 continents", correct: false }
       ],
   },
   {
       question: "What is the capital of Japan?",
       answers: [
           { text: "Seoul", correct: false },
           { text: "Beijing", correct: false },
           { text: "Tokyo", correct: true },
           { text: "Bangkok", correct: false }
       ],
   },
   {
       question: "Which planet is known as the Red Planet?",
       answers: [
           { text: "Venus", correct: false },
           { text: "Jupiter", correct: false },
           { text: "Mars", correct: true },
           { text: "Saturn", correct: false }
       ],
   },
   {
       question: "How many hearts does an octopus have?",
       answers: [
           { text: "1", correct: false },
           { text: "2", correct: false },
           { text: "3", correct: true },
           { text: "4", correct: false }
       ],
   },
];

// Selecting elements from the DOM
const questionElement = document.getElementById('question');
const ansbtn = document.getElementById('answer-buttons');
const nextbtn = document.getElementById('next-btn');

// Variables to keep track of quiz progress
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
   currentQuestionIndex = 0; // Reset question index
   score = 0; // Reset score
   nextbtn.innerHTML = "Next"; // Set button text
   showQuestion(); // Show the first question
}

// Function to display a question
const showQuestion = () => {
   resetState(); // Reset previous question state
   let currentQuestion = questions[currentQuestionIndex]; // Get current question
   let questionNo = currentQuestionIndex + 1; // Numbering the question
   questionElement.innerHTML = questionNo + '. ' + currentQuestion.question; // Display question

   // Create answer buttons dynamically
   currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text; // Set button text
       button.classList.add("btn"); // Add CSS class
       ansbtn.appendChild(button); // Append button to answer container
       
       // Store correct answer in dataset
       if (answer.correct) {
           button.dataset.correct = answer.correct;
       }
       
       // Add event listener for answer selection
       button.addEventListener('click', selectAnswer);
   });
}

// Function to reset the state before displaying a new question
const resetState = () => {
   nextbtn.style.display = 'none'; // Hide next button
   while (ansbtn.firstChild) { // Remove all previous answer buttons
       ansbtn.removeChild(ansbtn.firstChild);
   }
}

// Function to handle answer selection
const selectAnswer = (e) => {
   let selectedBtn = e.target; // Get clicked button
   let isCorrect = selectedBtn.dataset.correct === 'true'; // Check if it's correct
   
   if (isCorrect) {
       selectedBtn.classList.add('correct'); // Highlight correct answer
       score++; // Increase score
   } else {
       selectedBtn.classList.add('incorrect'); // Highlight incorrect answer
   }
   
   // Show correct answer by highlighting it
   Array.from(ansbtn.children).forEach(button => {
       if (button.dataset.correct === "true") {
           button.classList.add('correct');
       }
       button.disabled = true; // Disable all buttons after selection
   });
   
   nextbtn.style.display = 'block'; // Show next button
}

// Function to display the final score
const showScore = () => {
   resetState(); // Reset state
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Show score
   nextbtn.innerHTML = 'Play again'; // Change button text
   nextbtn.style.display = 'block'; // Show play again button
}

// Function to handle next question button click
const handleNextButton = () => {
   currentQuestionIndex++; // Move to next question
   if (currentQuestionIndex < questions.length) {
       showQuestion(); // Show next question
   } else {
       showScore(); // Show final score when quiz ends
   }
}

// Event listener for next button click
nextbtn.addEventListener('click', () => {
   if (currentQuestionIndex < questions.length) {
       handleNextButton(); // Move to next question
   } else {
       startQuiz(); // Restart quiz if all questions are answered
   }
});

// Start the quiz when the script loads
startQuiz();
