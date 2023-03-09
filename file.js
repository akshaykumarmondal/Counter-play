let increment = document.getElementById("increment");

let add = document.getElementById("add");

let subtract = document.getElementById("subtract");

let reset = document.getElementById("reset");

let incrementNumber=1;

increment.addEventListener("change" ,(e)=>{

    incrementNumber=parseInt(e.target.value);
    // console.log(incrementNumber);
})

add.addEventListener('click',(e)=>{

    let currentValue=document.getElementById('number');
    let total= parseInt(currentValue.innerText) + (incrementNumber);

    currentValue.innerText=total;
})

subtract.addEventListener('click',(e)=>{

    let currentValue=document.getElementById('number');
    let total= parseInt(currentValue.innerText) - (incrementNumber);

    if(total<0){

        total=0;
    }

    currentValue.innerText=total;
})

reset.addEventListener('click',(e)=>{

    let currentValue=document.getElementById('number');
    
    currentValue.innerText=0;
})