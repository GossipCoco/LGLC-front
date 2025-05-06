<template>
  <div class="display-flex-column form-character-container flex-one opensans-text">
    <div class="card border-none background-color-main-lineart overflowY-X-hidden text-white display-flex-column width-180-vh card-form-create-character align-items-content-justify-content flex-one mb-12">
      <CardHeader :Title="title"/>
      <div class="card-body overflowY-X-hidden  height-80-vh">

      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from '../../Components/GenericComponent/CardHeader.vue';
export default {
    name:'EditAnOriginalCharacter',
    components:{CardHeader},
    data(){
        return{
            title:'Editer le personnage'
        }
    }
}
</script>