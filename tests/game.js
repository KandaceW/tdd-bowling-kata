module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  scoreTerribleGame: scoreTerribleGame,
  
}

// var frames = [
//   [1, 2], 
//   [6, 3], 
//   [5, 4], 
//   [1, 0], 
//   [7, 2], 
//   [1, 0], 
//   [1, 0], 
//   [5, 2], 
//   [7, 0], 
//   [4, 4]

//   ]

  

function scoreFrame (frame) {
  return frame[0] + frame[1]
  
}

function scoreSpare (frame, frame2) {
    return frame[0] + frame[1] + frame2[0]
}

function scoreStrike (frame, frame2) {
  return frame[0] + frame2[0] + frame2[1]
}

function scoreDoubleStrike (frame, frame2, frame3) {
  if (frame[0] === 10 && frame2[0] === 10) {
    return frame[0] + frame2[0] + frame3[0]
  }
}

function scoreTerribleGame (frames) {
  var result = 0
  for(var i = 0; i < frames.length; i++) {
  result = result + scoreFrame(frames[i])
  if (frame[0] + frame[1] == 10 && i < 9) {
    result += scoreSpare(frames)
  }
}
  return result
}





