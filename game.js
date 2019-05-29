module.exports = {
    scoreFrame: scoreFrame,
    // spareFrame: spareFrame
}

function scoreFrame (frame) {
    return frame[0] + frame[1];

}

// function spareFrame (frame) {
//     var ballOne = frame[i][0];
//     var ballTwo = frame[i][1];
//     var nextBall = frame[i][0]

//     for (var i = 0; i < frames.length; i++){
//         if(ballOne + ballTwo === 10) {
//          frames[i] = ballOne + ballTwo + nextBall
//     } else {
//         scoreFrame(frames)
//     }
//   } 
// }

