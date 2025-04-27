let button = document.getElementById('button');
button.addEventListener('click', function() {
    let effect = document.getElementById('effect');
    effect.textContent = 'Эффект начался';

    function randomColor() {
        let numbers = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += numbers[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let stopInt = setInterval(function() {
        effect.style.color = randomColor();
    }, 2000);

    setTimeout(function() {
        clearInterval(stopInt);
    }, 10000);
});
