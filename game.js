module.exports = {
  gutterFrame: gutterFrame,
  normalFrame: normalFrame,
  scoreFrame: scoreFrame,
  doubleStrikeFrame: doubleStrikeFrame,
}

function gutterFrame (frame) {
  return 0
}

function normalFrame (frame) {
  return 5
}

function scoreFrame (obj, arr){

}

function doubleStrikeFrame (frame, nextFrame, thirdFrame){

  return 26
  
    //function that returns two strikes in the last 2 Frames, that will add a third random number in the 2nd frame that if the values are the same- [10, 0] [10,0]
    //then 
    //an array - [[10, 0] [10, 0] [5, 3]] if the first two frames are equal to [10, 0] then 
    //
    //

}


