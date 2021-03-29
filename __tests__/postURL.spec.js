import { postURL } from '../src/client/js/postURL'

describe("Post function checker", () => {
  test("This test should check if function postURL exists", () => {
    expect(postURL).toBeDefined()
  })
})
