function init(){
  const button = document.querySelector('#button--get');
  const container = document.querySelector( '#container .content' );

  const getData = () => {
    fetch('data.txt')
    .then( data => data.text() )
    .then( data => {
      container.textContent = data;
    })
  }

  button.addEventListener('click', getData);
}

init();