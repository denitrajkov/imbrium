import React from 'react'
const animals = [
  { name: 'cow', sound: 'moo' },
  { name: 'dog', sound: 'woof' },
  { name: 'cat', sound: 'meow' },
  { name: 'pig', sound: 'oink' },
  { name: 'duck', sound: 'quack' },
  { name: 'sheep', sound: 'baa' },
  { name: 'horse', sound: 'neigh' },
  { name: 'chicken', sound: 'cluck' },
  { name: 'goat', sound: 'bleat' },
  { name: 'turkey', sound: 'gobble' }
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
function Question2ExtendsAnother10Animals() {
  return (
     <div>
    {animals.map((animal, index) => (
      <Verse key={index} animal={animal} />
    ))}
  </div>
  )
}

export default Question2ExtendsAnother10Animals