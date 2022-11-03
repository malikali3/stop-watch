

    let sec = 00;
    let miliSec = 00;
    let milliSec = document.getElementById("milliSec");
    let hyphen = document.getElementById("hyphen");
    let seconds = document.getElementById("sec");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
  


function increaseMiliSec(){
    time = true;
    let ms = miliSec;
    let se = sec;
    document.getElementById("milliSec").innerHTML = ms;
    document.getElementById("sec").innerHTML = se;
    miliSec++; 
    if (miliSec > 99){
        miliSec=00;
        sec++;
    } 
}


let func;

start.onclick = function(){ 
    func =setInterval(increaseMiliSec, 10);
  }

stop.onclick = function(){
  clearInterval(func);  
}

reset.onclick = function(){
    let time = false;
    let sec = 00;
    let miliSec = 00;
    document.getElementById("milliSec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    clearInterval(func);
}

