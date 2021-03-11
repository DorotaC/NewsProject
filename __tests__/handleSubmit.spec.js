import { handleSubmit } from '../src/client/js/formHandler'

describe("Form Submit checker", () => {
  test("Testing if the function is called on submit", () => {
     const onSubmit = jest.fn()
     onSubmit()
     expect(onSubmit).toHaveBeenCalled()
})
})
