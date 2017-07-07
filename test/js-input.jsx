import babelCore from 'babel-core';

class AnswersGiver {
    question = 'The answer to the ultimate question of life, the universe and everything is';

    getAnswer() {
        return `${this.question} 42`;
    }
}

const giver = new AnswersGiver();

console.log(giver.getAnswer()); // eslint-disable-line no-console
console.log(babelCore.version); // eslint-disable-line no-console
