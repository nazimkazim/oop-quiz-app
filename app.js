document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Add sound effect on hover for all choice buttons
    const hoverSound = document.getElementById("sound-effect");
    const choiceButtons = document.querySelectorAll(".choice-button");
    const score = document.getElementById("score");

    const firework = new FireWork(100, 100);

    firework.animate();


    choiceButtons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    });

    var questions = [
      new Question(
        "What is the capital of India?",
        ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        "New Delhi"
      ),
      new Question(
        "What is the capital of Pakistan?",
        ["Islamabad", "Karachi", "Lahore", "Peshawar"],
        "Islamabad"
      ),
      new Question(
        "What is the capital of Bangladesh?",
        ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
        "Dhaka"
      ),
      new Question(
        "What is the capital of Nepal?",
        ["Kathmandu", "Pokhara", "Biratnagar", "Birgunj"],
        "Kathmandu"
      ),
      new Question(
        "What is the capital of Bhutan?",
        ["Thimphu", "Paro", "Punakha", "Phuntsholing"],
        "Thimphu"
      ),
      new Question(
        "What is the capital of Sri Lanka?",
        ["Colombo", "Kandy", "Galle", "Jaffna"],
        "Colombo"
      ),
    ];

    var quiz = new Quiz(questions);

    score.innerHTML = `Score: ${quiz.score}`

    function populate() {
      if (quiz.isEnded()) {
        showScores();
        firework.createExplosion(50, 50);
      } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var letters = ["A", "B", "C", "D"];

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = `<span class=letter >${letters[i]}</span> ${choices[i]}`;
          guess("btn" + i, choices[i]);
        }
        showProgress();
      }
    }

    function guess(id, guess) {
      var button = document.getElementById(id);
      button.onclick = function () {
        quiz.guess(guess);
        populate();
        score.innerHTML = `Score: ${quiz.score}`;
      };
    }

    function showProgress() {
      var currentQuestionNumber = quiz.questionIndex + 1;
      var element = document.querySelector(".inner-progress");
      element.style.width =
        (currentQuestionNumber / questions.length) * 100 + "%";
    }

    function showScores() {
      var element = document.getElementById("quiz");
      element.innerHTML = "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    }

    populate();
  },
  false
);
