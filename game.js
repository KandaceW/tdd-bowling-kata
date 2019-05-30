module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  isSpare: isSpare,
  isStrike: isStrike,
  scoreGame: scoreGame
}

function scoreFrame(frame) {
  // var frameScore = 0
  // frame.forEach(ball => frameScore += ball)
  // return frameScore
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame) {
  return frame[0] + frame[1] + nextFrame[0]
}

function scoreStrike(frame, nextFrame) {
  return scoreFrame(frame) + nextFrame[0] + nextFrame[1]
}

function scoreDoubleStrike(frame, nextFrame, thirdFrame) {
  return scoreFrame(frame) + nextFrame[0] + nextFrame[1] + thirdFrame[0]
}

function isSpare(frame) {
  if (scoreFrame(frame) === 10 && frame[0] !== 10) {
    return true
  } else {
    return false
  }
}

function isStrike(frame) {
  return (frame[0] === 10 ? true : false)
}

function isDoubleStrike(frame, nextFrame) { console.log(frame, nextFrame)
  // console.log((frame[0] === 10 && nextFrame[0] === 10 ? true : false))
  // return (frame[0] === 10 && nextFrame[0] === 10 ? true : false)
  if (frame[0] === 10 && nextFrame[0] === 10) {
    console.log('true')
    return true
  } else {
    return false
  }
}

function scoreGame(frames) {

  var gameScore = 0

  for (var i = 0; i < frames.length; i++) {

    var frame = frames[i]

    if (frames[i + 1]) { var nextFrame = frames[i + 1] }
    if (frames[i + 2]) { var thirdFrame = frames[i + 2] }

    if (isDoubleStrike(frame, nextFrame, thirdFrame)) {
      
      gameScore += scoreDoubleStrike(frame, nextFrame, thirdFrame)
      console.log('DOUBLE STRIKE', gameScore)

    } else if (isStrike(frame)) {
      
      gameScore += scoreStrike(frame, nextFrame)
      console.log('STRIKE', gameScore)

    } else if (isSpare(frame)) {
      
      gameScore += scoreSpare(frame, nextFrame, thirdFrame)
      console.log('SPARE', gameScore)
    } else {

      gameScore += scoreFrame(frame)

    }

  }

  console.log('Congrats, you scored:', gameScore)
  return gameScore
}