// Get elements
const chatOpenBtn = document.getElementById('chatOpenBtn');
const chatBox = document.getElementById('chatBox');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

// Open Chat
chatOpenBtn.addEventListener('click', () => {
  chatBox.style.display = 'flex';
});

// Close Chat
chatCloseBtn.addEventListener('click', () => {
  chatBox.style.display = 'none';
});

// Send Message
sendBtn.addEventListener('click', sendMessage);

// Also allow Enter key to send
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    // Create a chat bubble or paragraph
    const userMsg = document.createElement('div');
    userMsg.style.margin = '5px 0';
    userMsg.innerHTML = `<strong>You:</strong> ${message}`;

    chatBody.appendChild(userMsg);
    chatInput.value = '';

    // Auto-scroll chatBody
    chatBody.scrollTop = chatBody.scrollHeight;

    // In a real scenario, you would send the `message` to your server 
    // or an API, then handle the response here. 
  }
}
