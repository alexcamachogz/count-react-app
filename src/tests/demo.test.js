describe('Pruebas en el archivo demo.test.js', () => {
  test('Strings should be equal', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo'
    // 2. Estímulo
    const mensaje2 = `Hola Mundo`
    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2)
  })
})
