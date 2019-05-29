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