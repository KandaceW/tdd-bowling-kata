module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  isSpare: isSpare,
  isStrike: isStrike
}

function scoreFrame(frame) {
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame) {
  return frame[0] + frame[1] + nextFrame[0]
}

function scoreStrike(frame, nextFrame) {
  return scoreFrame(frame) + scoreFrame(nextFrame)
}

function scoreDoubleStrike(frame, nextFrame, thirdFrame){
  return scoreFrame(frame) + scoreFrame(nextFrame) + thirdFrame[0]
}

function isSpare(frame){
    if (scoreFrame(frame) === 10 && frame[0] !== 10) {
      return true
    } else {
      return false
    }
}

function isStrike(frame) {
  return (frame[0] === 10 ? true : false)
}