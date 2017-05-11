'use strict';
var exports = module.exports = {};
exports.StringSplosion = class StringSplosion {
  constructor(word){
    this.word = word;
  }
   manipulate(word){
    
    let validWord = "";
    for (let i =0; i < this.word.length; i++){
      validWord = validWord + this.word.substring(0,i+1);
    }
    return  validWord;


  }

}
