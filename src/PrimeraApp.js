import React from 'react'
// import React, { Fragment } from 'react'

// Functional Components
const PrimeraApp = ({ saludo = 'Hola Mundo' }) => {
  const name = 'Alex Camacho'

  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera app</p>
      <p>
        Desarrollado por: <small>{name}</small>
      </p>
    </>
  )
}

export default PrimeraApp
