<template>
    <div v-for="(relation, index) in Relation" :key="index">
       <p> {{ relation.TypeRelation.Name }}: {{ relation.CharacterTwo.CurrentName }} </p> 
    </div>
</template>
<script>
export default {
    name: 'RelationCharacterComponent',
    props: ['Relation']
}
</script>