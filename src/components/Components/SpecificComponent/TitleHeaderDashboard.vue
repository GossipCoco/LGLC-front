<template>
  <div class="card-header display-flex-row">
    <div v-if="type === 'username'">
      <div class="row">
        <div class="col-12">
          <h4>
          <router-link :to="'/getUserBy/' + title">{{ title }}</router-link>
          <slot></slot>
          </h4>
        </div>
      </div>
    </div>
    <div v-if="type === 'fictions' ">
      <div class="row">
        <div class="col-12">
          <h4>
          {{ title }}          
          </h4>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'myCharacters' ">
      <div class="row">
        <div class="col-6">
          <h4>
          {{ title }}          
          </h4>
        </div>
        <div class="col-6"><slot></slot></div>
      </div>
    </div>
    <div v-else class="title-header width-100-percent display-flex-row">
      <div class="row width-100-percent">
        <div class="col-9"><h4>{{ title }}</h4></div>
        <div class="col-3"><slot></slot></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitleHeaderDashboard",
  props: ["title", "type"],
};
</script>