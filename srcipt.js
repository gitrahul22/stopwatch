let [seconds,minutes,hours]=[0,0,0];
let displaytime=document.getElementById("disptime");
let timer=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
        if(minutes==60){
        minutes=0;
        hours++;
          }
        }
        let h=hours<10 ? "0"+hours:hours;
        let m=minutes<10 ? "0"+minutes:minutes;
        let s=seconds<10 ? "0"+seconds:seconds;
        displaytime.innerHTML= h+":"+m+":"+s;
    }

    
function watchstart(){
    console.log("I was called");
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function stopbtn(){
        console.log("Stop Called");
        clearInterval(timer);
}
function rst(){
    console.log("Reset Called");
    seconds=0;
    minutes=0;
    hours=0;
    displaytime.innerHTML= "0"+hours+":"+"0"+minutes+":"+"0"+seconds;
    stopbtn();
}