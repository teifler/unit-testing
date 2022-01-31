//default parameter stranger if no name set
export function greet(name = 'stranger') {
  if (name === 'Jerry' || name === 'Mareike' || name === 'Paul') {
    return 'Hello coach!'
  }
  return `Hello ${name}!`
}
