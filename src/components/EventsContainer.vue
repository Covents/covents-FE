<template>
  <div class="events-container">
    <h1>coming up:</h1>
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
</template>

<script>
import EventCard from './EventCard'
export default {
  name: "events-container",
  components: {
    EventCard
  }
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