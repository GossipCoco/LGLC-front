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
        <LinkGenerateImage />
        <div class="col-md-6">
          <label for="inputImage" class="form-label text-white">Envoyer une image</label>
          <input
            type="file"
            class="form-control"
            id="inputImage"
            @change="onFileChange"
          />
        </div>
        <div class="col-md-2 create-character-button display-flex">
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
      <!-- <div class="row">
        <div class="col-12">
          
        </div>
      </div> -->
    </form>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import InputName from "../../Components/FormComponent/InputName.vue";
import GerenicSelect from "../../Components/FormComponent/GenericSelect.vue";
import GenericTextarea from "../../Components/FormComponent/GenericTextarea.vue";
import LinkGenerateImage from "../../Components/FormComponent/LinkGenerateImage.vue";
export default {
  name: "OriginalCharacterForm",
  components: {
    InputName,
    GerenicSelect,
    GenericTextarea,
    LinkGenerateImage
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
        Image: null,
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
        Image: null,
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
        const Description = this.form.Description
        ? this.form.Description.split("\n")
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("")
        : "";
      this.form.Description = Description;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getPersonnality(e) {
      if (this.form) {
        this.form.Personnality = e;
        const Personnality = this.form.Personnality
        ? this.form.Personnality.split("\n")
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("")
        : "";
        this.form.Personnality = Personnality;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    getbiography(e) {

      if (this.form) {
        this.form.Biography = e;
        const Biography = this.form.Biography
        ? this.form.Biography.split("\n")
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("")
        : "";
        this.form.Biography = Biography;
      } else {
        console.error("L'objet `form` n'est pas défini.");
      }
    },
    onFileChange(e) {
      if (this.form) {
        const file = e.target.files[0];
        this.form.Image = file;
        
      }else {
        console.error("L'objet `form` n'est pas défini.");
      }

    },
    handleOk() {
      console.log(this.form);
      const formData = new FormData();
  formData.append('image', this.form.Image); // Utilisez le nom de champ `image` comme dans votre route
  formData.append('UserId', this.form.UserId);
  formData.append('UserName', this.form.UserName);
  formData.append('KitName', this.form.KitName);
  formData.append('ApprenticeName', this.form.ApprenticeName);
  formData.append('WarriorName', this.form.WarriorName);
  formData.append('ClanId', this.form.ClanId);
  formData.append('Status', this.form.Status);
  formData.append('Genre', this.form.Genre);
  formData.append('GradeId', this.form.GradeId);
  formData.append('Personnality', this.form.Personnality);
  formData.append('Biography', this.form.Biography);
  formData.append('Description', this.form.Description);
      this.CreateAnOriginalCharacter(this.form.UserId, this.form);
    },
    async CreateAnOriginalCharacter(id, formData){
      console.log(id, formData);
      try{
        const response = await CharacterService.CreateAnOriginalCharacter(id, formData)
        console.log('Réponse de la création de fiction :', response);
      
      if (response && response.data) { // Assure-toi que la réponse contient bien les données attendues
        console.log('Fiction créée avec succès, redirection...');
        this.$router.push({
          path: "/OriginaleCharacterByUser",
        });
      } else {
        console.error('Erreur lors de la création de la fiction, réponse inattendue :', response);
        this.$router.push({
          path: "/OriginaleCharacterByUser",
        });
      }
      }
      catch (error) {
      console.error('Erreur lors de la création de la fiction :', error);
      this.$router.push({
          path: "/OriginaleCharacterByUser",
        });
    }
    }
  },
};
</script>