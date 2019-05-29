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
      const frame = [2, 3];
      const expected = 5;
      const actual = game.scoreFrame(frame);
      expect(actual).toBe(expected)
  })

  test('scores a spare frame', () => {
      const frame1 = [6, 4];
      const frame2 = [5, 3];
      const expected = 15;
      const actual = game.scoreFrame(frame1, frame2);

      expect(actual).toBe(expected)
})