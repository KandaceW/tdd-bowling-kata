module.exports = {
    scoreFrame: scoreFrame,
    spareFrame: spareFrame,
    strikeFrame: strikeFrame,
    scoreGame: scoreGame,
    sumLastFrame: sumLastFrame
}

function scoreFrame (firstFrame) {
    return firstFrame[0] + firstFrame[1];
}
    
function spareFrame (firstFrame, secondFrame) {
    var result = 0
    if (scoreFrame(firstFrame) === 10){
    result += 10+ secondFrame[0]   
    }
    return result
}

function strikeFrame (firstFrame, secondFrame, thirdFrame) {
    var result = 0
    if (firstFrame[0] === 10 && secondFrame[0] === 10){
    result += (scoreFrame(firstFrame) + scoreFrame(secondFrame) + thirdFrame[0]) 
    } else if (firstFrame[0] === 10){
    result += scoreFrame(secondFrame) + 10
    }
    return result
}

function scoreGame (frames) {
    let result = 0

    for (var i = 0; i <frames.length; i++){
        var firstFrame = frames[i]
        var secondFrame = frames[i+1]
        var thirdFrame = frames[i+2]
        // console.log(result)
       if (firstFrame[0] === 10 && i < 9) {
           result+=strikeFrame(firstFrame, secondFrame, thirdFrame)
       } else if (firstFrame + secondFrame === 10 && i < 9) { result+=spareFrame (firstFrame, secondFrame) 
       } else { result+=scoreFrame(firstFrame)}
    }
    return result
}

function sumLastFrame (frames) {
    result = 0
    lastFrame = frames[frames.length-1]
    return lastFrame[0] + lastFrame[1] + lastFrame[2];
}