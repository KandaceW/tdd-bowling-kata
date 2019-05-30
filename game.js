module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  isSpare: isSpare,
  isStrike: isStrike,
  scoreGame: scoreGame
}

function scoreFrame(frame) {
  // var frameScore = 0
  // frame.forEach(ball => frameScore += ball)
  // return frameScore
  return frame[0] + frame[1]
}

function scoreSpare(frame, nextFrame) {
  return frame[0] + frame[1] + nextFrame[0]
}

function scoreStrike(frame, nextFrame) {

  if (isDoubleStrike(frame, nextFrame)) {

    let total = 0

    total += frame[0] + frame[1]

    if (nextFrame) { total += nextFrame[0] + nextFrame[1] }
    if (thirdFrame) { total += thirdFrame[0] }

    return total

  }

  return frame[0] + frame[1] + nextFrame[0] + nextFrame[1]
}

function scoreLastFrame(frame){
  return frame[0] + frame[1] + frame[2]
}

function isSpare(frame) {
  if (scoreFrame(frame) === 10 && frame[0] !== 10) {
    return true
  } else {
    return false
  }
}

function isStrike(frame) {
  return (frame[0] === 10 ? true : false)
}

function isDoubleStrike(frame, nextFrame) { console.log(frame, nextFrame)



  if (frame[0] === 10 && nextFrame[0] === 10) {

    return true
  } else {
    return false
  }
}

function isLastFrame(frame){
  return (frame.length === 3 ? true : false)
}

function scoreGame(frames) {

  var gameScore = 0

  for (var i = 0; i < frames.length - 1; i++) {

    var frame = frames[i]
    var nextFrame = frames[i + 1]
    var thirdFrame = frames[i + 2]

    
    if (isLastFrame(frame)){

      gameScore += scoreLastFrame(frame)
      console.log('Last Frame', gameScore)

    } else if (isDoubleStrike(frame, nextFrame, thirdFrame)) {
      
      gameScore += scoreStrike(frame, nextFrame, thirdFrame)
      console.log('DOUBLE STRIKE', gameScore)

    } else if (isStrike(frame)) {
      
      gameScore += scoreStrike(frame, nextFrame)
      console.log('STRIKE', gameScore)

    } else if (isSpare(frame)) {
      
      gameScore += scoreSpare(frame, nextFrame)
      console.log('SPARE', gameScore)
    } else {

      gameScore += scoreFrame(frame)

    }

  }

  gameScore += scoreLastFrame

  console.log('Congrats, you scored:', gameScore)
  return gameScore
}