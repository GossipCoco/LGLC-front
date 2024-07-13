<template>
    <div v-for="(event, index) in events" :key="index">
        <p>{{ event.Title }} : {{ event.Description }}</p>
    </div>
</template>
<script>
export default {
    name: 'ListEvents',
    props: ['events']
}
</script>