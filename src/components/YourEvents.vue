<template>
  <div class="your-events">
    <h2>YOUR EVENTS:</h2>
    <div v-bind:key="eventObj.id" v-for="eventObj in favorites" >
      <SavedEvent v-bind:eventObj="eventObj" v-bind:favorites="favorites"/>
    </div>
  </div>
</template>

<script>
import SavedEvent from './SavedEvent'
export default {
  name: "your-events",
  props: ["favorites"],
  components: {
    SavedEvent,
  },
};
</script>

<style scoped>
h2 {
  color: #ffffff;
  margin: 20px;
}
h4 {
  color: #ffffff;
  text-align: center;
}
</style>
