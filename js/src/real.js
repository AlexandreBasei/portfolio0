document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let dev = document.getElementById("dev");
    let graph = document.getElementById("graph");
    let audiov = document.getElementById("audiov");
    let page = 1;
    let nav = document.querySelectorAll("header nav a");
    let fond = document.getElementById("banner");
    let burger = document.getElementById('burger');
    let projets = document.querySelectorAll(".projet");

    document.querySelector('body').addEventListener('scroll', function () {
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
        else {

            if (isOverlapping(burger, fond)) {
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

    dev.addEventListener("click", () => {

        switch (page) {
            case 2:
                addClass('banner', 'b1');
                rmClass('banner', 'b2');
                rmClass('partie2', 'caché');
                addClass('partie2', 'droite');
                rmClass('partie2', 'centre');
                addClass('partie1', 'centre');
                rmClass('partie1', 'gauche');

                page = 1;
                break;
            case 3:
                addClass('banner', 'b1');
                rmClass('banner', 'b3');
                addClass('partie3', 'droite');
                rmClass('partie3', 'centre');
                addClass('partie2', 'caché');
                addClass('partie2', 'droite');
                rmClass('partie2', 'gauche');
                addClass('partie1', 'centre');
                rmClass('partie1', 'gauche');

                addClass('partie2', 'droite');

                page = 1;
            default:
                break;
        }
    });

    graph.addEventListener("click", () => {

        switch (page) {
            case 1:
                addClass('banner', 'b2');
                rmClass('banner', 'b1');
                rmClass('partie2', 'caché');
                addClass('partie2', 'centre');
                rmClass('partie2', 'droite');
                rmClass('partie2', 'gauche');
                addClass('partie1', 'gauche');
                rmClass('partie1', 'centre');
                page = 2;
                break;
            case 3:
                addClass('banner', 'b2');
                rmClass('banner', 'b3');
                rmClass('partie2', 'caché');
                rmClass('partie3', 'centre');
                addClass('partie3', 'droite');
                addClass('partie2', 'centre');
                rmClass('partie2', 'gauche');


                page = 2;
            default:
                break;
        }
    });

    audiov.addEventListener("click", () => {

        switch (page) {
            case 1:
                addClass('banner', 'b3');
                rmClass('banner', 'b1');
                addClass('partie1', 'gauche');
                rmClass('partie1', 'centre');
                addClass('partie3', 'centre');
                rmClass('partie3', 'droite');
                addClass('partie2', 'caché');
                addClass('partie2', 'gauche');
                rmClass('partie2', 'droite')
                page = 3;
                break;
            case 2:
                addClass('banner', 'b3');
                rmClass('banner', 'b2');
                addClass('partie3', 'centre');
                rmClass('partie3', 'droite');
                addClass('partie2', 'gauche');
                rmClass('partie2', 'centre');
                page = 3;
            default:
                break;
        }
    });
});