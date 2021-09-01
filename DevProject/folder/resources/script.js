var eye1drawn = false;
var eye2drawn = false;
var eye3drawn = false;
var eye4drawn = false;
var one1drawn = false;
var one2drawn = false;
var two1drawn = false;
var two2drawn = false;
var three1drawn = false;
var three2drawn = false;
var three3drawn = false;
var zeroR1drawn = false;
var zeroR2drawn = false;
var oneR1drawn = false;
var oneR2drawn = false;
var twoR1drawn = false;
var reyersPlayed = false;
var reyersDrawn = false;
var r1rsPlayed = false;
var r1rsDrawn = false;
var r3sPlayed = false;
var r3sDrawn = false;
var rdsPlayed = false;
var rdsDrawn = false;
var b0rPlayed = false;
var b0rDrawn = false;
var b0cPlayed = false;
var b0cDrawn = false;
var b1Played = false;
var b1Drawn = false;
var b2Played = false;
var b2Drawn = false;

var eye1discarded = false;
var eye2discarded = false;
var eye3discarded = false;
var eye4discarded = false;
var reyersdiscarded = false;
var r1rsdiscarded = false;
var r3sdiscarded = false;
var rdsdiscarded = false;
var b0rdiscarded = false;
var b0cdiscarded = false;
var b1discarded = false;
var b2discarded = false;

var mordor = false;

var drawnTileNumber = 0;

function drawRandomTile() {
    var tileDrawn = false;
    var count = 0;
    while (!tileDrawn && count < 1000) {
        count = count + 1;
        var random=Math.floor(Math.random()*24);
        if (random == 0 && !eye1drawn && !eye1discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye1drawn = true;
        }
        if (random == 1 && !eye2drawn && !eye2discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye2drawn = true;
        }
        if (random == 2 && !eye3drawn && !eye3discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye3drawn = true;
        }
        if (random == 3 && !eye4drawn && !eye4discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye4drawn = true;
        }
        if (random == 4 && !one1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            one1drawn = true;
        }
        if (random == 5 && !one2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            one2drawn = true;
        }
        if (random == 6 && !two1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            two1drawn = true;
        }
        if (random == 7 && !two2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            two2drawn = true;
        }
        if (random == 8 && !three1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three1drawn = true;
        }
        if (random == 9 && !three2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three2drawn = true;
        }
        if (random == 10 && !three3drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three3drawn = true;
        }
        if (random == 11 && !zeroR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            zeroR1drawn = true;
        }
        if (random == 12 && !zeroR2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            zeroR2drawn = true;
        }
        if (random == 13 && !oneR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            oneR1drawn = true;
        }
        if (random == 14 && !oneR2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            oneR2drawn = true;
        }
        if (random == 15 && !twoR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            twoR1drawn = true;
        }
        if (random == 16 && !reyersDrawn && reyersPlayed && mordor && !reyersdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    reyersDrawn = true;
                }
        if (random == 17 && !r3sDrawn && r3sPlayed && mordor && !r3sdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    r3sDrawn = true;
                }
        if (random == 18 && !rdsDrawn && rdsPlayed && mordor && !rdsdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    rdsDrawn = true;
                }
        if (random == 19 && !r1rsDrawn && r1rsPlayed && mordor && !r1rsdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    r1rsDrawn = true;
                }
        if (random == 20 && !b1Drawn && b1Played && mordor && !b1discarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b1Drawn = true;
                }
        if (random == 21 && !b2Drawn && b2Played && mordor && !b2discarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b2Drawn = true;
                }
        if (random == 22 && !b0rDrawn && b0rPlayed && mordor && !b0rdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b0rDrawn = true;
                }
        if (random == 23 && !b0cDrawn && b0cPlayed && mordor && !b0cdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b0cDrawn = true;
                }

    }
    if (count >= 1000) {
        alert("No tiles remain! reshuffling hunt box");
    }
    //alert(drawnTileNumber + " was drawn!");
    setImage();


}
function mithrilCoat() {
    var lastDrawnTileNumber = drawnTileNumber;
    returnCurrentTile();

    var tileDrawn = false;
    var count = 0;
    while (!tileDrawn && count < 1000) {
        count = count + 1;
        var random=Math.floor(Math.random()*24);
        if (random != lastDrawnTileNumber) {
        if (random == 0 && !eye1drawn && !eye1discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye1drawn = true;
        }
        if (random == 1 && !eye2drawn && !eye2discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye2drawn = true;
        }
        if (random == 2 && !eye3drawn && !eye3discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye3drawn = true;
        }
        if (random == 3 && !eye4drawn && !eye4discarded) {
            drawnTileNumber = random;
            tileDrawn = true;
            eye4drawn = true;
        }
        if (random == 4 && !one1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            one1drawn = true;
        }
        if (random == 5 && !one2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            one2drawn = true;
        }
        if (random == 6 && !two1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            two1drawn = true;
        }
        if (random == 7 && !two2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            two2drawn = true;
        }
        if (random == 8 && !three1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three1drawn = true;
        }
        if (random == 9 && !three2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three2drawn = true;
        }
        if (random == 10 && !three3drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            three3drawn = true;
        }
        if (random == 11 && !zeroR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            zeroR1drawn = true;
        }
        if (random == 12 && !zeroR2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            zeroR2drawn = true;
        }
        if (random == 13 && !oneR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            oneR1drawn = true;
        }
        if (random == 14 && !oneR2drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            oneR2drawn = true;
        }
        if (random == 15 && !twoR1drawn) {
            drawnTileNumber = random;
            tileDrawn = true;
            twoR1drawn = true;
        }
        if (random == 16 && !reyersDrawn && reyersPlayed && mordor && !reyersdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    reyersDrawn = true;
                }
        if (random == 17 && !r3sDrawn && r3sPlayed && mordor && !r3sdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    r3sDrawn = true;
                }
        if (random == 18 && !rdsDrawn && rdsPlayed && mordor && !rdsdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    rdsDrawn = true;
                }
        if (random == 19 && !r1rsDrawn && r1rsPlayed && mordor && !r1rsdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    r1rsDrawn = true;
                }
        if (random == 20 && !b1Drawn && b1Played && mordor && !b1discarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b1Drawn = true;
                }
        if (random == 21 && !b2Drawn && b2Played && mordor && !b2discarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b2Drawn = true;
                }
        if (random == 22 && !b0rDrawn && b0rPlayed && mordor && !b0rdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b0rDrawn = true;
                }
        if (random == 23 && !b0cDrawn && b0cPlayed && mordor && !b0cdiscarded) {
                    drawnTileNumber = random;
                    tileDrawn = true;
                    b0cDrawn = true;
                }
        }
    }
    if (count >= 1000) {
        alert("No tiles remain! reshuffling hunt box");
    }
    //alert(drawnTileNumber + " was drawn!");
    setImage();


}

function enterMordor() {
    mordor = true;
    eye1drawn = false;
    eye2drawn = false;
    eye3drawn = false;
    eye4drawn = false;
}
function setImage() {
    if (drawnTileNumber >= 0 && drawnTileNumber <= 3) {
        document.getElementById("image").src = "src/eyer.png";
        document.getElementById("image").alt = "Eye and Reveal";
    }
    if (drawnTileNumber >= 4 && drawnTileNumber <= 5) {
        document.getElementById("image").src = "src/1.png";
        document.getElementById("image").alt = "Regular One";
    }
    if (drawnTileNumber >= 6 && drawnTileNumber <= 7) {
        document.getElementById("image").src = "src/2.png";
        document.getElementById("image").alt = "Regular Two";
    }
    if (drawnTileNumber >= 8 && drawnTileNumber <= 10) {
        document.getElementById("image").src = "src/3.png";
        document.getElementById("image").alt = "Regular Three";
    }
    if (drawnTileNumber >= 11 && drawnTileNumber <= 12) {
        document.getElementById("image").src = "src/0r.png";
        document.getElementById("image").alt = "Zero Reveal";
    }
    if (drawnTileNumber >= 13 && drawnTileNumber <= 14) {
        document.getElementById("image").src = "src/1r.png";
        document.getElementById("image").alt = "One Reveal";
    }
    if (drawnTileNumber == 15) {
        document.getElementById("image").src = "src/2r.png";
        document.getElementById("image").alt = "Two Reveal";
    }
    if (drawnTileNumber == 16) {
            document.getElementById("image").src = "src/reyers.png";
            document.getElementById("image").alt = "reyers";
        }
    if (drawnTileNumber == 17) {
            document.getElementById("image").src = "src/r3s.png";
            document.getElementById("image").alt = "r3s";
        }
    if (drawnTileNumber == 18) {
            document.getElementById("image").src = "src/rds.png";
            document.getElementById("image").alt = "rds";
        }
    if (drawnTileNumber == 19) {
            document.getElementById("image").src = "src/r1rs.png";
            document.getElementById("image").alt = "r1rs";
        }
    if (drawnTileNumber == 20) {
            document.getElementById("image").src = "src/b-1.png";
            document.getElementById("image").alt = "b-1";
    }
    if (drawnTileNumber == 21) {
            document.getElementById("image").src = "src/b-2.png";
            document.getElementById("image").alt = "b-2";
        }
    if (drawnTileNumber == 22 || drawnTileNumber == 23) {
            document.getElementById("image").src = "src/b0.png";
            document.getElementById("image").alt = "b0";
        }
    if (drawnTileNumber == 1000) {
            document.getElementById("image").src = "src/nothing.png";
            document.getElementById("image").alt = "none";
    }
}
function discardCurrentTile() {
    if (drawnTileNumber == 23) {
        b0cdiscarded = true;
    }
    if (drawnTileNumber == 22) {
        b0rdiscarded = true;
    }
    if (drawnTileNumber == 21) {
        b2discarded = true;
    }
    if (drawnTileNumber == 20) {
        b1discarded = true;
    }
    if (drawnTileNumber == 19) {
        r1rsdiscarded = true;
    }
    if (drawnTileNumber == 18) {
        rdsdiscarded = true;
    }
    if (drawnTileNumber == 17) {
        r3sdiscarded = true;
    }
    if (drawnTileNumber == 16) {
        reyersdiscarded = true;
    }
    if (drawnTileNumber == 0) {
        eye1discarded = true;
    }
    if (drawnTileNumber == 1) {
        eye2discarded = true;
    }
    if (drawnTileNumber == 2) {
        eye3discarded = true;
    }
    if (drawnTileNumber == 3) {
        eye4discarded = true;
    }
               drawnTileNumber = 1000;
               setImage();
}
function returnCurrentTile() {
               if (drawnTileNumber == 0) {
                   eye1drawn = false;
               }
               if (drawnTileNumber == 1) {
                   eye2drawn = false;
               }
               if (drawnTileNumber == 2) {
                   eye3drawn = false;
               }
               if (drawnTileNumber == 3) {
                   eye4drawn = false;
               }
               if (drawnTileNumber == 4) {
                   one1drawn = false;
               }
               if (drawnTileNumber == 5) {
                   one2drawn = false;
               }
               if (drawnTileNumber == 6) {
                   two1drawn = false;
               }
               if (drawnTileNumber == 7) {
                   two2drawn = false;
               }
               if (drawnTileNumber == 8) {
                   three1drawn = false;
               }
               if (drawnTileNumber == 9) {
                   three2drawn = false;
               }
               if (drawnTileNumber == 10) {
                   three3drawn = false;
               }
               if (drawnTileNumber == 11) {
                   zeroR1drawn = false;
               }
               if (drawnTileNumber == 12) {
                   zeroR2drawn = false;
               }
               if (drawnTileNumber == 13) {
                   oneR1drawn = false;
               }
               if (drawnTileNumber == 14) {
                   oneR2drawn = false;
               }
               if (drawnTileNumber == 15) {
                   twoR1drawn = false;
               }
               if (drawnTileNumber == 16) {
                           reyersDrawn = false;
                       }
               if (drawnTileNumber == 17) {
                           r3sDrawn = false;
                       }
               if (drawnTileNumber == 18) {
                           rdsDrawn = false;
                       }
               if (drawnTileNumber == 19) {
                           r1rsDrawn = false;
                       }
               if (drawnTileNumber == 20) {
                           b1Drawn = false;
                       }
               if (drawnTileNumber == 21) {
                           b2Drawn = false;
                       }
               if (drawnTileNumber == 22) {
                           b0rDrawn = false;
                       }
               if (drawnTileNumber == 23) {
                    b0cDrawn = false;
               }
               drawnTileNumber = 1000;
                              setImage();
}

function function2() {
    	alert("I am embedded into the HTML file! FOR SURE")
}
function playElvenCloak() {
    b0cPlayed = true;
}
function playElvenRope() {
    b0rPlayed = true;
}
function playSmeagolHelps() {
    b1Played = true;
}
function playPhial() {
    b2Played = true;
}
function playShelob() {
    rdsPlayed = true;
}
function playRing() {
    reyersPlayed = true;
}
function playOn() {
    r3sPlayed = true;
}
function playGive() {
    r1rsPlayed = true;
}

