module.exports = {
    scoreFrame:scoreFrame,
    doubleStrike: doubleStrike,
    // addGame: addGame
}

function scoreFrame(frame, nextFrame) {
    var result = frame[0] + frame[1]
    if (result !== 0 && result !== 10){
        return result
    } else if (frame[0] == 10) {
        var nextResult = nextFrame[0] + nextFrame[1]
  
        
        return result + nextResult
    } else if(result == 10 && frame[0] !== 10) {
        return result + nextFrame[0]
    }  else {
        return 0
    }
}

function doubleStrike(frame1, frame2, frame3){
    
        // if(frame1[0] === 10 && frame2 === 10){
        //     return frame1 + frame2 + frame3
        // }
    
    
    
    
    
    
    
    
    
    var newArr = []
    
    for (var i = 0; i < frames.length; i++) {
        var firstBall = frames[i][0]
        var secondBall = frames[i][1]
        var result = firstBall + secondBall
        newArr.push(result)   
        console.log(newArr);
        
    }
    for(var i = 0; i < newArr.length; i++){
        if (newArr[i] === 10){
            return newArr[i] + newArr[i + 1]
        }
    }

    function addGame(frames){

    }
}
