const game = require('../game');

test('Scores a gutterball - rookie', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})
test('')