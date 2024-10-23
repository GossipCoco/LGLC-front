<template>
  <div class="card-header dashboard-card-header display-flex-row">
    <div class="width-100-percent" v-if="type === 'username'">
      <div class="row">
        <div class="col-12">
          <h4>
          <router-link class="text-white" :to="'/getUserBy/' + title">{{ title }}</router-link>         
          </h4>
        </div>
      </div>
    </div>
    <div class="width-100-percent" v-else-if="type === 'fictions' ">
      <div class="row">
        <div class="col-7">
          <h4 class="text-white" >
          {{ title }}          
          </h4>
        </div>
        <div class="col-5">
          <router-link v-if="nameRoute"
            type="button"
            class="btn btn-primary text-white"
            :to="route"
            >{{ nameRoute }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="width-100-percent" v-else-if="type === 'Lastfictions' ">
      <div class="row">
        <div class="col-12">
          <h4>
            <router-link class="text-white"  :to="route">{{ title }}</router-link>            
          </h4>
        </div>
      </div>
    </div>
    <div class="width-100-percent" v-else-if="type === 'myCharacters' || type === 'chapters' ">
      <div class="row">
        <div class="col-12">
          <h4 class="text-white" >
          {{ title }}          
          </h4>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitleHeaderDashboard",
  props: ["title", "type", "route", "nameRoute"],
};
</script>