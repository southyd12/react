import React from 'react'
import { nanoid } from 'nanoid';
import Card from './Card';


function List({pets=[]}) {
  return (
    <>
      <h2>List of pets</h2>
      <ol>
        {pets.map(({name, nickname, img}) => (
          <li key={nanoid()}>My name is {name}. But you can call me {nickname}. This is me... <img width='180px' src={img}/></li>
        ))}
      </ol>
      <h2>Pet cards</h2>
      <ul>
        {pets.map((pet) => (<Card key={nanoid()} {...pet}/>))}
      </ul>
    </>
  );
}

export default List