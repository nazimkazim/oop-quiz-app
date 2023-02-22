class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.questionIndex = 0;
    }
  
    getQuestionIndex() {
      return this.questions[this.questionIndex];
    }
  
    guess(answer) {
      if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
      }
  
      this.questionIndex++;
    }
  
    isEnded() {
      return this.questionIndex === this.questions.length;
    }
  }