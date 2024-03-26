import React from 'react'

export default function Btn () {
  const [val, setVal] = React.useState(0)
  return (
    <button onClick={() => {
        setVal(val + 1)
      }}>increment {val} </button>
  )
}
