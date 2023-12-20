const form = document.getElementById('form');
const dataOnPage = document.querySelector('.data');

async function getRequest(data) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send(data);
  xhr.onload = function() {
    if (xhr.status != 200) {
      alert(`Ошибка`);
    } else {
      alert(`Готово, данные отправились`);
    }
  };
}


function sentData(event) {
  event.preventDefault();
  let data = new FormData(this);
  data.forEach(function (value, key) {
    data[key] = value;
    });
  const dataJson = JSON.stringify(data);
  dataOnPage.textContent = dataJson;
  getRequest(data);
};

form.addEventListener('submit', sentData);