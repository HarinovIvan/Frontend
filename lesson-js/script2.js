let i = 0;
let stopInt = setInterval(() => {
    console.log(i++);
    if(i === 10){
        clearInterval(stopInt);
    }
}, 1000);