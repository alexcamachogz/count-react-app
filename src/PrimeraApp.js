import React from 'react'
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react'

// Functional Components
const PrimeraApp = ({ saludo, subtitulo }) => {
  const name = 'Alex Camacho'

  return (
    <>
      <h1> {saludo} </h1>
      <p>{subtitulo}</p>
      <p>
        Desarrollado por: <small>{name}</small>
      </p>
    </>
  )
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'Mi primera app en React ⚛️',
}

export default PrimeraApp
