import React from 'react';

const Word = ({word, index}) => {
  return ( 
    <div className="word">
        <p>Słowo numer <span>{index + 1}</span>:</p>
        <p>Po angielsku: <span>{word.en}</span></p>
        <p>Po polsku: <span>{word.pl}</span></p>
      </div>
   );
}
 
export default Word;