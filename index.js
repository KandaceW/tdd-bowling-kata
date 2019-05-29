module.exports = {
  scoreFrame: scoreFrame,
  scoreNormalFrame: scoreNormalFrame,
  scoreSpareFrame: scoreSpareFrame,
  scoreSingleStrike: scoreSingleStrike,
}

function scoreFrame(frame, nextFrame) {

  ballOne = frame[0];
  ballTwo = frame[1];

  if ((ballOne + ballTwo) < 10)
    return scoreNormalFrame(frame)

  else if ((ballOne + ballTwo) === 10 && ballOne !== 10)
    return scoreSpareFrame(frame, nextFrame)

  else if (ballOne === 10)
    return scoreSingleStrike(frame, nextFrame)
}


function scoreNormalFrame(frame) {

  return ballOne + ballTwo
}
function scoreSpareFrame(frame, nextFrame) {
  return 10 + nextFrame[0]
}

function scoreSingleStrike(frame, nextFrame) {
  return 10 + nextFrame[0] + nextFrame[1]
}