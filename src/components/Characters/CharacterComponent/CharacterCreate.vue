<template>
    <div class="display-flex-column form-character-container-global flex-one opensans-text">
        <div class="card display-flex-column card-form-create-character align-items-content-justify-content flex-one mb-12">
            <CardHeader v-bind:Title="'Création de personnage'" />
            <div class="card-body">
                <form class="create-character-form" @submit.stop.prevent="onSubmit">
                    <Transition name="slide-fade">
                        <div v-if="formPart1" class="character-detail-form">
                            <div class="row form-first-part-container">
                                <div class="col-md-6">
                                    <label for="inputClans" class="form-label">Clans</label>
                                    <select class="form-select" v-model="form.Clan" required>
                                        <option v-for="(clans, index) in clans" :value="clans.Id" :key="index"
                                            id="inputClans">
                                            {{ clans.Name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputName" class="form-label">Nom actuel du personnage</label>
                                    <input type="text" class="form-control" id="inputName" v-model="form.CurrentName" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputGrade" class="form-label">Grade</label>
                                    <select class="form-select" v-model="form.Grade" required>
                                        <option v-for="(grades, index) in grades" :value="grades.Id" :key="index"
                                            id="inputGrade">
                                            {{ grades.Name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputKitty" class="form-label">Nom de chaton</label>
                                    <input type="text" class="form-control" id="inputKitty" v-model="form.KitName">
                                </div>
                                <div class="col-md-6">
                                    <!-- {{ form.Clan }} {{ form.Grade }} -->
                                    <label for="inputapprenti" class="form-label">Nom d'apprenti</label>
                                    <input type="text" class="form-control" id="inputapprenti"
                                        v-model="form.ApprenticeName"
                                        :disabled="form.Clan === 'domestique' || form.Clan === 'solitaire'">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputwarrior" class="form-label">Nom de guerrier</label>
                                    <input type="text" class="form-control" id="inputapprenti"
                                        v-model="form.WarriorName"
                                        :disabled="form.Clan === 'domestique' || form.Clan === 'solitaire' || form.Grade === 'kit' || form.Grade === 'apprentice'">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputleader" class="form-label">Nom de Chef</label>
                                    <input type="text" class="form-control" id="inputleader" v-model="form.LeaderName"
                                        :disabled="form.Clan === 'domestique' || form.Clan === 'solitaire' || form.Grade != 'leader'">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputGenre" class="form-label">Genre</label>
                                    <select class="form-select" v-model="form.Genre" id="inputGenre" required>
                                        <option v-for="(genre, index) in genres" :value="genre.id" :key="index">
                                            {{ genre.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAge" class="form-label">Age en nombre de lunes</label>
                                    <input type="number" class="form-control" id="inputAge" v-model="form.Age" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputImage" class="form-label">Upload Image</label>
                                    <input type="file" class="form-control" id="inputImage" @change="onFileChange">
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <!-- <Transition name="slide-fade">
                        <div v-if="formPart2" class="character-radio-button-container">
                            <div class="row form-second-part-container">
                                <div class="col-md-12">
                                    <label class="form-label">Sélectionner une image de personnage</label>
                                    <div class="select-character-container">
                                        <div class="form-check" v-for="(Image, index) in ImageAllCharacters"
                                            :key="index">
                                            <input class="form-check-input" type="radio" :id="'image' + index"
                                                :value="Image" v-model="form.Image">
                                            <label class="form-check-label" :for="'image' + index">
                                                <img class="list-cararcter-image" :src="Image" alt="Character Image">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition> -->
                    <Transition name="slide-fade">
                        <div class="text-area-container" v-if="formPart3">
                            <div class="col-12">
                                <div class="mb-12">
                                    <label for="exampleFormControlTextarea3" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"
                                        v-model="form.Description" required></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Personnalité</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        v-model="form.Personnality" required></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-12">
                                    <label for="exampleFormControlTextarea2" class="form-label">Biographie</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"
                                        v-model="form.Biography" required></textarea>
                                </div>
                            </div>

                        </div>
                    </Transition>
                    <div class="row submit-container">
                        <div class="col-12">
                            <div class="mb-12">
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <!-- <button class="btn btn-primary" v-on:click="NextToPart3"
                                    v-if="formPart1 === true && form.CurrentName && form.Clan && form.Grade"
                                    title="Next3">
                                    Suivant
                                </button> -->
                                    <button class="btn btn-primary" v-on:click="NextToPart3" title="Next3">
                                        Suivant
                                    </button>
                                    <button class="btn btn-primary" v-on:click="NextToPart3"
                                        v-if="formPart2 === true && form.Image" title="Neext3">
                                        Suivant
                                    </button>
                                    <button class="btn btn-primary" v-on:click="PreviousToPart1"
                                        v-if="formPart3 === true" title="previous2">
                                        Précédent
                                    </button>
                                    <router-link to="/allCharacters" class="btn btn-primary"
                                        title="cancel">Annuler</router-link>
                                    <button class="btn btn-primary" type="submit" v-on:click="handleOk"
                                        v-if="formPart3 === true" title="endpart">
                                        Créer le personnage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import GradeService from '../../../services/GradeService'
import ClansService from '../../../services/ClansServices'
import CharacterService from '../../../services/CharacterService'
import ImageCharactersDatas from '../../../Datas/DatasReactives/ImageCharactersDatas'
import ImageService from '../../../services/ImageService'

import CardHeader from '../../Components/GenericComponent/CardHeader.vue'

export default {
    name: 'CharacterCreate',
    components:{CardHeader}, 
    data() {
        return {
            characterId: null,
            formPart1: true,
            formPart2: false,
            formPart3: false,
            genres: [
                { name: 'Mâle', id: 'Mâle' },
                { name: 'Femelle', id: 'Femelle' }
            ],
            ImageCharactersDatas: ImageCharactersDatas,
            ImageAllCharacters: {},
            grades: {},
            clans: {},
            form: {
                CurrentName: null,
                KitName: null,
                ApprenticeName: null,
                WarriorName: null,
                OlderName: null,
                LeaderName: null,
                Genre: null,
                Grade: null,
                Clan: null,
                Age: null,
                Description: '',
                Personnality: '',
                Biography: '',
                Image: null,
            }
        }
    },

    mounted() {
        this.GetAllGrade();
        this.GetAllClans();
        this.GetAllImages()
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.form.Image = file;
        },
        NextToPart2() {
            this.formPart1 = false;
            this.formPart2 = true;
            this.formPart3 = false;
            this.progression = 2;
        },
        PreviousToPart1() {
            this.formPart1 = true;
            this.formPart2 = false;
            this.formPart3 = false;
            this.progression = 1;
        },
        NextToPart3() {
            this.formPart1 = false;
            this.formPart2 = false;
            this.formPart3 = true;
            this.progression = 3;
        },
        PreviousToPart2() {
            this.formPart1 = false;
            this.formPart2 = true;
            this.formPart3 = false;
            this.progression = 2;
        },
        GetAllImages() {
            ImageService.GetAllImages()
                .then((response) => {
                    console.log(response.data.ob);
                    this.ImageAllCharacters = response.data.ob.map(item => '/images/Characters/' + item.Id);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        GetAllClans() {
            ClansService.getAllClans()
                .then((response) => {
                    console.log(response.data.ob);
                    this.clans = response.data.ob;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        GetAllGrade() {
            GradeService.getAllGrade()
                .then((response) => {
                    console.log(response.data.ob);
                    this.grades = response.data.ob;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        handleOk() {
            const Biography = this.form.Biography ? this.form.Biography.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('') : '';
            this.form.Biography = Biography;

            const Description = this.form.Description ? this.form.Description.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('') : '';
            this.form.Description = Description;

            const Personnality = this.form.Personnality ? this.form.Personnality.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('') : '';
            this.form.Personnality = Personnality;
            const formData = new FormData();
            formData.append('CurrentName', this.form.CurrentName);
            formData.append('KitName', this.form.KitName);
            formData.append('ApprenticeName', this.form.ApprenticeName);
            formData.append('WarriorName', this.form.WarriorName);
            formData.append('OlderName', this.form.OlderName);
            formData.append('LeaderName', this.form.LeaderName);
            formData.append('Genre', this.form.Genre);
            formData.append('Grade', this.form.Grade);
            formData.append('Clan', this.form.Clan);
            formData.append('Age', this.form.Age);
            formData.append('Description', Description);
            formData.append('Personnality', Personnality);
            formData.append('Biography', Biography);
            formData.append('image', this.form.Image);
            if (this.file) {
                formData.append('file', this.file);
            }
            this.CreateCharacter(formData);
        },
        CreateCharacter(form) {

            CharacterService.createANewCharacter(form)
                .then((response) => {
                    this.$router.push({ path: '/characterDetails/' + response.data.ob[0].Id });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
}
</script>
