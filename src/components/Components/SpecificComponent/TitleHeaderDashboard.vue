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
    <div v-else class="title-header display-flex-row">
      <div class="row">
        <div class="col-8"><h4>{{ title }}</h4></div>
        <div class="col-4"><slot></slot></div>
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