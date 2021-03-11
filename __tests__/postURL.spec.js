const supertest = require('supertest')
const app = require('../src/server/index.js')
const request = supertest(app)

import { postURL } from '../src/client/js/postURL'

describe("Post function checker", () => {
  test("Testing if the function will create a new post", async () => {
    //const res = await request(app)
    const response = await request
    //.postURL('/mock', {input: test})
    console.log(response)
    //console.log(postURL('/mockapi', {input: test}))

    expect(response.statusCode).toEqual(201)
  })
})
