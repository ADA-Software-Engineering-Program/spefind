import React from 'react'

const JoinCard =({title, detail})=> {
  return (
    <div className='mt-5'>
        <h5 className='text-start fw-semibold'>{title}</h5>
        <p className='text-start'>{detail}</p>
    </div>
  )
}

export default JoinCard