//const regeneratorRuntime = require("regenerator-runtime");

import { handleSubmit } from '../src/client/js/formHandler'
//import { postURL } from '../src/client/js/postURL'

describe("Form Submit checker", () => {
//  test("Testing if the function is executed on form submit", (handleSubmit(event.preventDefault())) => {
  test("Testing if the function is called on submit", () => {
     const onSubmit = jest.fn()
     console.log(onSubmit)
    //handleSubmit(onSubmit)
    //return expect(onSubmit).toBeCalled(postURL)
  //   const onSubmit = async (e) => {
  //   if (handleSubmit) {
  //     handleSubmit()
  //   }
  //   e.preventDefault();
  // }
  // return expect(onSubmit).toBeCalled(postURL)
})
})
