import { urlToAnalyze } from '../src/client/js/urlToAnalyze'

describe("URL checker", () => {
  test("it should check if the given string can be a URL (http/https)", () => {
    const input = [
       'http://bla-bla.com/',
       'HTTP://BLA-BLA.com/',
       // 'http://bla-bla.com/',
       // 'HTTPS://BLA-BLA.com/',
       // 'HYPS://BLA-BLA.com/',
       // 'other text'
    ]
    const output = [
      true,
      true,
      //true, true, false, false
    ]
    for (let i = 0; i < input.length; i++){
      expect(urlToAnalyze(input[i])).toEqual(output[i])
    }
  })
})
