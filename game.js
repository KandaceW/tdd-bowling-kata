module. exports = {
  scoreFrame: scoreFrame,
}


function scoreFrame(frame, nextFrame) {
  var first = frame[0]
  var second = frame[1]
  var frameScore = first + second

  if (first === 10) {
    frameScore = frameScore + nextFrame[0] + nextFrame[1]
  } else if (first + second === 10) {
    frameScore = frameScore + nextFrame[0]
  } 
    
  
  return frameScore
}




