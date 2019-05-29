module.exports = {
  scoreFrame: scoreFrame,
  scoreNormalFrame: scoreNormalFrame,
  scoreSpareFrame: scoreSpareFrame,
}

function scoreFrame(frame, nextFrame) {

  ballOne = frame[0];
  ballTwo = frame[1];

  if ((ballOne + ballTwo) < 10)
    return scoreNormalFrame(frame)

  else if ((ballOne + ballTwo) === 10)
    return scoreSpareFrame(frame, nextFrame)
}

function scoreNormalFrame(frame) {

  return ballOne + ballTwo
}
function scoreSpareFrame(frame, nextFrame) {
  return ballOne + ballTwo + nextFrame[1]
}
