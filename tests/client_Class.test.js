jest.mock('../database/client/client_Functions')
const Client = require('../database/client/client_Class')

describe('Client functions ', () => {
  test('validate method returns true', () => {
    const client = new Client({
      name: "Clark Gable",
      gender: "M",
      birthday: "05/03/1996",
      age: 5,
      city: "Rotterdam"
    })

    expect(client.validate()).toBe(true)
  })

  test('create client was successful', async () => {
    const client = new Client({
      name: "Clark Gable",
      gender: "M",
      birthday: "05/03/1996",
      age: 5,
      city: "Rotterdam"
    })

    await client.create()

    expect(client.id).toBe(100)
    expect(client.creationDate).toBe("23/03/2021")
    expect(client.updateDate).toBe("23/03/2021")
    expect(client.version).toBe(0)
  })
})