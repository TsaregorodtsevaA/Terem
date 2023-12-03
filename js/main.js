const grid = document.querySelector('.grid');
const gridEl = document.querySelectorAll('.grid__el');
const btn1 = document.querySelector('.btn-warning');
const title = document.querySelector('.grid__el1');
const btn2 = document.querySelector('.btn-success');

btn1.addEventListener('click' , () => {
  title.classList.toggle('invisible');
})

let notChanged = true;
btn2.addEventListener('click', function() {
  if(notChanged) {
    gridEl[2].parentNode.insertBefore(gridEl[2], gridEl[1])
    notChanged = false;
  }
  else {
    gridEl[1].parentNode.insertBefore(gridEl[1], gridEl[2])
    notChanged = true
  }
})

const modal = new bootstrap.Modal(document.querySelector('.modal'));
document.addEventListener('DOMContentLoaded', () => {
  modal.show()
})
