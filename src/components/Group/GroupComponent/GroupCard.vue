<template>
    <div class="card">
        <div class="card-body">
            {{ group }}
        </div>
    </div>
</template>
<script>
export default {
    props: ["group"],
    name: 'GroupCard'
}
</script>