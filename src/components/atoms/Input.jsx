import React from 'react'

export default function Input({type,value,name}) {
  return (
    <div class="col">
    <input
    type={type}
    value={value}
    name={name}

    />
    </div>
  )
}
