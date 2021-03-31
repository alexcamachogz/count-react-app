import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Testing 05-funciones.js', () => {
  test('getUser should be return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser()

    expect(user).toEqual(userTest)
  })
  test('getUsuarioActivo should be return an object', () => {
    const name = 'Alex'
    const userActiveTest = {
      uid: 'ABC567',
      username: name
    }
    const userActive = getUsuarioActivo(name)

    expect(userActive).toEqual(userActiveTest)
  })
})
