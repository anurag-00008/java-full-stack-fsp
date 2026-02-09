import React from 'react'
import C from './C'
import { useState } from 'react'
function B({ name }) {
  return (
    <div><h2>
        WELCOME TO B COMPONENT</h2>
        <C name={name} />
        </div>
  )
}

export default B