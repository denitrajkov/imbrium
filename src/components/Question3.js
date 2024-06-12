
import React, { useState } from 'react';
const initialAnimals = [
  { name: 'cow', sound: 'moo' },
  { name: 'dog', sound: 'woof' },
  { name: 'cat', sound: 'meow' },
  { name: 'pig', sound: 'oink' },
  { name: 'duck', sound: 'quack' }
];

const Verse = ({ animal }) => (
  <div>
    <p>Old MacDonald had a farm, E I E I O,</p>
    <p>And on his farm, he had a <b>{animal.name}</b>, E I E I O.</p>
    <p>With a <b>{animal.sound}</b> <b>{animal.sound}</b> here and a <b>{animal.sound}</b> <b>{animal.sound}</b> there,</p>
    <p>Here a <b>{animal.sound}</b>, there a <b>{animal.sound}</b>, everywhere a <b>{animal.sound}</b> <b>{animal.sound}</b>.</p>
    <p>Old MacDonald had a farm, E I E I O.</p>
  </div>
);
function Question3() {
   const [animals, setAnimals] = useState(initialAnimals);
  const [name, setName] = useState('');
  const [sound, setSound] = useState('');

  const addAnimal = (e) => {
    e.preventDefault();
    if (name && sound) {
      setAnimals([...animals, { name, sound }]);
      setName('');
      setSound('');
    }
  };

  return (
    <div>
      {animals.map((animal, index) => (
        <Verse key={index} animal={animal} />
      ))}
      <form onSubmit={addAnimal}>
        <input
          type="text"
          placeholder="Animal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sound"
          value={sound}
          onChange={(e) => setSound(e.target.value)}
        />
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}

export default Question3