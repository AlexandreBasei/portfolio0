document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let defil = window.scrollY;
    let ham1 = document.querySelector("#ham1");
    let ham2 = document.querySelector("#ham2");
    let ham3 = document.querySelector("#ham3");

    window.addEventListener('scroll', function() {
        defil = window.scrollY;
        console.log(defil);

        if (defil >= 630) {
            ham3.style.backgroundColor = 'black';
        }
        if (defil >= 642) {
            ham2.style.backgroundColor = 'black';
        }
        if (defil >= 649) {
            ham1.style.backgroundColor = 'black';
        }
        if (defil <= 629) {
            ham3.style.backgroundColor = 'white';
        }
        if (defil <= 634) {
            ham2.style.backgroundColor = 'white';
        }
        if (defil <= 643) {
            ham1.style.backgroundColor = 'white';
        }

        switch (defil) {
            case 630:
                ham3.style.backgroundColor = 'black';
                console.log(defil);
            case 642:
                ham2.style.backgroundColor = 'black';
                console.log(defil);
            case 649:
                ham1.style.backgroundColor = 'black';
                console.log(defil);
            case 630:
                ham3.style.backgroundColor = 'white';
                console.log(defil);
            case 632:
                ham2.style.backgroundColor = 'white';
                console.log(defil);
            case 641:
                ham1.style.backgroundColor = 'white';
                console.log(defil);
            default:
                
        }
    })
});