<template>
  <div id="list-events">
    <div v-for="(event, index) in events" :key="index">
      <p>
        <span>{{ event.Title }}</span> : {{ event.Description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListEvents",
  props: ["events"],
};
</script>