<template>
  <div class="row">
    <div class="col-12">
      <div class="card background-color-dark-green-01 margin-1vh">
        <div class="card-header">
          <div class="row">
            <div class="col-8">
              <h2 class="text-white post-title-text">
                POST : {{ post.Title }}
              </h2>
            </div>
            <div class="col-4 text-align-right">
              <p class="text-white">{{ UserName }}</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="text-align-justify text-white" v-html="post.Content"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostCardComponent",
  props: ["post", "UserName"],
};
</script>