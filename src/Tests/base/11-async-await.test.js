import { getImagen } from '../../base/11-async-await'

describe('Testing async-await and fetch', function () {
  test('Should be return image URL', async () => {
    const url = await getImagen()

    expect(url.includes('https://')).toBe(true)
  })
})