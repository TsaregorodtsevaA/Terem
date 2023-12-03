const form = document.getElementById('form');
const container = document.querySelector('.container');
const dataOnPage = document.createElement('p');

form.addEventListener('submit', function sentData(event) {
  event.preventDefault();
  const data = new FormData(form);
  const dataObj = {};
  data.forEach(function (value, key) {
    dataObj[key] = value;
    });
  const dataJson = JSON.stringify(dataObj);
  dataOnPage.textContent = dataJson;
  form.reset();
  container.append(dataOnPage);
  getRequest()
})

async function getRequest() {
  let response = await fetch('js/info.json');
  await response.ok ? alert(await response.statusText) : alert(await response.statusText)
}


