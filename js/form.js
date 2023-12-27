const form = document.getElementById('form');
const dataOnPage = document.querySelector('.data');


async function getRequest(data) {
  let url = `https://jsonplaceholder.typicode.com/posts?name=${data.name}&surname=${data.surname}&one=${data.select1}&two=${data.select2}&three=${data.select3}&four=${data.select4}&five=${data.select5}`;
  let response = await fetch(url);
  if (!response.ok) {
    alert(`Ошибка`);
  } else {
    alert(`Готово, данные отправились`);
  }
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