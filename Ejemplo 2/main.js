function init(){
  const button = document.querySelector('#button--get');
  const container = document.querySelector( '#container' );
  const API = "https://randomuser.me/api/";
  
  const getData = () => {
    fetch(API)
    .then(res => res.json())
    .then (data => setData(data.results[0]))
  }

  const setData = (user) => {
    let output = ` 
      <img class="m-auto profile__img" src='${user.picture.large}'/>
      <h1 class="profile__name">${user.name.first}</h1>
      <h3 class="profile__email">${user.email}</h3>
      <h3 class="profile__number">${user.phone}</h3>
      <p class="">Gender: <spaan class="profile__gender">${user.gender}</span></p>`

    container.innerHTML = output
  }

  button.addEventListener('click', getData);
}

init();