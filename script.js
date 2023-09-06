var sec=0
var min=0
var hr=0
var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}


function start(){
    watch() //ja larga um segundo
    interval= setInterval(watch,1000)
}
function pause(){
   clearInterval(interval)
}
function stop(){
   clearInterval(interval)
   document.getElementById('watch').innerText='00:00:00'
   sec=0
   min=0
   hr=0
}


function watch(){
   sec++
   if(sec==60){
    min++
    sec=0
        if(min==60){
            min=0
            hr++
        }
   }
   document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
                                    //muda texto interno
}
