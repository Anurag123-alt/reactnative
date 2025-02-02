let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let mindiv=document.getElementById('min');
let secdiv=document.getElementById('sec');
let milisecdiv=document.getElementById('milisec');


let milisec=0;
let sec=0;
let min=0;

function milisc() {
     milisec++;
          let digitmilisec=milisec <= 9 ? milisec= "0" + milisec: milisec;

          milisecdiv.innerHTML=digitmilisec;
}
function sc() {
     milisec=0;

          
          sec++;  
          let digitsec=sec <= 9 ? sec= "0" + sec: sec;

          secdiv.innerHTML=digitsec;
}


function mn() {
     sec=0;

          
               min++; 
          let digitmin=min <= 9 ? min= "0" + min: min;
                
               secdiv.innerHTML=digitmin;
}

start.addEventListener('click',()=>{
int=setInterval(()=>{
          milisc();
          if (milisec == 100) {
     
     sc();
     
          if (sec == 60) {
          
     mn();
          }
     
          
     }
     
     
     },10)
    start.disabled=true;
})


stop.addEventListener('click',()=>{
     clearInterval(int);

    start.disabled=false;
     
})

reset.addEventListener('click',()=>{

     milisec = 0;
     sec = 0;
     min = 0;
     milisecdiv.innerHTML = "00";
     secdiv.innerHTML = "00";
     mindiv.innerHTML = "00";
     start.disabled = false;
     clearInterval(int);

})



 
 








































