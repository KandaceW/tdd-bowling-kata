module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare
}

function scoreFrame(frame) {
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame) {
  return frame[0] + frame[1] + nextFrame[0]
}