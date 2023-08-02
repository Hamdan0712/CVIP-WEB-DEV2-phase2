let celsiusInput=document.querySelector('.cel-input')
let fahrenInput=document.querySelector('.fahre-input')
let kelInput=document.querySelector('.kel-input')

let btn=document.querySelector('.btn');


function roundNumber(number){
return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input',function(){
    let celtemp=parseFloat(celsiusInput.value)
    let fahtemp=(celtemp*(9/5))+32;
    let keltemp=celtemp+273.15;

    fahrenInput.value=roundNumber(fahtemp);
    kelInput.value=roundNumber(keltemp)
})



fahrenInput.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenInput.value)
    let celtemp=(ftemp-32)*(5/9);
    let keltemp=(ftemp-32)*(5/9)+273.15;
celsiusInput.value=roundNumber(celtemp);
    kelInput.value=roundNumber(keltemp)
})

kelInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelInput.value)
    let celtemp=ktemp-273.15
    let fehtemp=(ktemp-273.15)*(9/5)+32;
celsiusInput.value=roundNumber(celtemp);
fahrenInput.value=roundNumber(fehtemp)
})


btn.addEventListener('click',function(){
    celsiusInput.value=fahrenInput.value=kelInput.value="";
})