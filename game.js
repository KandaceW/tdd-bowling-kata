module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreGame: scoreGame,
  sumLastFrame: sumLastFrame
}

function scoreFrame(frame){
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame){
  var result = 0
  if(scoreFrame(frame) === 10){
    result += 10 + nextFrame[0]
  }
  return result
}

function scoreStrike(frame, nextFrame, thirdFrame){
  var result = 0
  if(frame[0] === 10 && nextFrame[0] === 10){
    result = result + scoreFrame(frame) + scoreFrame(nextFrame) + thirdFrame[0]
  } else if(frame[0] === 10){  
    result = result + scoreFrame(frame) + scoreFrame(nextFrame)
  }
  return result
}

function scoreGame(frame){
  var result = 0
  for(var i = 0; i < frame.length; i++){
    var firstFrame = frame[i]
    var secondFrame = frame[i + 1]
    var thirdFrame = frame[i + 2]
    if (firstFrame[0] === 10 && i < 9){
      result = result + scoreStrike(firstFrame, secondFrame, thirdFrame)
    } else if (firstFrame + secondFrame === 10 && i < 9){
      result = result + scoreSpare(firstFrame, secondFrame)
    } else {
      result = result + scoreFrame(firstFrame)
    }
  }
  return result
}

function sumLastFrame(frame){
  var result = 0
  var lastFrame = frame[frame.length - 1]
  result = result + lastFrame[0] + lastFrame[1] + lastFrame[2]
  console.log(result);
  return result
}





