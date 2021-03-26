jest.mock('../database/city/city_Functions')
const City = require('../database/city/city_Class')

describe('City class ', () => {
  test('validate method returns true', () => {
    const city = new City({
      name: "Renton",
      state: "Washington"
    })

    expect(city.validate()).toBe(true)
  })

  test('create city was successful', async () => {
    const city = new City({
      name: "Renton",
      state: "Washington"
    })

    await city.create()

    expect(city.id).toBe(100)
    expect(city.creationDate).toBe("23/03/2021")
    expect(city.updateDate).toBe("23/03/2021")
    expect(city.version).toBe(0)
  })
})