import React from 'react'

function Card({name, nickname, img}) {
  return (
    <div style={{border: '3px solid', borderRadius: '1em', borderColor: 'blue'}}>
      <h1>{name}</h1>
      <h2>{nickname}</h2>
      <img width='250px' src={img}/>
    </div>
  )
}

export default Card