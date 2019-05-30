const game = require('../game')

test('test setup working', () => {
    expect(true).toBeTruthy()
  })

  test('scores a gutterball frames', () => {
    const firstFrame = [0, 0]
    const expected = 0
    const actual = game.scoreFrame(firstFrame)
    expect(actual).toBe(expected)
  })
  
  test('scores a normal frames', () => {
      const firstFrame = [2, 3];
      const expected = 5;
      const actual = game.scoreFrame(firstFrame);
      expect(actual).toBe(expected)
  })

  test('scores a spare frames', () => {
      const firstFrame = [6, 4];
      const secondFrame = [5, 3];
      const expected = 15;
      const actual = game.spareFrame(firstFrame, secondFrame);

      expect(actual).toBe(expected)
})

test('scores a single strike frames', () => {
    const firstFrame = [10, 0];
    const secondFrame = [5, 3];
    const expected = 18;
    const actual = game.strikeFrame(firstFrame, secondFrame);

    expect(actual).toBe(expected)
})


test('scores a double strike frames', () => {
    const firstFrame = [10, 0];
    const secondFrame = [10, 0];
    const thirdFrame = [5, 3];
    const expected = 25;
    const actual = game.strikeFrame(firstFrame, secondFrame, thirdFrame);

    expect(actual).toBe(expected);
})

test('scores a game', () => {
    const frames = [[10, 0], [3, 4], [6, 3], [8, 1], [5, 4], [10, 0], [10, 0], [1, 6], [7, 2], [4, 1]];
    const expected = 110;
    const actual = game.scoreGame(frames);

    expect(actual).toBe(expected);
})

test('scores a spare in the 10th frames', () => {
    const frames = [[10, 0], [3, 4], [6, 3], [8, 1], [5, 4], [10, 0], [10, 0], [1, 6], [7, 2], [6, 4, 5]];

    const expected = 15;
    const actual = game.sumLastFrame(frames);

    expect(actual).toBe(expected);
}) 