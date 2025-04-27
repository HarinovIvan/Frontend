let button = document.getElementById('button');
button.addEventListener('click', function() {
    let i = 10;
    let timer = document.getElementById('timer');
    let stopInt = setInterval(function() {
        timer.textContent = i;
        if (i === 0) {
            clearInterval(stopInt);
        }
        i--;
    }, 1000);
});