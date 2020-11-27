import { pipe, compose } from './pipe_compose'

describe('pipe & compose', (): void => {
  function doubleNumber(value: number): number {
    return value * 2
  }
  function add10(value: number): number {
    return value + 10
  }

  describe('compose', (): void => {
    it('should "compose" multiple functions RTL', (): void => {
      expect(compose(doubleNumber, add10)(20)).toEqual(60)
    })
  })

  describe('pipe', (): void => {
    it('should "compose" multiple functions LTR', (): void => {
      expect(pipe(doubleNumber, add10)(20)).toEqual(50)
    })
  })
})
