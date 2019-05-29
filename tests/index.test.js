const game = require('../game')

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
  const frame = [4, 6]
  const nextFrame = [1, 5]
  const expected = 11
  const actual = game.scoreSpare(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a spare frame with different results', () => {
  const frame = [5, 5]
  const nextFrame = [2, 3]
  const expected = 12
  const actual = game.scoreSpare(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [5, 2]
  const expected = 17
  const actual = game.scoreStrike(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame with different results', () => {
  const frame = [10, 0]
  const nextFrame = [8, 1]
  const expected = 19
  const actual = game.scoreStrike(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [1, 0]
  const expected = 21
  const actual = game.scoreDoubleStrike(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('checks if frames is a spare', () => {
  const frameIsSpare = [3, 7]
  const frameNotSpare = [10, 0]
  const expected = [true, false]
  const actual = [game.isSpare(frameIsSpare), game.isSpare(frameNotSpare)]
  expect(actual).toEqual(expected)
})

test('checks if frame is a strike', () => {
  const frameIsStrike = [10, 0]
  const frameNotStrike = [5, 5]
  const expected = [true, false]
  const actual = [game.isStrike(frameIsStrike), game.isStrike(frameNotStrike)]
  expect(actual).toEqual(expected)
})