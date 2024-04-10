import React from 'react'

export default function List({text}) {
  return (
    <div className='flex gap-4 mb-3'>
        <img src='/images/icon-list.svg' alt="icon-list"/>
        <p className="text-base leading-normal">{text}</p>
    </div>
  )
}
