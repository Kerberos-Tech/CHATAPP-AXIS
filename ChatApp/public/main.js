const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

socket.on('message', (message) => {
    const li = document.createElement('li');
    li.textContent = message;
    chatMessages.appendChild(li);
});
