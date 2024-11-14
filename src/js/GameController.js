import { immerable } from 'immer';

const NUMBER_OF_CARDS = 10;

class GameController {
  [immerable] = true;

  constructor(championsData) {
    this.numberOfCards = NUMBER_OF_CARDS;
    this.allChampions = Object.values(championsData.data);
    this.champions = this.pickNewChampions();
    this.selectedChamps = [];
    this.bestScore = 0;
    this.score = 0;
    this.feedback = null;
    this.gameId = 0;
  }

  newGame() {
    this.champions = this.pickNewChampions();
    this.selectedChamps = [];
    this.bestScore = Math.max(this.score, this.bestScore);
    this.score = 0;
    this.feedback = null;
    this.gameId++;
  }

  pickNewChampions() {
    const newChampions = [];

    while (newChampions.length < this.numberOfCards) {
      const index = Math.floor(Math.random() * this.allChampions.length);
      const champion = this.allChampions.at(index);

      if (!newChampions.includes(champion)) {
        newChampions.push(champion);
      }
    }

    return newChampions;
  }

  shuffle() {
    const array = [...this.champions];

    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * array.length);

      [array[i], array[j]] = [array[j], array[i]];
    }

    this.champions = array;
  }

  select(champion) {
    const { id, name, title } = champion;
    const feedback = { status: null, message: null };

    if (this.selectedChamps.includes(id)) {
      this.newGame();
      feedback.status = 'lose';
      feedback.message = `Oh no! you've already selected ${name}, ${title}`;
    } else {
      this.selectedChamps.push(id);
      this.score++;

      if (this.selectedChamps.length === this.numberOfCards) {
        this.newGame();
        feedback.status = 'win';
        feedback.message = `And last but not least ${name}, ${title}`;
      } else {
        this.shuffle();
        feedback.status = 'playing';
        feedback.message = `${name}, ${title}`;
      }
    }

    this.feedback = feedback;
  }
}

export default GameController;
