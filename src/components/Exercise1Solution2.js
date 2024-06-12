// src/App.js
import React from 'react';

const animals = [
  { name: 'cow', sound: 'moo' },
  { name: 'dog', sound: 'woof' },
  { name: 'cat', sound: 'meow' },
  { name: 'pig', sound: 'oink' },
  { name: 'duck', sound: 'quack' }
];

const getVerse = (animal) => {
  const { name, sound } = animal;
  return (
    <div key={name}>
      <p>Old MacDonald had a farm, E I E I O,</p>
      <p>And on his farm, he had a <b>{name}</b>, E I E I O.</p>
      <p>With a <b>{sound}</b> <b>{sound}</b> here and a <b>{sound}</b> <b>{sound}</b> there,</p>
      <p>Here a <b>{sound}</b>, there a <b>{sound}</b>, everywhere a <b>{sound}</b> <b>{sound}</b>.</p>
      <p>Old MacDonald had a farm, E I E I O.</p>
    </div>
  );
};

const Exercise1Solution2 = () => (
  <div>
    {animals.map((animal) => getVerse(animal))}
  </div>
);

export default Exercise1Solution2;
