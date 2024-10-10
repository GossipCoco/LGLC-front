<template>
  <div class="card-header display-flex-row">
    <div v-if="type === 'username'">
      <h4>
        <router-link :to="'/getUserBy/' + title">{{ title }}</router-link>
        <slot></slot>
      </h4>
    </div>
    <div v-else class="title-header display-flex-row">
      <h4>{{ title }}</h4>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitleHeaderDashboard",
  props: ["title", "type"],
};
</script>