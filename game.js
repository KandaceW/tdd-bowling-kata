module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
}


function scoreFrame (frame){
  return frame[0] + frame[1]
}

function scoreSpare (frame, frameTwo){
  if(frame[0] + frame[1] === 10){
    return frame[0] + frame[1] + frameTwo[0]
  }
   
}

function scoreStrike (frame, frameTwo){
  if(frame[0] === 10) {
    return frame[0] + frame[1] + frameTwo[0] + frameTwo[1]
  }
}

function scoreDoubleStrike (frameOne, frameTwo, frameThree) {
  if (frameOne[0] === 10 && frameTwo[0] === 10) {
    return frameOne[0] + frameTwo[0] + frameThree[0]
  }
}