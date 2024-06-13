<template>
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card fiction-card">
            <div class="image-gen">
                <h2>Générateur d'images</h2>
                <div v-if="imageUrl">
                    <img :src="imageUrl" alt="Generated Image" />
                </div>
                <input type="text" v-model="prompt" placeholder="Entrez une description..." />
                <button @click="generateImage">Générer l'image</button>
               
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
            prompt: '',
            imageUrl: null
        };
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
        }
    }
};
</script>

<style scoped>
.image-gen {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

button {
    padding: 10px 20px;
}

img {
    margin-top: 20px;
    max-width: 100%;
}
</style>