module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDoubleStrike: scoreDoubleStrike,
  scoreGame: scoreGame,
  scoreGameTenth: scoreGameTenth,
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
  var count = 0
  for(var j = 0; j < finalScore.length; j++){
    if(j!= 9) {
    count += finalScore[j]
  } else { 
    count += finalScore[j]
  }
}
  return count
}

function scoreGameTenth (frames) {
  var strikeScore = []
  var gameScore = []
  var finalScore = 0

  if (frames[9][0] === 10){ 
    strikeScore.push(frames[9][0] + frames[9][1] + frames[9][2]) 
  }  
  for (var i = 0; i < frames.length - 1; i++) {
    gameScore.push(frames[i][0] + frames[i][1])
    } 

  var count = 0
  for(var j = 0; j < gameScore.length; j++){
    if(j!= 9) {
    count += gameScore[j]
  } else { 
    count += gameScore[j]
  }
  }
  finalScore += strikeScore[0]

  return finalScore + count
  
}