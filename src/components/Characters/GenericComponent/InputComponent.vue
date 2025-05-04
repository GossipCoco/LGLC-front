<template>
<div class="col-md-4">
  <label :for="forId" class="form-label">{{ label }}</label>
  <input type="text" class="form-control" :id="forId" placeholder="Personnage">
</div>
</template>
<script>
export default{
    name: 'InputComponent',
    props:["forId", "label", "getNameData"]
}
</script>