<template>
  <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
      <div class="card background-lineart height-60-vh">
        <div class="card-header">
          <h5 class="card-title">Description</h5>
        </div>
        <div class="card-body">
          <p class="text-white" v-html="group.CompleteDescription"></p>
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