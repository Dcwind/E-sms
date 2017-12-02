const numberInput = document.getElementById('number'),
      textInput = document.getElementById('text'),
      button = document.getElementById('button'),
      status = document.querySelector('.response');

button.addEventListener('click', send, false);

socket = io();

socket.on('smsStatus', (data) => {
    status.innerHTML = `<h5>Text message has be sent to ${data.number}</h5>`; 
})

function clear() {
    numberInput.value = '';
    textInput.value = '';
}

function send () {
    const number = numberInput.value.replace(/\D/g, ''),
          text = textInput.value;
    
    if(number !== '' && text !==''){
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
    }else{
        console.log('Input field is empty');
    }
    
    clear();
}