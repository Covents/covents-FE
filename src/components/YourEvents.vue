<template>
  <div class="your-events">
    <h2>YOUR EVENTS:</h2>
    <div v-if="this.favorites.length">
      <div v-bind:key="eventObj.id" v-for="eventObj in favorites">
        <SavedEvent v-bind:eventObj="eventObj" v-bind:favorites="favorites" />
      </div>
    </div>

    <div v-else>
      <h4>You have no saved events!</h4>
    </div>
  </div>
</template>

<script>
import SavedEvent from "./SavedEvent";
export default {
  name: "your-events",
  props: ["favorites"],
  components: {
    SavedEvent,
  },
  checkForFavorites() {
    if (this.favorites.length) {
      return true;
    }
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

.your-events {
  text-align: center;
  overflow-y: scroll;
}

.your-events::-webkit-scrollbar {
  width: 0;
  background: #ffffff;
}
</style>
