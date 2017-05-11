'use strict';
var exports = module.exports = {};
exports.StringSplosion = class StringSplosion {
  constructor(word){
    this.word = word;
  }
   manipulate(word){
    let newWordLength = (this.word.length * (this.word.length +1)) / 2;
    let validWord = "";
    let newWord = new Array(newWordLength)
    let index = 0;
    for(let i = 0; i < this.word.length; i++){
      for (let j = 0; j <= i; j++){
        newWord[index] = this.word.charAt(j);
        index++;
      }
    }
    for(let i = 0; i < newWord.length; i++){
      validWord = validWord + newWord[i];
    }
    return validWord;

  }

}
