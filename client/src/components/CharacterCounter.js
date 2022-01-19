import React from 'react';

const CharacterCounter = (TextField) => (props) => (
  <div>
    <TextField {...props} />
    <small>Character count: {props.value.length}</small>
  </div>
);

export default CharacterCounter;
