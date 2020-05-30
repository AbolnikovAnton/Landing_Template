window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let href = document.querySelectorAll('a[href]');

    href.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
        });
    });
});