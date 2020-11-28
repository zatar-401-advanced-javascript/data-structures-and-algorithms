'use strict';

function repeatedWord(string){
  const arr = string.split(/[\s,]+/);
  let words = [];

  for(let i = 0; i < arr.length;i++){
    let word = arr[i].toLowerCase();
    const check = words.includes(word);
    if(check){
      console.log(word);
      return word;
    }else{
      words.push(word);
    }
  }
  return 'No repeted words';
}

// function repeatedWord(string){
//   const arr = string.split(/[\s,]+/);
//   let max = {value:'none',counter:0};

//   arr.forEach((word) =>{
//     word = word.toLowerCase();
//     let count = 0;

//     arr.forEach((item) =>{

//       item = item.toLowerCase();
//       if(item == word){
//         count++;
//       }
//     });

//     if(count>max.counter){
//       max={value:word,counter:count};
//     }

//   });
//   return max;
// }

repeatedWord('Once upon a time, there was a brave princess who...');
repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');
// repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');

module.exports = repeatedWord;