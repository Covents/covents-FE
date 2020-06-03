<template>
  <div
    v-if="this.results.length && this.keyword.length"
    class="events-container"
  >
    <div class="results-header">
      <h1>results for:</h1>
      <h2>"{{ this.keyword }}"</h2>
    </div>
    <div v-bind:key="eventObj.id" v-for="eventObj in results">
      <EventCard
        v-bind:eventObj="eventObj"
        v-bind:favorites="favorites"
        @button-clicked="triggerToggle"
      />
    </div>
  </div>

  <div v-else class="events-container">
    <h1>coming up:</h1>
    <div v-bind:key="eventObj.id" v-for="eventObj in events">
      <EventCard
        v-bind:eventObj="eventObj"
        v-bind:events="events"
        v-bind:favorites="favorites"
        @button-clicked="triggerToggle"
      />
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard";
export default {
  name: "events-container",
  props: ["events", "favorites", "results", "keyword"],
  components: {
    EventCard,
  },
  methods: {
    triggerToggle(e) {
      this.$emit("toggle-favorite", e);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #ef476f;
  font-size: 3.5em;
  margin-top: 0.18em;
  width: 100%;
  text-align: center;
}

.events-container {
  height: 100vh;
  width: 78%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-left: 22%;
}

h2 {
  color: black;
  font-size: 40px;
  font-weight: normal;
  text-align: center;
  width: 100%;
  font-style: italic;
}

.results-header {
  width: 100%;
  padding: 0;
  max-height: 20%;
}
</style>
