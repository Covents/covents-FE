<template>
  <div class="events-container">
    <h1>coming up:</h1>
    <div v-bind:key="eventObj.id" v-for="eventObj in events">
      <EventCard v-bind:eventObj="eventObj" v-bind:events="events" v-bind:favorites="favorites" />
    </div>
  </div> 
</template>

<script>
import EventCard from './EventCard'
export default {
  name: "events-container",
  components: {
    EventCard
  },
  props: ["events", "favorites"]
}
</script>

<style scoped>

h1 {
  color: #EF476F;
  font-size: 3.5em;
  margin-top: .18em;
  width: 100%;
  text-align: center;
}

.events-container {
  height: 100vh;
  width: 78%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>