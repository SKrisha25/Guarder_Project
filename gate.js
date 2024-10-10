let leftBtn = document.querySelector('.left_btn');
let rightBtn = document.querySelector('.right_btn');
let kimBx = document.querySelectorAll('.kim');

let a = 0;
rightBtn.addEventListener('click', () => {
    a++;
    if (a > kimBx.length - 1) {
        a = 0;
        kimBx[0].classList.remove('dis');
        kimBx[kimBx.length - 1].classList.add('dis');
    }
    kimBx[a].classList.remove('dis');
    kimBx[a - 1].classList.add('dis');
});

leftBtn.addEventListener('click', () => {
    a--;
    if (a < 0) {
        a = kimBx.length - 1;
        kimBx[0].classList.add('dis');
    }
    kimBx[a].classList.remove('dis');
    kimBx[a + 1].classList.add('dis');
});









let forBtn = document.querySelector('.for_btn');
let backBtn = document.querySelector('.back_btn');
let links = document.querySelectorAll('.link');

let b = 0;
backBtn.addEventListener('click', () => {
    b++;
    if (b > links.length - 1) {
        b = 0;
        links[0].classList.remove('hide');
        links[links.length - 1].classList.add('hide');
    }
    links[b].classList.remove('hide');
    links[b - 1].classList.add('hide');
});

forBtn.addEventListener('click', () => {
    b--;
    if (b < 0) {
        b = links.length - 1;
        links[0].classList.add('hide');
    }
    links[b].classList.remove('hide');
    links[b + 1].classList.add('hide');
});