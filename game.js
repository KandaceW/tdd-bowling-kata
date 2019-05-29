module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
}


function scoreFrame (frame){
  return frame[0] + frame[1]
}

function scoreSpare (frame){
  if(frame[0][0] + frame[0][1] === 10){
    return frame[0][0] + frame[0][1] + frame[1][0]
  }
   
}

function scoreStrike (frame){
  if(frame[0][0] === 10) {
    return frame[0][0] + frame[0][1] + frame[1][0] + frame[1][1]
  }
}