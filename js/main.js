const grid = document.querySelector('.grid');
const gridEl = document.querySelectorAll('.grid__el');
const btn1 = document.querySelector('.btn-warning');
const title = document.querySelector('.grid__el1');
const btn2 = document.querySelector('.btn-success');
const modal = new bootstrap.Modal(document.querySelector('.modal'));

btn1.addEventListener('click' , () => {
  title.classList.toggle('invisible');
});

btn2.addEventListener('click' , () => {
  gridEl[1].classList.toggle('grid-third');
});

document.addEventListener('DOMContentLoaded', () => {
  modal.show();
});
