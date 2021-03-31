import React from 'react'
import PrimeraApp from '../PrimeraApp'
import { render } from '@testing-library/react'

describe('Testing <PrimeraApp />', function () {
  test('Should be show the next message: "Hola, soy Alex"', () => {
    const saludo = 'Hola, soy Alex'
    const { getByText } = render(<PrimeraApp saludo={saludo}/>)
    // wrapper.getByText()
    expect(getByText(saludo)).toBeInTheDocument()
  })
})