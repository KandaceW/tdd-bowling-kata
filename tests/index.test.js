const game = require('../game');

test('Scores a gutterball - rookie', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('Score Normal frame', () => {
  const frame = [1, 7]
  const expected = 8
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('Score a spare', () => {
  const frame = [6, 4]
  const nextFrame = [3, 2]
  const expected = 13
  const actual = game.scoreSpare(frame, nextFrame)
  expect(actual).toBe(expected)

})

test('Score a single Strike', () => {
  const frame = [10, 0]
  const nextFrame = [8, 1]
  const expected = 19
  const actual = game.scoreStrike(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('Score a double Strike', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [8, 1]
  const expected = 28
  const actual = game.scoreStrike(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('score a game', () => {
  const fullFrames = [
    [9, 1],
    [1, 4],
    [3, 2],
    [0, 6],
    [4, 3],
    [0, 0],
    [3, 7],
    [4, 5],
    [1, 6],
    [8, 0],
  ]
  const expected = 72
  const actual = game.scoreGame(fullFrames)
  expect(actual).toBe(expected)
})

test('score a game with strikes in last frame', () => {
  const fullFrames = [
    [9, 1],
    [1, 4],
    [3, 2],
    [0, 6],
    [4, 3],
    [0, 0],
    [3, 7],
    [4, 5],
    [1, 6],
    [10, 10, 10],

  ]
  const expected = 94
  const actual = game.scoreGame(fullFrames)
  expect(actual).toBe(expected)
})