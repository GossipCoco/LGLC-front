<template>
    <div class="dashboard-max-card-container card fiction-container">
        <div class="card-body">
            <form class="create-character-form" @submit.stop.prevent="handleOk" ref="uploadForm">
                <div class="col-12">
                    <div class="mb-3">
                        <label for="Title" class="form-label">Titre de la fiction</label>
                        <input id="Title" type="text" class="form-control" v-model="form.Title" />
                    </div>
                    <div class="mb-3">
                        <div class="row">
                            <div class="col">
                                <label for="FirstCharacterId" class="form-label">Sélectionner un personnage</label>
                                <select id="FirstCharacterId" class="form-select" aria-label="Default select example"
                                    v-model="form.FirstCharacterId">
                                    <option selected disabled>Sélectionner le premier personnage</option>
                                    <option v-for="(character, index) in characters" :value="character.Id" :key="index">
                                        {{ character.CurrentName }}
                                    </option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="SecondCharacterId" class="form-label">Sélectionner un personnage</label>
                                <select id="SecondCharacterId" class="form-select" aria-label="Default select example"
                                    v-model="form.SecondCharacterId">
                                    <option selected disabled>Sélectionner le second personnage</option>
                                    <option v-for="(character, index) in characters" :value="character.Id" :key="index">
                                        {{ character.CurrentName }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="Summary" class="form-label">Résumé de la fiction</label>
                        <textarea v-model="form.Summary" class="form-control" id="Summary" rows="12"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                Générer une image avec
                                <div class="logo-wrapper-contain">
                                    <div class="logo">
                                        <a target="_blank" href="https://chatgpt.com/"><img
                                                src="/images/Logos/chatgpt.png" /></a>
                                    </div>
                                    <div class="logo">
                                        <a target="_blank" href="https://copilot.microsoft.com"><img
                                                src="/images/Logos/copilot-logo-0.png" /></a>
                                    </div>
                                    <div class="logo">
                                        <a target="_blank" href="https://firefly.adobe.com/"><img
                                                src="/images/Logos/adobe-firefly5419.logowik.com.webp" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="file" class="form-label">Image de couverture</label>
                                <input type="file" class="form-control" @change="handleFileUpload" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Créer la fiction</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import GameService from '../../../services/GameService'
import CharacterService from '../../../services/CharacterService';
import axios from 'axios';
import Config from '../../../../server'

export default {
    name: 'CreateFiction',
    inject: ["user"],
    data() {
        return {
            userCurrent: this.$store.state.auth.user.usrID,
            textInput: null,
            characters: {},
            form: {
                Title: null,
                Summary: null,
                FirstCharacterId: null,
                SecondCharacterId: null,                
                LocationId: null
            },
            file: null,
            prompt: '',
            imageUrl: null
        }
    },
    created() {
        this.GetAllNamesAndIdsCharacters()
    },
    methods: {
        async generateImage() {
            try {
                const response = await axios.post(Config.Url + '/api/generate-image', {
                    prompt: this.prompt
                });

                this.imageUrl = response.data.data[0].url;
            } catch (error) {
                console.error('Error generating image:', error);
            }
        },
        GetAllNamesAndIdsCharacters() {
            CharacterService.GetAllNamesAndIdsCharacters()
                .then((response) => {
                    this.characters = response.data.ob
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        handleFileUpload(event) {
            this.file = event.target.files[0];
        },
        handleOk() {
            const formattedText = this.form.Summary
                .split('\n')
                .filter(paragraph => paragraph.trim() !== '') // Remove empty lines
                .map(paragraph => `<p>${paragraph}</p>`)
                .join('');
            this.form.Summary = formattedText;

            const formData = new FormData();
            formData.append('Title', this.form.Title);
            formData.append('Summary', this.form.Summary);
            formData.append('FirstCharacterId', this.form.FirstCharacterId);
            formData.append('SecondCharacterId', this.form.SecondCharacterId);
            formData.append('LocationId', this.form.LocationId);
            if (this.file) {
                formData.append('image', this.file);
            }

            // Log formData entries for debugging
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            this.CreateANewFiction(this.userCurrent, formData);
        },
        CreateANewFiction(usr, formData) {
            GameService.CreateANewGame(usr, formData)
                .then((response) => {
                    if (response) {
                        this.$router.push({ path: "/allFictions/" + this.$store.state.auth.user.usrID });
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
}
</script>
