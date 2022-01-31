import { greet } from './greet.js'
//greet is choosable name that you know you test greet
describe('greet', () => {
  it('returns "Hello Jane!" if called with greet("Jane")', () => {
    const result = greet('Jane')
    console.log(result)
    //call expect with result to 'Hello Jane!'
    expect(result).toBe('Hello Jane!')
  })

  it('returns "Hello stranger!" if called greet()', () => {
    const result = greet()
    expect(result).toBe('Hello stranger!')
  })

  it('returns "Hello coach!" if called greet()', () => {
    const result1 = greet('Jerry')
    const result2 = greet('Mareike')
    const result3 = greet('Paul')
    expect(result1).toBe('Hello coach!')
    expect(result2).toBe('Hello coach!')
    expect(result3).toBe('Hello coach!')
  })
})
