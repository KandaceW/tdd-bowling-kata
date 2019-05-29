module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreGame: scoreGame,
  strikeLastFrame: strikeLastFrame
}

function scoreFrame(frame) {
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame) {
  return frame[0] + frame[1] + nextFrame[0]
}

function scoreStrike(frame, nextFrame, thirdFrame) {
  var result = 10
  if (nextFrame[0] == 10) {
    result += 10 + thirdFrame[0]
  } else {
    result += scoreFrame(nextFrame)
  }
  return result
}

function strikeLastFrame(frame) {
  var total = 0
  for (var i = 0; i < frame.length; i++) {
    total += frame[i]
  }
  return total
}

function scoreGame(fullFrames) {
  var result = 0
  for (var i = 0; i < fullFrames.length; i++) {
    var nextFrame = fullFrames[i + 1]
    var thirdFrame = fullFrames[i + 2]
    var currentFrame = fullFrames[i]
    // console.log(fullFrames[i], scoreFrame(fullFrames[i]))
    if (currentFrame[0] == 10 && i < 9) {
      result += scoreStrike(currentFrame, nextFrame, thirdFrame)
    } else if (currentFrame[0] + currentFrame[1] == 10 && i < 9) {
      result += scoreSpare(currentFrame, nextFrame)
    } else if (currentFrame[0] == 10 && i == 9) {
      result += strikeLastFrame(currentFrame)
    } else {
      result += scoreFrame(currentFrame)
    }
  }
  return result
}