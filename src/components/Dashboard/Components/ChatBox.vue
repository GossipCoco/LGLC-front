<template>
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div class="card fiction-card">
    <div class="chatbox">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.user, 'bot-message': !message.user}">
          {{ message.text }}
        </div>
      </div>
      <input type="text" v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
    </div>
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  import Config from '../../../../server'
  export default {
    data() {
      return {
        messages: [],
        userMessage: ''
      };
    },
    methods: {
      async sendMessage() {
        if (this.userMessage.trim() === '') return;
  
        // Add user message to messages
        this.messages.push({ text: this.userMessage, user: true });
  
        // Save the user message
        const userMessage = this.userMessage;
  
        // Clear the input
        this.userMessage = '';
  
        try {
          // Send message to your backend server
          const response = await axios.post(Config.Url+'/api/chat', {
            message: userMessage
          });
  
          // Add bot response to messages
          this.messages.push({ text: response.data.choices[0].text, user: false });
        } catch (error) {
          console.error('Error:', error);
          this.messages.push({ text: 'Error: Unable to communicate with the server.', user: false });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .chatbox {
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 600px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }
  
  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  
  .user-message {
    text-align: right;
    background-color: #d1e7dd;
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
  }
  
  .bot-message {
    text-align: left;
    background-color: #f8d7da;
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
  }
  
  input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  