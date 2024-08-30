// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    const messageInput = document.getElementById("message-input");
    const chatBox = document.querySelector(".chat-box");
    const fileInput = document.getElementById("file-input");
    const fileButton = document.getElementById("file-button");
    const darkModeToggle = document.getElementById("dark-mode");
    const divider = document.getElementById("divider");
    const sidebar = document.querySelector(".sidebar");
    const chatArea = document.querySelector(".chat-area");
  
    // Function to add a new message
    function addMessage(content, isFile = false) {
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.textContent = content;
      if (isFile) {
        newMessage.style.fontStyle = "italic";
      }
      chatBox.appendChild(newMessage);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
  
    // Send message on button click
    sendButton.addEventListener("click", function() {
      const messageText = messageInput.value.trim();
      if (messageText) {
        addMessage(messageText);
        messageInput.value = "";
      }
    });
  
    // Send message on Enter key press
    messageInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendButton.click();
      }
    });
  
    // File input button click handler
    fileButton.addEventListener("click", function() {
      fileInput.click();
    });
  
    // Handle file input change
    fileInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        addMessage(`Sent a file: ${file.name}`, true);
      }
    });
  
    // Dark mode toggle
    darkModeToggle.addEventListener("change", function() {
      document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });
  
    // Make the divider draggable
    let isDragging = false;
  
    divider.addEventListener("mousedown", function(e) {
      isDragging = true;
      document.body.style.cursor = 'ew-resize';
    });
  
    document.addEventListener("mousemove", function(e) {
      if (!isDragging) return;
      const newWidth = e.clientX;
      sidebar.style.width = newWidth + "px";
      chatArea.style.flex = `1 1 calc(100% - ${newWidth}px)`;
    });
  
    document.addEventListener("mouseup", function() {
      isDragging = false;
      document.body.style.cursor = 'default';
    });
  });
  
