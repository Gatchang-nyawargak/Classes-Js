class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year= year;
        this.isAvailable= isAvailable;
    }
    toggleAvailability(){
        this.isAvailable=this.isAvailable;
    }
}
const subaru=new Car("Audi", "A5", 2018,true);
console.log(subaru.isAvailable);
subaru.toggleAvailability();
console.log(subaru.isAvailable);

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
      const durationInMs = this.rentalEndDate - this.rentalStartDate;
      const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
      return durationInDays;
    }
  }
  const landcruiser = new Car("Subaru", "X5", 2009, true);
  const v8 = new Rental(landcruiser, "Chesh", new Date("2022-01-01"), new Date("2022-01-10"));
  console.log(v8.calculateRentalDuration());


//Question2
class Question {
    constructor(text, options, correctAnswer) {
       this.text = text;
       this.options = options;
       this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
       return userAnswer === this.correctAnswer;
    }
   }
   class Quiz {
    constructor() {
       this.questions = [];
       this.currentQuestionIndex = 0;
       this.score = 0;
    }
    addQuestion(question) {
       this.questions.push(question);
    }
    nextQuestion() {
       if (this.currentQuestionIndex < this.questions.length - 1) {
         this.currentQuestionIndex++;
       } else {
         console.log("You've reached the end of the quiz.");
       }
    }
    submitAnswer(userAnswer) {
       const currentQuestion = this.questions[this.currentQuestionIndex];
       if (currentQuestion.checkAnswer(userAnswer)) {
         this.score++;
         console.log("Correct!");
       } else {
         console.log("Incorrect.");
       }
       this.nextQuestion();
    }
   }
const question1 = new Question("What is the capital of France?", ["Paris", "London", "Berlin", "Madrid"], "Paris");
const question2 = new Question("What is the capital of Germany?", ["Paris", "London", "Berlin", "Madrid"], "Berlin");
const myQuiz = new Quiz();
myQuiz.addQuestion(question1);
myQuiz.addQuestion(question2);
myQuiz.submitAnswer("Paris");
myQuiz.submitAnswer("London");
myQuiz.nextQuestion();
myQuiz.submitAnswer("Berlin");
console.log(`Your final score is: ${myQuiz.score}`);