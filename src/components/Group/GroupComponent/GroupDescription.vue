<template>
  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
      <div class="card background-lineart height-auto">
        <div class="card-header">
          <h5 class="card-title">Description</h5>
        </div>
        <div class="card-body">
          <p class="text-white">{{ group.Description }}</p>
          <div class="text-white text-align-justify" v-html="group.CompleteDescription"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "GroupDescription",
    props: ["group"],
}
</script>