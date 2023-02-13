document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = document.getElementById('burger');
    let croix = document.getElementById('burger2');
    let carL = document.getElementById("carouselL");
    let carR = document.getElementById("carouselR");
    let proj = 1;
    let nav = document.querySelectorAll("header nav a");
    let fond = document.getElementById("title-container");

    burger.addEventListener("click", () => {
        document.querySelector('html').style.overflowY = "hidden";
    });

    croix.addEventListener("click", () => {
        document.querySelector('html').style.overflowY = "auto";
    });

    window.addEventListener('scroll', function () {

        if (window.innerWidth > 1400) {

            if (isOverlapping(nav[0], fond)) {
                burger.children[0].style.backgroundColor = "white";
                burger.children[1].style.backgroundColor = "white";
                burger.children[2].style.backgroundColor = "white";
                nav[0].style.color = "white";
                nav[1].style.color = "white";
                document.getElementById("ico1").setAttribute("colors", "primary:#ffffff");
                document.getElementById("ico2").setAttribute("colors", "primary:#ffffff");

            } else {
                burger.children[0].style.backgroundColor = "black";
                burger.children[1].style.backgroundColor = "black";
                burger.children[2].style.backgroundColor = "black";
                nav[0].style.color = "black";
                nav[1].style.color = "black";
                document.getElementById("ico1").setAttribute("colors", "primary:#000000");
                document.getElementById("ico2").setAttribute("colors", "primary:#000000");
            }
        }
        else{

            if (isOverlapping(nav, fond)) {
                burger.children[0].style.backgroundColor = "white";
                burger.children[1].style.backgroundColor = "white";
                burger.children[2].style.backgroundColor = "white";
        
            } else {
                burger.children[0].style.backgroundColor = "black";
                burger.children[1].style.backgroundColor = "black";
                burger.children[2].style.backgroundColor = "black";
            }
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