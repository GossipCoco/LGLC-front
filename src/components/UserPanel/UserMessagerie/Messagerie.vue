<template>
  <div class="dashboard-max  flex-one  card display-flex-column fiction-container">
    <CardHeader v-bind:Title="'Ma messagerie'" />
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <ul class="list-group">
            <li
              class="list-group-item messagerie-list-container"
              v-for="(message, index) in allMessages"
              :key="index"
              @click="selectMessage(message)"
              style="cursor: pointer"
            >
              <span class="badge text-bg-primary rounded-pill">{{
                new Date(message.DateSend).toLocaleString()
              }}</span>
              <p>{{ message.Title }}</p>
            </li>
          </ul>
        </div>
        <div class="col-8 select-message-container" v-if="selectedMessage">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">{{ selectedMessage.Title }}</h3>
            </div>
            <div class="card-body">
              <div class="send--message-by-container">
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
                <p>
                  <strong>Statut :</strong>
                  <span v-if="selectedMessage.Status === 'unread'">Non lu</span>
                  <span v-if="selectedMessage.Status === 'read'">Lu</span>
                </p>
              </div>
              <p class="message-container">
                <strong>Contenu du message :</strong><br><br> {{ selectedMessage.Content }}
              </p>
            </div>
            <div class="card-footer text-body-secondary">
              <p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="ChangeStatusMessage(selectedMessage.Id)"
                >
                  Marquer comme lu
                </button>
              </p>
            </div>
          </div>
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
      read: "read",
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
    ChangeStatusMessage(id) {
      console.log(id);
      UserService.ChangeStatusMessage(id, this.read)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
    },
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