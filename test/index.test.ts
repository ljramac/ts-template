import { greet } from '../src/index'

test('greet function should return correct greeting message', () => {
  const message = greet()
  expect(message).toBe('Hello World from ts-template')
})
