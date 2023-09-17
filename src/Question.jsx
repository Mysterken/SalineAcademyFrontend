import React from 'react';

function Question({ question }) {
  return (
    <div>
      <h1>Question : {question.texte}</h1>
    </div>
  );
}

export default Question;
