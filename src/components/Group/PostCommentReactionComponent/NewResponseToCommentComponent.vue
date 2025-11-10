<template>
    <div>

    </div>
</template>
<script>
import GroupService from '../../../services/GroupService';
export default {
    name: "NewResponseToCommentComponent",
    data() {
        return {
            url: null,
            Group:{},
            form:{
                Content: "", // HTML renvoyé par l’éditeur
                UserId: this.$store.state.auth.user.usrID,
                PostId: null,
                ParentId: this.$route.params.id,
            }
        };
    },
    created() {
        this.url = this.$route.params.id;
        this.GetGroupByCommentById(this.url);
    },
    methods: {
        GetGroupByCommentById(id) {
            GroupService.GetGroupByCommentById(id)
            .then((response) => {
                this.Group = response.data.ob;
                console.log(this.Group.GroupPost.Id);
                this.form.PostId = this.Group.GroupPost.Id;
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }
}
</script>