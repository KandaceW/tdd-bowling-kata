module.exports = {
    scoreFrame:scoreFrame
}
function scoreFrame(frame, nextFrame) {
    var result = frame[0] + frame[1]
    if (result !== 0 && result !== 10){
        return result
    } else if( result == 10) {
        return result + nextFrame[0]
    } else if (frame[0] == 10) {
        var nextResult = nextFrame[0] + nextFrame[1]
        return result + nextResult
    } else {
        return 0
    }
}

