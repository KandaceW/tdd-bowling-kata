module. exports = {
  scoreFrame: scoreFrame,
}


function scoreFrame(frame, nextFrame) {
  // if framescore = 10 then add the first item of the next frame.
  // otherwise, framescore only equals the first and second item of the first frame
  if(frameScore === 10 + nextFrame[0]) {
  
var frameScore = frame[0] + frame[1] + nextFrame[0]
return frameScore
}




