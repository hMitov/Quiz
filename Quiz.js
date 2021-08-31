const quizList = [{
    question: 'Which is the longest river on earth?',
    a: 'Nile',
    b: 'Amazon',
    c: 'Yangtze',
    d: 'Mississippi',
    correct: 'a'
  }, {
    question: 'What is the capital of Peru?',
    a: 'Damask',
    b: 'Mexico',
    c: 'Lima',
    d: 'Sucre',
    correct: 'c'
  }, {
    question: 'What is the largest desert in the world?',
    a: 'Arctic',
    b: 'Gobi',
    c: 'Sahara',
    d: 'Antarctic',
    correct: 'd'
  }, {
    question: 'To the nearest billion, how large is the world’s population?',
    a: '7 000 000 000',
    b: '8 000 000 000',
    c: '6 000 000 000',
    d: '5 000 000 000',
    correct: 'b'
  }];


let counter = 0;
let score = 0;

const question = document.querySelector("#question");
const a1 = document.querySelector('#a-answer');
const a2 = document.querySelector('#b-answer');
const a3 = document.querySelector('#c-answer');
const a4 = document.querySelector('#d-answer');
const numOfQuestion = document.querySelector('#numOfQuestion');
const submitBtn = document.querySelector('#submit');

const firstPart = document.querySelector('.first-part');
const secondPart = document.querySelector('.second-part');

var radios = document.getElementsByName('answers');

const inputs = document.querySelectorAll('input');
const lables = document.querySelectorAll('label');

inputs.forEach(function(input){console.log(input);});
lables.forEach(function(lable){console.log(lable);});

function uncheckBtns() {
  radios.forEach(function(item) {
    item.checked = false;
  });
}


function getQuestion() {
  const currQuestion = quizList[counter];
  question.innerHTML = currQuestion.question;
  a1.innerHTML = currQuestion.a;
  a2.innerHTML = currQuestion.b;
  a3.innerHTML = currQuestion.c;
  a4.innerHTML = currQuestion.d;
  numOfQuestion.innerHTML = counter + 1;
  uncheckBtns();
}


function markedAnswer() {
  for (var i = 0; i<radios.length; i++) {
    if (radios[i].checked) {
      return radios[i];
    }
  }
}

function checkIfEmpty() {
  for (var i = 0; i<radios.length; i++) {
    if (radios[i].checked) {
      return false;
    }
  }
  return true;
}


function checkAnswers(num) {
  let markedAns = markedAnswer();
  return (markedAns.id == quizList[num].correct);
}

function scoreDisplay() {
  question.display = 'none';
  inputs.forEach(function(input){input.style.display = 'none';});
  lables.forEach(function(lable){lable.style.display = 'none';});
  submitBtn.style.display = 'none';
  firstPart.innerHTML
  secondPart.style.display = 'none';
  firstPart.innerHTML = '<h2>Score:' + '<h3>' + score + '</h3></h2>' + '<h2>Max Score: 8</h2>';
}


getQuestion();

submitBtn.addEventListener('click', function() {
  if(checkIfEmpty()) {
    alert('Please choose an answer!');
  } else if(counter < quizList.length) {
    if(checkAnswers(counter) == true) {
      score +=2;
      counter ++;
      if(counter < quizList.length) {
        getQuestion();
      } if(counter == quizList.length) {
        alert('Quiz finished!');
        scoreDisplay();
      }
    } else {
      alert('Incorrect answer!')
      uncheckBtns();
      score --;
    }
  }
});
