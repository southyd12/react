import { useState } from 'react'
import './App.css'
import List from './Components/List'
import EventButtons from './Components/EventButtons';

function App() {
  const petFacts = [
    {name: 'Teddy', 
     nickname: 'Teddmeister General', 
     img: '/src/Images/dog.jpeg'}, 
     {name: 'Dora', 
      nickname: 'Dora the explorer', 
      img: '/src/Images/cat.jpeg'}, 
     {name: 'Whisky', 
      nickname: 'and Soda', 
      img: '/src/Images/rabbit.jpeg'}
    ];

  return (
    <div className="App">
      <>
      <h1>My First React Homework</h1>
      <List pets={petFacts}/>
      <EventButtons/>
      </>
    </div>
  )
}

export default App
