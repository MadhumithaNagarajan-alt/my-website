import React from 'react'

export default function Button({text = "click", onClick}) {
  return (
    <div onClick={onClick}><button >{text} </button></div>
  )
}
