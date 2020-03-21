window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    let btn = document.querySelectorAll('.btn');

    // btn.addEventListener('click', (event) => {
    //     event.preventDefault();
    // });

    let a = document.getElementsByClassName("btn");
        a.addEventListener("click", function (e) {
        e.preventDefault();
    });

});