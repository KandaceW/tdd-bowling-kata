module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
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