<template>
    <div class="clan-logo-container">
        <router-link type="button" class="btn btn-primary" :to="'/clan/'+ClanId">
            <img :src="'/images/clans/'+symboleClan" />
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'BackClan',
    props: ['ClanId', 'symboleClan']
}
</script>