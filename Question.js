class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices.sort((a, b) => 0.5 - Math.random());
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
