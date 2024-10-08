// This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
// First character of next word must match last character of previous word.
// The word must not have already been said.
// Below is an example of a Shiritori game:
// ["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
// ["motive", "beach"]; // invalid! - beach should start with "e"
// ["hive", "eh", "hive"]; // invalid! - "hive" has already been said



// Methods:

// restart: a method that sets the words array to an empty one [] and sets the game_over boolean to
// false. It should return "game restarted".
// myShiritori = new Shiritory();
// myShiritori.play("apple"); // ["apple"]
// myShiritori.play("ear"); // ["apple", "ear"]
// myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
// myShiritori.play("corn"); // "game over"
// // Corn does not start with an "o".
// myShiritori.words; // ["apple", "ear", "rhino"]
// // Words should be accessible.
// myShiritori.restart(); // "game restarted"
// myShiritori.words; // []

// // Words array should be set back to empty.
// myShiritori.play("hostess"); // ["hostess"]
// myShiritori.play("stash"); // ["hostess", "stash"]
// myShiritori.play("hostess"); // "game over"

// Write a Shiritori class that has two instance properties:
// words: an array of words already said.
// game_over: a boolean that is true if the game is over.
class Shiritoni{
    constructor(words,game_over){
        this.words=[];
        this.game_over=false;
    }
}

// play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules
// #1 and #2 above).
// If it is valid, it adds the word to the words array, and returns the words array.
// If it is invalid (eitherrule is broken), itreturns "game over" and sets the game_over boolean to
// true.
function hasRules(w){
    let wordLength=w.length;
    const wordArr=this.words;
    for(char of wordArr){
        if (w[wordLength]===w[0]){}

    }
}
Shiritoni.prototype.play=function(wrd){
    words(){
        this.wordArr=[];
    }


}