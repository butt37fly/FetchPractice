function init(){
  const button = document.querySelector('#button--get');
  const container = document.querySelector( '#container' );
  const API = "data.json";
  
  const getData = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => setData(data))
  }

  const setData = (data) => {
    let output = ""

    data.forEach( user => {
      output += `  
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.nombre}</td>
        <td>${user.estado === 1 ? "Activo" : "Ausente" }</td>
      </tr>`
    });

    container.innerHTML = output;
  }

  button.addEventListener('click', getData);
}

init();