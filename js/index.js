'use strict'
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 0 || par == 0) {
        
        return 'Los valores deben ser mayores de 0 en ambos casos';
        
    } else {
        
        if (strokes == 1) {
            return names[0];
        }else if (par - strokes >= 2) {
            return names[1];
        }else if (par - strokes == 1) {
            return names[2];
        }else if (par - strokes == 0) {
            return names[3];
        }else if (strokes - par == 1) {
            return names[4];
        }else if (strokes - par == 2) {
            return names[5];
        }else if (strokes - par >= 3) {
            return names[6];
        }
    }

  return 'Ejecutada la función golfScore';               
}
  
golfScore(5, 1);