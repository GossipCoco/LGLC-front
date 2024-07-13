<template>
    <div id="edit-chapter-contain">
        <div class="character-details-chatper card mb-3 fiction-container">
            <div class="card-body">
                <form class="create-character-form" @submit.stop.prevent="handleOk" ref="uploadForm">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-12">
                                <label for="Content" class="form-label">Votre histoire</label>
                                <textarea v-model="form.Content" class="form-control" id="Content" rows="12"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-11"></div>
                        <div class="col-1  btn-validate-container">
                            <button type="button" class="btn btn-primary" @click="handleOk">Enregistrer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import FictionService from '../../../services/FictionService'
export default {
    name: 'EditChapter',
    data() {
        return {
            form: {
                Id: null,
                Title: null,
                Content: null,
            }
        }
    },
    created() {
        this.getChapter(this.$route.params.id);
    },
    methods: {
        getChapter(id) {
            FictionService.getChapter(id, this.nav)
                .then((response) => {
                    this.chapter = response.data.ob || {};
                    this.form.Content = this.chapter.Content
                    this.Author = this.chapter.Fiction.UserId
                    this.AuthorId = this.chapter.Fiction.UserId

                    //this.typeText(this.chapter.Content);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
}
</script>