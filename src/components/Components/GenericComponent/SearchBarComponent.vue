<template>
    <div class="row row-filter background-color-dark-green-01 display-flex vertical-align-middle">
      <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 display-flex-row align-items-content-justify-content vertical-align-middle height-7-vh">
        <p class="text-white poppins-text">{{ labelFilter }}</p>
      </div>
      <InputName
      class="input-name-margin"
        v-bind:col="'col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12'"
        v-bind:forId="'inputName'"
        v-bind:label="'Nom du personnage'"
        v-bind:getNameData="'getCurrentName'"
        @getCurrentName="getCurrentName"
      />
      <GenericSelect
        v-bind:col="'col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12 search-clan'"
        v-bind:For="'SearchClan'"
        v-bind:label="'Clan'"
        v-bind:formdata="'getclans'"
        v-bind:clans="clans"
        @getclans="getclans"
      />
      <GenericSelect
        v-bind:col="'col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 search-grade'"
        v-bind:For="'SearchGrade'"
        v-bind:label="'Grade'"
        v-bind:formdata="'getgrade'"
        @getgrade="getgrades"
      />
    </div>
</template>
<script>
import GenericSelect from '../FormComponent/GenericSelect.vue'
import InputName from '../FormComponent/InputName.vue'
export default {
    name: 'SearchBarComponent',
    components:{
        GenericSelect,
        InputName
    }
}
</script>