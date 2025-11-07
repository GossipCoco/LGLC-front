<template>
  <div class="col-10 col-md-10">
      <div class="card background-lineart height-50-vh">
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