
let elements = document.querySelectorAll('.box');

document.getElementById('changeFontWeight').addEventListener('click', function() {

    elements.forEach(function(element) {
        element.style.fontWeight = 'bold';
        element.style.color = 'red';
        element.style.fontSize = '20px';
    });

    setTimeout(function() {
        elements.forEach(function(element) {
            element.style.fontWeight = 'normal';
            element.style.color = 'black';
            element.style.fontSize = '';
        });
    }, 3000);
});
