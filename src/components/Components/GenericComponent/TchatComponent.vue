<template>
  <div class="card background-lineart border-none music-card">
    <div class="card-body height-50-vh">
    <div class="chat-box">
      <div v-for="(msg, index) in messages" :key="index">
        <strong>{{ msg.userName }}</strong> : {{ msg.message }}
      </div>
      <input v-model="newMessage" @keyup.enter="send" placeholder="Écris ton message..." />
    </div>
    </div>
  </div>
</template>

<script>
import IOController from "../../../api/SocketIoApi";

export default {
    name: 'TchatComponent',data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  mounted() {
    // IOController.initSocket();
    // // Écoute des messages entrants
    // IOController.socket.on("receiveMessage", (msg) => {
    //   this.messages.push(msg);
    // });
  },
  methods: {
    send() {
      if (this.newMessage.trim()) {
        const msg = {
          userName: this.$store.state.auth.user.Login,
          message: this.newMessage,
        };
        IOController.sendMessage(msg);
        this.messages.push(msg);
        this.newMessage = "";
      }
    },
  },
};
</script>