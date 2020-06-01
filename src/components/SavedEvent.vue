<template>
  <a class="event-link" :href="eventObj.link" target="_blank">
    <h4>{{ this.eventObj.name }}</h4>
    <p>{{ this.eventObj.date }}</p>
  </a>
</template>

<script>
export default {
  name: "saved-event",
  props: ["favorites", "eventObj"],
  methods: {
    checkForFavorites() {
      if (this.favorites.length) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
  margin-top: 10px;
}

a:hover {
  text-decoration: underline;
}

p {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
