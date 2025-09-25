<template>
    <div class="card">
         <img :src="group.Image" class="card-img-top" alt="..." />
        <div class="card-body">
            <router-link :to="group.Id">{{ group.Name }}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ["group"],
    name: 'GroupCard'
}
</script>