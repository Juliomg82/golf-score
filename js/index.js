function golfScore(par, strokes) {
    // Only change code below this line
      
      if (strokes == 1) {
        console.log(names[0]);
      }
      else if (strokes == par - 2) {
        console.log (names[1]);
      }else if (strokes == par - 1) {
        console.log (names[2]);
      }else if (strokes == par) {
        console.log (names[3]);
      }else if (strokes == par + 1) {
        console.log (names[4]);
      }else if (strokes == par + 2) {
        console.log (names[5]);
      }else if (strokes == par + 3) {
        console.log (names[6]);
      }
        console.log ('The number of strokes should be greater than 0');
    // Only change code above this line
  }
  
  golfScore(4, 9);