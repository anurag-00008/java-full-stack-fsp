import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { use } from 'react'
function Register({setState}) {
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
        <h2 className='text-secondary'>REGISTER FORM</h2>
        <input type='text' className='form-control' placeholder='ENTER YOUR USERNAME'></input>
        <input type='text' className='form-control' placeholder='ENTER YOUR PASSWORD'></input>
        <input type='text' className='form-control' placeholder='ENTER YOUR NAME'></input>
        <button type='text' className='btn btn-outline-secondary' onClick={()=>{
            setState(true);
        }}>REGISTER</button>
    </div>
  )
}

export default Register