//question1 ="What does 'CDN' stand for?";
//question2 ="What does 'DOM' stand for?";
//question3 ="What does 'HTML' stand for?";

var question1 = {
    title: "what does 'CDN' stand for?",
    answers: ["Content Delivery Network", "Can't Denote Network","Character Design Notebook", "Cats Dogs Nothing"],
    correctAnswer: 0
};

var question2 = {
    title: "What does 'DOM' stand for",
    answers: ["Document On Main","Document Object Model","Double Object Manipulation","Dogs On Moms"],
    correctAnswer: 1
};

var question3 = {
    title: "What does 'HTML' stand for?",
    answers: ["Huge Time Many Language","How Text Makes Language","Hot Turtles Making Lemonaide","Hyper Text Markup Language"],
    correctAnswer: 3
};

function showQuestion() {

    var titleDiv = document.getElementById("title");
titleDiv.textContent = question1.title;

  var answ = document.querySelectorAll(".answers")
  answ.forEach(function(element,index){
      element.textContent = question1.answers[index];

      element.addEventListener("click",function(){
          if(question1.correctAnswer == index) {
              console.log("correct answer");
          }
          else {
              console.log("wrong answer");
          }
      });
  });
}

showQuestion(question1);

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("clicked");
});
