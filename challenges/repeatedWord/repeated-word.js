'use strict';

function repeatedWord(string){
  const arr = string.split(' ');
  let max = {times:0,word:''};
  let firstRepetedFlag = false;
  
  arr.map((word)=>{
    word = word.toLowerCase();
    let counter = 0;
    arr.map((item)=>{
      item = item.toLowerCase();
      if((word == item) && (firstRepetedFlag == false)){
        counter++;
        if(counter == 2){
          firstRepetedFlag = true;
        }
      }
    });
    if(counter>max.times){
      max = {times:counter,word};
    }
  });
  console.log(max.word);
  return max.word;
}

repeatedWord('Once upon a time, there was a brave princess who...');
repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');
repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');

module.exports = repeatedWord;