function addClass(el,classe) {
    document.getElementById(el).classList.add(classe);
}

function rmClass(el,classe) {
    document.getElementById(el).classList.remove(classe);
}

function isOverlapping(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right)
    );
}