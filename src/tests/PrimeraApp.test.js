import React from 'react'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'

describe('Testing <PrimeraApp />', function () {
  // test('Should be show the next message: "Hola, soy Alex"', () => {
  //   const saludo = 'Hola, soy Alex'
  //   const { getByText } = render(<PrimeraApp saludo={saludo}/>)
  //   expect(getByText(saludo)).toBeInTheDocument()
  // })
  test('Should be show <PrimeraApp /> properly', () => {
    const saludo = 'Hola, soy Alex'
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
    expect(wrapper).toMatchSnapshot()
  })
  test('Should be show the subtitle send by props', () => {
    const saludo = 'Hola, soy Alex'
    const subs = 'Mi primera app en React ⚛️'
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subs}/>)
    const textoParrafo = wrapper.find('p').text()
    expect(textoParrafo).toBe(subs)
  })
})