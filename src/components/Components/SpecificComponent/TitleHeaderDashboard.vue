<template>
  <div class="card-header display-flex-row">
    <div v-if="type === 'username'">
      <div class="row">
        <div class="col-12">
          <h4>
          <router-link :to="'/getUserBy/' + title">{{ title }}</router-link>         
          </h4>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'fictions' ">
      <div class="row">
        <div class="col-12">
          <h4>
          {{ title }}          
          </h4>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'Lastfictions' ">
      <div class="row">
        <div class="col-12">
          <h4>
            <router-link :to="route">{{ title }}</router-link>            
          </h4>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'myCharacters' ">
      <div class="row">
        <div class="col-12">
          <h4>
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
  props: ["title", "type", "route"],
};
</script>