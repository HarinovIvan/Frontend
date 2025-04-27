let htmlElemButton = document.querySelector('#button');
htmlElemButton.addEventListener('click', function() {
    let input = document.querySelector('#input');
    let list = document.querySelector('#list');
    if (input.value !== '') {
        let newList = document.createElement('li');
        newList.textContent = input.value;
        newList.addEventListener('click', function() {
            newList.classList.toggle('item');
        });
        list.appendChild(newList);
        input.value = '';
    }
});