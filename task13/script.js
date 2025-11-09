const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(li => {
            li.classList.remove('highlight');
        });

        item.classList.add('highlight');
    });
});










