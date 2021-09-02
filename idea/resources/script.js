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
function updatePool() {

    if (reyersPlayed && mordor) {
    if (reyersdiscarded) {
        document.getElementById("reyers").width = 0;
        document.getElementById("reyers").width = 0;
    } else if (reyersDrawn) {
        document.getElementById("reyers").width = 60;
        document.getElementById("reyersd").width = 0;
    } else if (reyersPlayed) {
        document.getElementById("reyers").width = 0;
        document.getElementById("reyersd").width = 60;
    }
    }
    if (r3sPlayed && mordor){
        if (r3sdiscarded) {
            document.getElementById("r3s").width = 0;
            document.getElementById("r3sd").width = 0;
        } else if (r3sDrawn) {
            document.getElementById("r3s").width = 60;
            document.getElementById("r3sd").width = 0;
        } else if (r3sPlayed) {
            document.getElementById("r3s").width = 0;
            document.getElementById("r3sd").width = 60;
        }
        }
        if (rdsPlayed && mordor) {
            if (rdsdiscarded) {
                document.getElementById("rds").width = 0;
                document.getElementById("rdsd").width = 0;
            } else if (rdsDrawn) {
                document.getElementById("rds").width = 60;
                document.getElementById("rdsd").width = 0;
            } else if (rdsPlayed) {
                document.getElementById("rds").width = 0;
                document.getElementById("rdsd").width = 60;
            }
            }
            if (r1rsPlayed && mordor) {
                if (r1rsdiscarded) {
                    document.getElementById("r1rs").width = 0;
                    document.getElementById("r1rsd").width = 0;
                } else if (r1rsDrawn) {
                    document.getElementById("r1rs").width = 60;
                    document.getElementById("r1rsd").width = 0;
                } else if (r1rsPlayed && mordor) {
                    document.getElementById("r1rs").width = 0;
                    document.getElementById("r1rsd").width = 60;
                }
                }
    if (b0rPlayed && mordor) {
    if (b0rdiscarded) {
        document.getElementById("b0r").width = 0;
        document.getElementById("b0rd").width = 0;
    } else if (b0rDrawn) {
        document.getElementById("b0r").width = 60;
        document.getElementById("b0rd").width = 0;
    } else if (b0rPlayed) {
        document.getElementById("b0r").width = 0;
        document.getElementById("b0rd").width = 60;
    }
    }
    if (b0cPlayed && mordor){
        if (b0cdiscarded) {
            document.getElementById("b0c").width = 0;
            document.getElementById("b0cd").width = 0;
        } else if (b0cDrawn) {
            document.getElementById("b0c").width = 60;
            document.getElementById("b0cd").width = 0;
        } else if (b0cPlayed) {
            document.getElementById("b0c").width = 0;
            document.getElementById("b0cd").width = 60;
        }
        }
        if (b1Played && mordor) {
            if (b1discarded) {
                document.getElementById("b1").width = 0;
                document.getElementById("b1d").width = 0;
            } else if (b1Drawn) {
                document.getElementById("b1").width = 60;
                document.getElementById("b1d").width = 0;
            } else if (b1Played) {
                document.getElementById("b1").width = 0;
                document.getElementById("b1d").width = 60;
            }
            }
            if (b2Played && mordor) {
                if (b2discarded) {
                    document.getElementById("b2").width = 0;
                    document.getElementById("b2d").width = 0;
                } else if (b2Drawn) {
                    document.getElementById("b2").width = 60;
                    document.getElementById("b2d").width = 0;
                } else if (b2Played && mordor) {
                    document.getElementById("b2").width = 0;
                    document.getElementById("b2d").width = 60;
                }
                }

    if (eye1discarded) {
        document.getElementById("eye1").width = 0;
        document.getElementById("eye1d").width = 0;
    } else if (eye1drawn) {
        document.getElementById("eye1").width = 60;
        document.getElementById("eye1d").width = 0;
    } else {
        document.getElementById("eye1").width = 0;
        document.getElementById("eye1d").width = 60;
    }
    if (eye2discarded) {
        document.getElementById("eye2").width = 0;
        document.getElementById("eye2d").width = 0;
    } else if (eye2drawn) {
        document.getElementById("eye2").width = 60;
        document.getElementById("eye2d").width = 0;
    } else {
        document.getElementById("eye2").width = 0;
        document.getElementById("eye2d").width = 60;
    }
    if (eye3discarded) {
        document.getElementById("eye3").width = 0;
        document.getElementById("eye3d").width = 0;
    } else if (eye3drawn) {
        document.getElementById("eye3").width = 60;
        document.getElementById("eye3d").width = 0;
    } else {
        document.getElementById("eye3").width = 0;
        document.getElementById("eye3d").width = 60;
    }
    if (eye4discarded) {
        document.getElementById("eye4").width = 0;
        document.getElementById("eye4d").width = 0;
    } else if (eye4drawn) {
        document.getElementById("eye4").width = 60;
        document.getElementById("eye4d").width = 0;
    } else {
        document.getElementById("eye4").width = 0;
        document.getElementById("eye4d").width = 60;
    }

    if (one1drawn) {
        document.getElementById("one1").width = 60;
        document.getElementById("one1d").width = 0;
    } else {
        document.getElementById("one1").width = 0;
        document.getElementById("one1d").width = 60;
    }
    if (one2drawn) {
        document.getElementById("one2").width = 60;
        document.getElementById("one2d").width = 0;
    } else {
        document.getElementById("one2").width = 0;
        document.getElementById("one2d").width = 60;
    }
    if (two1drawn) {
        document.getElementById("two1").width = 60;
        document.getElementById("two1d").width = 0;
    } else {
        document.getElementById("two1").width = 0;
        document.getElementById("two1d").width = 60;
    }
    if (two2drawn) {
        document.getElementById("two2").width = 60;
        document.getElementById("two2d").width = 0;
    } else {
        document.getElementById("two2").width = 0;
        document.getElementById("two2d").width = 60;
    }
    if (three1drawn) {
        document.getElementById("three1").width = 60;
        document.getElementById("three1d").width = 0;
    } else {
        document.getElementById("three1").width = 0;
        document.getElementById("three1d").width = 60;
    }
    if (three2drawn) {
        document.getElementById("three2").width = 60;
        document.getElementById("three2d").width = 0;
    } else {
        document.getElementById("three2").width = 0;
        document.getElementById("three2d").width = 60;
    }
    if (three3drawn) {
        document.getElementById("three3").width = 60;
        document.getElementById("three3d").width = 0;
    } else {
        document.getElementById("three3").width = 0;
        document.getElementById("three3d").width = 60;
    }
    if (zeroR1drawn) {
        document.getElementById("zeroR1").width = 60;
        document.getElementById("zeroR1d").width = 0;
    } else {
        document.getElementById("zeroR1").width = 0;
        document.getElementById("zeroR1d").width = 60;
    }
    if (zeroR2drawn) {
        document.getElementById("zeroR2").width = 60;
        document.getElementById("zeroR2d").width = 0;
    } else {
        document.getElementById("zeroR2").width = 0;
        document.getElementById("zeroR2d").width = 60;
    }
    if (oneR1drawn) {
        document.getElementById("oneR1").width = 60;
        document.getElementById("oneR1d").width = 0;
    } else {
        document.getElementById("oneR1").width = 0;
        document.getElementById("oneR1d").width = 60;
    }
    if (oneR2drawn) {
        document.getElementById("oneR2").width = 60;
        document.getElementById("oneR2d").width = 0;
    } else {
        document.getElementById("oneR2").width = 0;
        document.getElementById("oneR2d").width = 60;
    }
    if (twoR1drawn) {
        document.getElementById("twoR1").width = 60;
        document.getElementById("twoR1d").width = 0;
    } else {
        document.getElementById("twoR1").width = 0;
        document.getElementById("twoR1d").width = 60;
    }


}

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
        refillHuntBox();
    }
    //alert(drawnTileNumber + " was drawn!");
    setImage();
    updatePool();
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
    updatePool();


}
function refillHuntBox() {
    eye1drawn = false;
    eye2drawn = false;
    eye3drawn = false;
    eye4drawn = false;
    one1drawn = false;
    one2drawn = false;
    two1drawn = false;
    two2drawn = false;
    three1drawn = false;
    three2drawn = false;
    three3drawn = false;
    zeroR1drawn = false;
    zeroR2drawn = false;
    oneR1drawn = false;
    oneR2drawn = false;
    twoR1drawn = false;
    updatePool();
    drawnTileNumber = 1000;
    setImage();

}
function enterMordor() {
    document.getElementById("walk").play();
    if(!mordor) {
    document.getElementById("background").src = "src/mordor.jpg";
    mordor = true;
    eye1drawn = false;
    eye2drawn = false;
    eye3drawn = false;
    eye4drawn = false;
    }
        updatePool();
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
                   updatePool();
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
                                  updatePool();
}

function function2() {
    	alert("I am embedded into the HTML file! FOR SURE")
}
function playElvenCloak() {
    b0cPlayed = true;
    updatePool();
}
function playElvenRope() {
    b0rPlayed = true;
        updatePool();
}
function playSmeagolHelps() {
    b1Played = true;
        updatePool();
}
function playPhial() {
    b2Played = true;
        updatePool();
}
function playShelob() {
    rdsPlayed = true;
        updatePool();
}
function playRing() {
    reyersPlayed = true;
        updatePool();
}
function playOn() {
    r3sPlayed = true;
        updatePool();
}
function playGive() {
    r1rsPlayed = true;
        updatePool();
}

