<template>
  <div class="title-author-container flex-one display-flex-column flex-one">
    <h1 class="text-white font-variant-all-small-caps">{{ Title }}</h1>
    <div class="info-fan">
      <div class="display-flex-row flex-on align-items-content-justify-content">
        <h3 class="text-white">
          par
          <router-link :to="'/getUserBy/' + Author" class="text-white author-text cinzel font-variant-small-caps">
            {{ Author }}
          </router-link>
        </h3>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitleFiction",
  props: ["Title", "Author", "dateCreation"],
  data() {
    return {};
  },
  methods: {
    formatDate(isoDateString) {
      if (isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
};
</script>