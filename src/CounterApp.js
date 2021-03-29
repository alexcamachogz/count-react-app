import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1)
    // setCounter((n) => n + 1)
  }

  // handleSub
  const handleSub = () => {
    setCounter(counter - 1)
  }

  // handleReset
  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>🔢 CounterApp</h1>
      <br />
      <button onClick={handleSub}>➖</button>
      {counter}
      <button onClick={handleAdd}>➕</button>
      <button className='reset' onClick={handleReset}>🚫</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp
