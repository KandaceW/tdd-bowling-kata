module.exports = {
  scoreFrame: scoreFrame,
  strikeFrame: strikeFrame,
}

function scoreFrame (frame, nextFrame) {
  if (frame[0] === 10){         
     return frame[0] + nextFrame[0] + nextFrame[1]
   } else if (frame[0] + frame[1] == 10){
     return frame[0] + frame[1] + nextFrame[0] 
   } else {
     return frame[0] + frame[1]
   }
 
  }

function strikeFrame (strikeFrame, nextFrame) {
  return strikeFrame[0] + nextFrame[1] + nextFrame[0]
}

