import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('Testing promises', function () {
  test('Should be return a hero async', function (done) {
    const id = 1
    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toBe(heroes[0])
      done()
    })
  })
  test('Should be return error if hero does not exist', function (done) {
    const id = 10
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe')
      done()
    })
  })
})