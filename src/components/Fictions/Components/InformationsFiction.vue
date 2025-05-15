<template>
    <div class="col-8">
        <p>Il y a {{ lastChap - 1 }} chapitre<span v-if="lastChap - 1 > 1">s</span></p>
        <p class="white-text font-size-medium margin-bottom-2">
            Nombre total de mots : {{ totalNbWords }}
        </p>
        <div v-if="nbKind > 0 " class="display-flex-column kind-fiction-container Noto-Sans">
            <p>Genre(s) : &nbsp;</p>
            <div class="display-flex-row">
            <div v-for="(kind, index) in Kinds" :key="index" class="display-flex-row genres">
                <p>
                <span class="badge-genre background-color-dark-green-01 white-text">{{ kind.KindId }}</span>                
                </p>
            </div>
            </div>
        </div>
    </div>   
</template>
<script>
export default {
    name: 'InformationsFiction',
    props:['lastChap', 'totalNbWords', 'nbKind', 'Kinds']
}
</script>