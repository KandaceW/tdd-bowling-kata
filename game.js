module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  scoreGame: scoreGame,
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

function scoreGame(frames){
  var finalScore = []
  for(var i = 0; i < frames.length; i++){
    finalScore.push(frames[i][0]+ frames[i][1])
  }
  // finalScore(total,num)
  // for(var j = 0; j < finalScore.length; j++){
  //   finalScore[j]+ finalScore[j]
  // }
return finalScore[0] + finalScore[1] + finalScore[2] +finalScore[3] +finalScore[4] +finalScore[5] +finalScore[6] +finalScore[7] +finalScore[8] +finalScore[9]
}