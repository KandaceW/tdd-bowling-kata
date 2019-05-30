const game = require('../game') // this is the line to add

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [6, 4]
  const nextFrame = [5, 3]
  const expected = 15
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [6, 4]
  const nextFrame = [5, 3]
  const strikeFrame = [10, 0]
  const expected = 18
  const actual = game.scoreFrame(strikeFrame, nextFrame)
  expect(actual).toBe(expected)
})