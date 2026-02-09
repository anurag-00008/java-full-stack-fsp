import React, { useState } from 'react'
import B from './B'

function A() {
  const [name, setName] = useState("")

  const populateData = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h2>WELCOME TO A COMPONENT</h2>

      <input
        type="text"
        placeholder="ENTER YOUR NAME"
        onChange={populateData}
      />
      <B name={name} />
    </div>
  )
}
export default A
