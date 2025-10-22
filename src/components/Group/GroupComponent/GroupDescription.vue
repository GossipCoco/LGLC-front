<template>
  <div class="col-10 col-md-10">
      <div class="card background-lineart">
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