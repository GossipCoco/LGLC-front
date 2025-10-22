<template>
  <div class="row height-30-vh margin-1vh">
    <div class="col-12 col-md-12">
      <div class="card background-lineart">
        <div class="card-body">
          <p class="text-white" v-html="group.CompleteDescription"></p>
        </div>
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