module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextBall) {
  if (frame[0] +frame[1] !== 10){         
    return frame[0] + frame[1]
  } else {
    return frame[0] + frame[1] + nextBall[0] 
  }
}

