module.exports = {
    scoreFrame:scoreFrame
}
function scoreFrame(frame) {
    var result = frame[0] + frame[1]
    if (result !== 0){
        return result
    } else {
        return 0
    }
}

