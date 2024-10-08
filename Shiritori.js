class Shiritoni {
  constructor(words, game_over) {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    let wordLenght=this.word;
    if (this.game_over) {
      return "game over";
    }

    if (this.words.includes(word)) {
      this.game_over = true;
      return "game over";
    }

    if (this.words.length > 0) {
      let lastWord = this.words[this.words.length - 1];
      if (word[0] !== lastWord[lastWord.length - 1]) {
        this.game_over = true;
        return "game over";
      }
    }
    this.words.push(word);
    return this.words;
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

let game = new Shiritoni();

console.log(game.play("apple"));
console.log(game.play("ear"));
console.log(game.play("rhino"));
console.log(game.play("corn")); 
console.log(game.words);
console.log(game.restart());
console.log(game.words);
