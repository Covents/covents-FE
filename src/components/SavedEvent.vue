<template>
  <div>
    <a class="event-link" :href="eventObj.link" target="_blank">
      <h4>{{ this.eventObj.name.toUpperCase() }}</h4>
      <p>{{ this.eventObj.date }}</p>
    </a>
  </div>
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
}

a:hover {
  text-decoration: underline;
}

p {
  margin-bottom: 15px;
  font-size: 1em;
}

h4 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
}

div {
  width: 90%;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}
</style>
