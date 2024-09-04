import { Quiz } from './quiz';
import { Question } from './question';

const questions: Question[] = [
    new Question("What is the capital of France?", ["Paris", "Berlin", "Rome", "Madrid"], 0),
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], 1),
    new Question("What is the color of the sky?", ["Blue", "Green", "Red", "Yellow"], 0)
];

const quiz = new Quiz(questions);
quiz.start();

