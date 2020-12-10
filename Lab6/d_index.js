const table = document.getElementById('table');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');

function add2Table() {
  const row = document.createElement('tr');
  const nameData = document.createElement('td');
  const surnameData = document.createElement('td');
  const ageData = document.createElement('td');
  nameData.textContent = name.value;
  surnameData.textContent = surname.value;
  ageData.textContent = age.value;
  row.appendChild(nameData);
  row.appendChild(surnameData);
  row.appendChild(ageData);
  table.appendChild(row);
}
