import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Testing 02-template-string.js', () => {
  test('Testing getSaludo method', () => {
    const nombre = 'Alex'
    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })
  // Tarea: getNombre debe de retornar Mariana si no hay hargumento de nombre
  test('Testing getSaludo default responde', () => {
    const saludo = getSaludo()
    expect(saludo).toBe('Hola Mariana')
  })
})
