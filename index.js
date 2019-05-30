module.exports = {
  scoreFrame: scoreFrame,
  scoreNormalFrame: scoreNormalFrame,
  scoreSpareFrame: scoreSpareFrame,
  scoreSingleStrike: scoreSingleStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  scoreGame: scoreGame,
}

function scoreGame(frames) {

  var score = 0
  for (var i = 0; i < frames.length; i++) {

    var frame = frames[i];
    var nextFrame = frames[i + 1];
    var thirdFrame = frames[i + 2];

    score += (scoreFrame(frames[i], nextFrame, thirdFrame))
  }
  console.log(score)
  return score
}

function scoreFrame(frame, nextFrame, thirdFrame) {
  // console.log(frame)
  ballOne = frame[0];
  ballTwo = frame[1];

  if ((ballOne + ballTwo) < 10) {
    return scoreNormalFrame(frame, nextFrame, thirdFrame)
  }

  else if ((ballOne + ballTwo) === 10 && ballOne !== 10) {
    return scoreSpareFrame(frame, nextFrame, thirdFrame)
  }

  else if (ballOne === 10 && nextFrame[0] !== 10) {
    return scoreSingleStrike(frame, nextFrame, thirdFrame)
  }
  else if (ballOne === 10 && nextFrame[0] === 10) {
    return scoreDoubleStrike(frame, nextFrame, thirdFrame)
  }

}


function scoreNormalFrame(frame, nextFrame, thirdFrame) {

  return ballOne + ballTwo
}
function scoreSpareFrame(frame, nextFrame, thirdFrame) {
  return 10 + nextFrame[0]
}

function scoreSingleStrike(frame, nextFrame, thirdFrame) {
  return 10 + nextFrame[0] + nextFrame[1]
}

function scoreDoubleStrike(frame, nextFrame, thirdFrame) {
  return 20 + thirdFrame[0]
}

// function finalFrameSpare(frame) {
//   return frame[0] + frame[1] + frame[2]
// }