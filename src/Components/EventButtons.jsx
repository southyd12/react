import React, {useState} from 'react'

function EventButtons() {
  const [value, setter] = useState(10)
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setter(value + 1)}>+</button>
      <button onClick={() => setter(value - 1)}>-</button>
    </div>
  )
}

export default EventButtons