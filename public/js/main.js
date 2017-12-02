const numberInput = document.getElementById('number'),
      textInput = document.getElementById('text'),
      button = document.getElementById('button'),
      status = document.querySelector('.response');

button.addEventListener('click', send, false);

function send () {
    const number = numberInput.value.replace(/\D/g, ''),
          text = textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({number: number, text: text})
    })
    .then((res)=> {
        console.log(res);
    })
    .catch((err)=> {
        console.log(err);
    });
}