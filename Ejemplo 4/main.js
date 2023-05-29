function init(){
  const form = document.querySelector( '#login' )
  const msg = document.querySelector( '#msg' )
  const API = "post.php"

  const setData = ( info ) => {
    let style = info === 'error' ? 'danger' : 'success'
    let text = info === 'error' ? 'El usuario no existe' : info
    
    let output = `
      <div class="alert alert-${style}">
        ${text}
      </div>`

      msg.innerHTML = output;
  }

  const sendForm = (e) => {
    e.preventDefault()
    
    let data = new FormData( form )
   
    fetch(API, {
      method: 'POST',
      body: data
    })
    .then( res => res.json() )
    .then( info => setData(info))
  }

  form.addEventListener('submit', e => sendForm(e))
}

init();