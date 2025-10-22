<template>
  <div class="col-10 col-md-10">
      <div class="card background-lineart">
        <h5 class="card-title">Description</h5>
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