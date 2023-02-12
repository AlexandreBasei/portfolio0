document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let dev = document.getElementById("dev");
    let graph = document.getElementById("graph");
    let audiov = document.getElementById("audiov");
    let page = 1;
    let nav = document.querySelector("header nav");
    let fond = document.getElementById("banner");
    let burger = document.getElementById('burger');

    window.addEventListener('scroll', function () {
        if (isOverlapping(nav, fond)) {
            burger.children[0].style.backgroundColor = "white";
            burger.children[1].style.backgroundColor = "white";
            burger.children[2].style.backgroundColor = "white";
            nav.children[0].style.color = "white";
            nav.children[1].style.color = "white";
            console.log("The fixed div is on the red background");
    
        } else {
            burger.children[0].style.backgroundColor = "black";
            burger.children[1].style.backgroundColor = "black";
            burger.children[2].style.backgroundColor = "black";
            nav.children[0].style.color = "black";
            nav.children[1].style.color = "black";
            console.log("The fixed div is not on the red background");
        }
    });

    dev.addEventListener("click", () => {

        switch (page) {
            case 2:
                addClass('banner','b1');
                rmClass('banner', 'b2');
                rmClass('partie2','caché');
                addClass('partie2','droite');
                rmClass('partie2','centre');
                addClass('partie1','centre');
                rmClass('partie1','gauche');
                
                page = 1;
                break;
            case 3:
                addClass('banner','b1');
                rmClass('banner','b3');
                addClass('partie3','droite');
                rmClass('partie3','centre');
                addClass('partie2','caché');
                addClass('partie2','droite');
                rmClass('partie2','gauche');
                addClass('partie1','centre');
                rmClass('partie1','gauche');
                
                addClass('partie2','droite');
                
                page = 1;
            default:
                break;
        }
    });

    graph.addEventListener("click", () => {

        switch (page) {
            case 1:
                addClass('banner','b2');
                rmClass('banner', 'b1');
                rmClass('partie2','caché');
                addClass('partie2','centre');
                rmClass('partie2','droite');
                rmClass('partie2','gauche');
                addClass('partie1','gauche');
                rmClass('partie1','centre');
                page = 2;
                break;
            case 3:
                addClass('banner','b2');
                rmClass('banner','b3');
                rmClass('partie2','caché');
                rmClass('partie3','centre');
                addClass('partie3','droite');
                addClass('partie2','centre');
                rmClass('partie2','gauche');
                
                
                page = 2;
            default:
                break;
        }
    });

    audiov.addEventListener("click", () => {

        switch (page) {
            case 1:
                addClass('banner','b3');
                rmClass('banner', 'b1');
                addClass('partie1','gauche');
                rmClass('partie1','centre');
                addClass('partie3','centre');
                rmClass('partie3','droite');
                addClass('partie2','caché');
                addClass('partie2','gauche');
                rmClass('partie2','droite')
                page = 3;
                break;
            case 2:
                addClass('banner','b3');
                rmClass('banner','b2');
                addClass('partie3','centre');
                rmClass('partie3','droite');
                addClass('partie2','gauche');
                rmClass('partie2','centre');
                page = 3;
            default:
                break;
        }
    });
});