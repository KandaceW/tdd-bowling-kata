const game = require('../game')

test('test setup working', () => {
    expect(true). toBeTruthy()
})

test ('scores a gutterball frame', () => {
    const frame = [0, 0]
    const expected = 0
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test ('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test ('scores a spare frame', () => {
    const frame = [3, 7]
    const nextFrame = [1, 3]
    const expected = 11
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test ('scores a strike frame', () => {
    const frame = [10, 0]
    const nextFrame = [8,1]
    const expected = 19
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test ('score a double strike', () => {
    const frames = [[10, 0], [10, 0], [6, 1]]
    const expected = 27
    const actual = game.doubleStrike(frames)
    expect(actual).toBe(expected)
})

test ('scores a game', () => {
    const frames = [[2, 3], [4, 5], [7, 2], [10, 0], [9, 0], [6, 3], [3, 1], [1, 1], [6, 4], [7, 3,63]]
    const expected = 98
    const actual = game.addGame(frames)
    expect(actual).toBe(expected)
})


