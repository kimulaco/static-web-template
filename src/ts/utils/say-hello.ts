export const sayHello = (name?: string): string => {
  if (name) {
    return `Hello ${name}!`
  }
  return 'Hello!'
}
