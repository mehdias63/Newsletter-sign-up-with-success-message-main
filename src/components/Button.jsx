import React from 'react'

export default function Button({text,className}) {
  return (
        <button className={`w-full px-7 py-3 sm:px-10 cursor-pointer bg-dark-blue text-white mt-6 text-base font-bold leading-6 gradient1 ${className}`}>{text}</button>
    
  )
}