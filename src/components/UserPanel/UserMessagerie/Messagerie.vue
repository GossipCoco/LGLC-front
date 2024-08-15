<template>
  <div class="dashboard-max-card-container card fiction-container">
    <CardHeader v-bind:Title="'Ma messagerie'" />
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(message, index) in allMessages"
              :key="index"
              @click="selectMessage(message)"
              style="cursor: pointer"
            >
              {{ message.Title }}
            </li>
          </ul>
        </div>
        <div class="col-6" v-if="selectedMessage">
          <h3>{{ selectedMessage.Title }}</h3>
          <p>
            <strong>Envoyé par :</strong>
            {{ selectedMessage.Sender.FirstName }}
            {{ selectedMessage.Sender.LastName }} ({{
              selectedMessage.Sender.UserName
            }})
          </p>
          <p>
            <strong>Date :</strong>
            {{ new Date(selectedMessage.DateSend).toLocaleString() }}
          </p>
          <p><strong>Contenu :</strong> {{ selectedMessage.Content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import UserService from "../../../services/UserService";

export default {
  name: "Messagerie",
  components: { CardHeader },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      allMessages: [],
      selectedMessage: null, // Pour stocker le message sélectionné
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 10,
      },
    };
  },
  created() {
    this.GetMessageByReceiverId();
  },
  methods: {
    GetMessageByReceiverId() {
      UserService.GetMessageByReceiverId(this.usrId, this.nav)
        .then((response) => {
          console.log(response.data.ob);
          this.allMessages = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    selectMessage(message) {
      this.selectedMessage = message; // Met à jour le message sélectionné
    },
  },
};
</script>