const form = document.getElementById('form');
const container = document.querySelector('.container');
const dataOnPage = document.querySelector('.data');

async function getRequest() {
  let response = await fetch('js/info.json');
  await response.ok ? alert(await response.statusText) & form.reset() : alert(await response.statusText);
};

function sentData(event) {
  event.preventDefault();
  const data = new FormData(this);
  const dataObj = {};
  data.forEach(function (value, key) {
    dataObj[key] = value;
    });
  const dataJson = JSON.stringify(dataObj);
  dataOnPage.textContent = dataJson;
  getRequest();
};

form.addEventListener('submit', sentData);