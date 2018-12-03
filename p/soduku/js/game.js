//Service Worker 
navigator.serviceWorker.register("/sw.js");


document.getElementById("bnp").addEventListener('click', fNewGame);

var it=0;
var L =     [[1, 2, 3, 10, 11, 12, 19, 20, 21],
             [4, 5, 6, 13, 14, 15, 22, 23, 24],
             [7, 8, 9, 16, 17, 18, 25, 26, 27],
             [28, 29, 30, 37, 38, 39, 46, 47, 48],
             [31, 32, 33, 40, 41, 42, 49, 50, 51],
             [34, 35, 36, 43, 44, 45, 52, 53, 54],
             [55, 56, 57, 64, 65, 66, 73, 74, 75],
             [58, 59, 60, 67, 68, 69, 76, 77, 78],
             [61, 62, 63, 70, 71, 72, 79, 80, 81]];
function fNewGame() {
 console.log("ITERATION NUMBER: " +(++it))
    var call = fNewBigSquare();
    var call1 = [];
   // console.log(call)
    //fVerifSquare(call)
    var iall = document.getElementsByTagName("input");
    for (i = 0; i < 9; i++) {
        iall[i].value = call[0][i];
        iall[i + 9].value = call[1][i];
        iall[i + 18].value = call[2][i];
        iall[i + 27].value = call[3][i];
        iall[i + 36].value = call[4][i];
        iall[i + 45].value = call[5][i];
        iall[i + 54].value = call[6][i];
        iall[i + 63].value = call[7][i];
        iall[i + 72].value = call[8][i];
    }

    for (var i = 0; i < 81; i++) {
        call1[i] = iall[i].value;
    }
    //fVerifLine(call1)
    if (fVerifLine(call1)) {
        alert("good one")
    } else {
        fNewGame()
    }
}
function fNewBigSquare() {
    var call = [];
    var c1 = fNewSquare();
    call.push(c1);
    var c2 = fNewSquare();
    call.push(c2);
    var c3 = fNewSquare();
    call.push(c3);
    var c4 = fNewSquare();
    call.push(c4);
    var c5 = fNewSquare();
    call.push(c5);
    var c6 = fNewSquare();
    call.push(c6);
    var c7 = fNewSquare();
    call.push(c7);
    var c8 = fNewSquare();
    call.push(c8);
    var c9 = fNewSquare();
    call.push(c9);
    return call;
}
function fNewSquare() {
    var s = [];
    for (i = 0; i < 9; i++) {
        do {
            rv = (Math.floor(Math.random() * Math.floor(9))) + 1;
        } while ((s.indexOf(rv)) != (-1))
        s.push(rv);
    }
    return s;
}

function fVerifLine(C) {
   // console.log(C)
    //console.log(L)
    for (var l = 0; l < 9; l++) {
        var a = []
        for (var k = 0; k < 9; k++) {
            x = (L[l][k]) - 1
            a.push(C[x]);
        }
        if (!verifT(a)) {
            
            return false;
        }
    }
    return true;
}

function verifT(t) {
    for(var i=1;i<=9;i++){
        if(t.indexOf(i)==-1){
            console.log(false)
            return false
        }
    }
    return true
}
