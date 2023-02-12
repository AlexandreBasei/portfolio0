document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = document.getElementById('burger');
    let croix = document.getElementById('burger2');
    let carL = document.getElementById("carouselL");
    let carR = document.getElementById("carouselR");
    let proj = 1;
    let nav = document.querySelector("header nav");
    let fond = document.getElementById("title-container");

    burger.addEventListener("click", () => {
        document.querySelector('html').style.overflowY = "hidden";
    });

    croix.addEventListener("click", () => {
        document.querySelector('html').style.overflowY = "auto";
    });

    window.addEventListener('scroll', function () {

        if (isOverlapping(nav, fond)) {
            burger.children[0].style.backgroundColor = "white";
            burger.children[1].style.backgroundColor = "white";
            burger.children[2].style.backgroundColor = "white";
            nav.children[0].style.color = "white";
            nav.children[1].style.color = "white";
    
        } else {
            burger.children[0].style.backgroundColor = "black";
            burger.children[1].style.backgroundColor = "black";
            burger.children[2].style.backgroundColor = "black";
            nav.children[0].style.color = "black";
            nav.children[1].style.color = "black";
        }
    });
    
    carL.addEventListener("click", () => {

        switch (proj) {
            case 2:
                addClass('p2', 'droite');
                rmClass('p2', 'centre');
                addClass('p1', 'centre');
                rmClass('p1', 'gauche');
                proj = 1;
                break;
            case 3:
                addClass('p3', 'droite');
                rmClass('p3', 'centre');
                addClass('p2', 'centre');
                rmClass('p2', 'gauche');
                proj = 2;

            default:
                break;
        }
    });

    carR.addEventListener("click", () => {

        switch (proj) {
            case 1:
                addClass('p1', 'gauche');
                rmClass('p1', 'centre');
                addClass('p2', 'centre');
                rmClass('p2', 'droite');
                proj = 2;
                break;
            case 2:
                addClass('p2', 'gauche');
                rmClass('p2', 'centre');
                addClass('p3', 'centre');
                rmClass('p3', 'droite');
                proj = 3;
            default:
                break;
        }
    });
});