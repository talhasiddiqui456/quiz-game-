import { Question } from './question';
import { Player } from './player';

export class Quiz {
    private questions: Question[];
    private player: Player;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.player = new Player();
    }

    start() {
        console.log("Welcome to the Quiz!");

        this.questions.forEach((question, index) => {
            console.log(`Question ${index + 1}: ${question.text}`);
            question.options.forEach((option, i) => {
                console.log(`${i + 1}: ${option}`);
            });

            let answer: number | null = null;
            while (answer === null || answer < 1 || answer > question.options.length) {
                answer = parseInt(prompt("Your answer: ") || "0");
            }

            if (question.isCorrect(answer - 1)) {
                console.log("Correct!");
                this.player.score++;
            } else {
                console.log(`Wrong! The correct answer was: ${question.options[question.correctOption]}`);
            }
            console.log("");
        });

        this.end();
    }

    end() {
        console.log(`Quiz Over! Your score: ${this.player.score}/${this.questions.length}`);
    }
}
