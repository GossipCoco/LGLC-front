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
            Group:{}
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
                console.log(response.data.ob);
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }
}
</script>