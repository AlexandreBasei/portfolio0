document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let pres = document.getElementById('pres');

    let filet = document.getElementById('filet');

    let hauteur = pres.clientHeight+43+'px';

    filet.style.height = hauteur;

    console.log(hauteur);

});