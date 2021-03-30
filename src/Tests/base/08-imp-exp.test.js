import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Testing on Heroes functions', function () {

  test('Should be return an hero by ID', function () {
    const id = 1
    const hero = getHeroeById(id)
    const heroData = heroes.find(h => h.id === id)

    expect(hero).toEqual(heroData)
  })

  test('Should be return undefined if hero does not exist', function () {
    const id = 10
    const hero = getHeroeById(id)
    const heroData = heroes.find(h => h.id === id)

    expect(hero).toBe(undefined)
  })

  test('Should be return an array with all DC heroes', function () {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    const heroesData = heroes.filter(h => h.owner === owner)
    expect(heroes).toEqual(heroesData)
  })

  test('Should be return an array with all Marvel heroes', function () {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)
    expect(heroes.length).toBe(2)
  })

  test('Should be return 0 if hero owner is not Marvel or DC',
    function () {
      const owner = ''
      const heroes = getHeroesByOwner(owner)
      expect(heroes.length).toBe(0)
    })
})