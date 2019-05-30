const game = require('../game') // this is the line to adspare

// test('test setup working', () => {
//   expect(true).toBeTruthy()
// })

const frames = [[0, 1],[1, 1],[0, 1],[0, 1],[0, 1],[0, 1],[1, 9],[0, 10],[3, 5],[4, 4]] 
 

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
  const frame = [3 , 7]
  const nextFrame = [2 , 0]
  const expected = 12
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10 , 0]
  const nextFrame = [3 , 4]
  const expected = 17
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10 , 0]
  const nextFrame = [10 , 0]
  const expected = 30
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})