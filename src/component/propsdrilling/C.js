import React from 'react'
import D from './D'
import { useState } from 'react'
function C({ name }) {
  return (
    <div><h2>
        WELCOME TO C COMPONENT</h2>
        <D name={name} />
        </div>
  )
}

export default C