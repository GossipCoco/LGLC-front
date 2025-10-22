<template>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">    
        <div v-for="(posts, index) in group.GroupPosts" :key="index">
            <h2>{{ posts.Title}}</h2>
            <p class="text-align-justify">{{ posts.Content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "GroupLastPost",
    props: ['group'],
}
</script>