<template>
  <div class="card-body" style="height: 80vh">
    <form
      class="create-original-character-form"
      @submit.stop.prevent="onSubmit"
    >
      <div class="row">
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputName'"
          v-bind:label="'Nom actuel du personnage'"
          v-bind:getNameData="'getUserName'"
          @getUserName="getUserName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputKitName'"
          v-bind:label="'Nom de chaton'"
          v-bind:getNameData="'getKitName'"
          @getKitName="getKitName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputApprenticeName'"
          v-bind:label="'Nom d\'apprenti'"
          v-bind:getNameData="'getNameApprentice'"
          @getNameApprentice="getNameApprentice"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputWarriorName'"
          v-bind:label="'Nom de Guerrier/Guérisseur'"
          v-bind:getNameData="'getWarriorName'"
          @getWarriorName="getWarriorName"
        />
      </div>
      <div class="row">
        <GerenicSelect
          v-bind:For="'SearchClan'"
          v-bind:label="'Clan'"
          v-bind:formdata="'getclan'"
          v-bind:col="'col-3'"
          @getclan="getclan"
        />
        <GerenicSelect
          v-bind:For="'SearchGrade'"
          v-bind:label="'Grade'"
          v-bind:formdata="'getgrade'"
          v-bind:col="'col-3'"
          @getgrade="getgrade"
        />
        <GerenicSelect
          v-bind:For="'SearchGenre'"
          v-bind:label="'Genre'"
          v-bind:col="'col-3'"
          v-bind:formdata="'getgenre'"
          @getgenre="getgenre"
        />
        <GerenicSelect
          v-bind:For="'SearchStatus'"
          v-bind:label="'Status'"
          v-bind:col="'col-3'"
          v-bind:formdata="'getStatus'"
          @getStatus="getStatus"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'description'"
          v-bind:label="'Description'"
          v-bind:rows="3"
          v-bind:getData="'getDescription'"
          @getDescription="getDescription"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'personnality'"
          v-bind:label="'Personnalité'"
          v-bind:rows="3"
          v-bind:getData="'getPersonnality'"
          @getPersonnality="getPersonnality"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'biography'"
          v-bind:label="'Biographie'"
          v-bind:rows="3"
          v-bind:getData="'getbiography'"
          @getbiography="getbiography"
        />
      </div>
      <div class="row">
        <div class="col-12">
          <button
            class="btn btn-primary"
            type="submit"
            v-on:click="handleOk"
            title="endpart"
          >
            Créer le personnage
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import InputName from "../../Components/FormComponent/InputName.vue";
import GerenicSelect from "../../Components/FormComponent/GenericSelect.vue";
import GenericTextarea from "../../Components/FormComponent/GenericTextarea.vue";
export default {
  name: "OriginalCharacterForm",
  components: {
    InputName,
    GerenicSelect,
    GenericTextarea,
  },
  date() {
    return {
      genres: [
        { name: "Mâle", id: "Mâle" },
        { name: "Femelle", id: "Femelle" },
      ],
      NameKitty: "Nom d'apprenti",
      grades: [],
      Allclans: [],
      form: {
        UserId: this.$store.state.auth.user.usrID,
        UserName: null,
        imageChar: null,
        Description: null,
        Biography: null,
        ClanId: null,
        Status: null,
        Genre: null,
        GradeId: null,
        Personnality: null,
        KitName: null,
        ApprenticeName: null,
        WarriorName: null,
      },
    };
  },
  mounted() {
    if (!this.form) {
      this.form = {
        UserId: this.$store.state.auth.user.usrID,
        UserName: null,
        KitName: null,
        ApprenticeName: null,
        WarriorName: null,
        ClanId: null,
        Status: null,
        Genre: null,
        GradeId: null,
        Personnality: null,
        Biography: null,
        Description: null,
      };
    }
  },
  methods: {
    getUserName(e) {
      if (this.form) {
        this.form.UserName = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getKitName(e) {
      if (this.form) {
        this.form.KitName = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getclan(e) {
      if (this.form) {
        this.form.ClanId = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getgrade(e) {
      if (this.form) {
        this.form.GradeId = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getNameApprentice(e) {
      if (this.form) {
        this.form.ApprenticeName = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getWarriorName(e) {
      if (this.form) {
        this.form.WarriorName = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getgenre(e) {
      if (this.form) {
        this.form.Genre = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getStatus(e) {
      if (this.form) {
        this.form.Status = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getDescription(e) {
      if (this.form) {
        this.form.Description = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getPersonnality(e) {
      if (this.form) {
        this.form.Personnality = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getbiography(e) {
      console.log(e);
      if (this.form) {
        this.form.Biography = e;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    handleOk() {
      console.log(this.form);
    },
  },
};
</script>