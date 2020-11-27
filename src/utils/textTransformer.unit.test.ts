import {
  cleanAndCapitalize,
  cleanString,
  capitalizeString,
} from './textTransformer'

describe('textTransformer', (): void => {
  describe('capitalizeString', (): void => {
    it('should capitalize the first letter of each word in a string', (): void => {
      expect(capitalizeString('hello world')).toEqual('Hello World')
    })
  })

  describe('cleanString', (): void => {
    it('should replace underscores with spaces', (): void => {
      expect(cleanString('hello_world')).toEqual('hello world')
    })
  })

  describe('cleanAndCapitalize', (): void => {
    it('should compose the previous functions into 1', (): void => {
      expect(cleanAndCapitalize('hello_world')).toEqual('Hello World')
    })
  })
})
