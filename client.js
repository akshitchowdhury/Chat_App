var socket = io();
var message = document.getElementById('messages')
var form = document.getElementById('form');
var input = document.getElementById("ínput");

form.addEventListener('submit', function(e){

    e.preventDefault();

    if(input.value){
        socket.emit("çhat message", input.value);
        input.value = '';
    }

    socket.on('chat message'), (msg)=>{
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    }

})