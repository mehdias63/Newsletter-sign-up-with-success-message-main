import React from 'react'

export default function List({text}) {
  return (
    <div className='flex gap-4'>
        <img src='/images/icon-list.svg'/>
        <p>{text}</p>
    </div>
  )
}
