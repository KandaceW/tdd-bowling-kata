module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike
}

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
    return frame[0] + frame2[0] + frame3[0] + frame3[0]
  }
}

//function spareFrame (frame, frame2) {
//var newArr = 0
// if frame = 10 then add frame2 function
//  result frame + frame2[0]
