
export class Question {
    text: string;
    options: string[];
    correctOption: number;

    constructor(text: string, options: string[], correctOption: number) {
        this.text = text;
        this.options = options;
        this.correctOption = correctOption;
    }

    isCorrect(option: number): boolean {
        return option === this.correctOption;
    }
}
