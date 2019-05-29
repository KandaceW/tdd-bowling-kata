const game = require('../index')

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
  const nextFrame = [2, 4]
  const expected = 12
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [6, 2]
  const expected = 18
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [3, 4]
  const expected = 23
  const actual = game.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a simple game', () => {
  const frames = [
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],
    [3, 4],]
  const expected = 70
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('scores a game with a strike', () => {
  const frames = [
    [3, 4], //7
    [10, 0], //17
    [3, 4]] //7

  const expected = 31
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})

