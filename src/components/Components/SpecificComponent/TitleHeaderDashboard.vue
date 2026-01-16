<template>
  <div class="card-header background-color-dark-green-02 dashboard-card-header display-flex-row align-items-content-justify-content height-10-vh">
    <div v-if="type === 'username'">
      <div class="row">
        <div class="col-12">
          <h4>
          <router-link class="text-white font-size-1-25 poppins-text font-weight-600" :to="'/getUserBy/' + title">{{ title }}</router-link>         
          </h4>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'fictions' ">
      <div class="row">
        <div class="col-12">
          <h4 class="text-white  font-size-1-25 poppins-text font-weight-600" >
          {{ title }}          
          </h4>
        </div>
        <!--<div class="col-6">
           <router-link v-if="nameRoute" type="button" class="btn btn-primary text-white" :to="route">
            {{ nameRoute }}
          </router-link>
        </div>--> 
      </div>
    </div>
    <div  v-else-if="type === 'Lastfictions' ">
      <div class="row">
        <div class="col-12">
          <h4>
            <router-link class="text-white  font-size-1-25 poppins-text font-weight-600" :to="route">{{ title }}</router-link>
          </h4>
        </div>
      </div>
    </div>
    <div 
      v-else-if="type === 'myCharacters' || type === 'chapters' || type === 'video' || type ==='OC' ">
      <div class="row">
        <div class="col-12">
          <h4 class="text-white  font-size-1-25 poppins-text font-weight-600" >
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