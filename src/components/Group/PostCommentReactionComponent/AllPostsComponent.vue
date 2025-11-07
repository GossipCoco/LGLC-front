<template>
    <div></div>
</template>
<script>
import PostAllCommentReactions from "../../../services/PostCommentReactions";
export default {
    name: "AllPostsComponent",
    data() {
        return {
            url: "",
            Post: {},
        };
    },
    created() {
        this.url = this.$route.params.id;
        this.GetAllPostsByGroupId(this.url);
    },
    methods: {
        GetAllPostsByGroupId(id) {
            PostAllCommentReactions.GetAllPostsByGroupId(id)
                .then((response) => {
                    this.Post = response.data.ob;
                    console.log(this.Post);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
}
</script>