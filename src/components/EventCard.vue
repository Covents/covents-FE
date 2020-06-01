<template>
  <div class="event-card">
    <button class="heart-btn" @click="handleClick">
      <img
        v-bind:id="eventObj.id"
        :src="checkForFavorite()"
        alt="unfilled heart"
        v-bind:favorited="eventObj.favorited"
        class="heart-image"
      />
    </button>
    <img class="main-image" :src="checkForImage(eventObj)" />
    <div class="event-date">
      <p>{{ formatDate(eventObj.date) }}</p>
    </div>
    <h3>{{ eventObj.event_name.toUpperCase() }}</h3>
    <a :href="eventObj.link" target="_blank"
      ><button class="event-details-btn">EVENT DETAILS</button></a
    >
  </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      favorited: false,
    };
  },
  props: ["eventObj", "favorites"],
  methods: {
    formatDate(date) {
      let dateArray = date.split(", ");
      let monthDate = dateArray[1];
      return monthDate;
    },
    checkForImage(eventObj) {
      if (eventObj.image) {
        return eventObj.image;
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg";
      }
    },
    handleClick(e) {
      this.$emit("button-clicked", e);
      this.favorited = !this.favorited;
    },
    checkForFavorite() {
      if (this.favorited) {
        return "https://i.imgur.com/K6QuETQ.png?3";
      } else {
        return "https://i.imgur.com/E7uzSPA.png?3";
      }
    },
  },
};
</script>

<style scoped>
.event-card {
  height: 300px;
  width: 300px;
  border: 2px solid #118ab2;
  border-radius: 10px;
  margin: 2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.main-image {
  width: 100%;
  height: 49%;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid black;
  object-fit: cover;
}

h3 {
  font-size: 24px;
  font-weight: normal;
  margin: 0 3.2em 0 1em;
}

a {
  width: 85%;
  height: 16%;
  margin-bottom: 0.5em;
}

.event-details-btn {
  background: #ef476f;
  border: none;
  color: white;
  font-size: 24px;
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.event-details-btn:hover,
.event-details-btn:focus {
  background: #06d6a0;
}

.heart-btn {
  background: none;
  z-index: 1;
  position: absolute;
  height: 3em;
  width: 3.4em;
  border: none;
  top: -1.7em;
  right: 0.4em;
}

.heart-btn:hover,
.heart-btn:focus {
  height: 3.2em;
  width: 3.6em;
}

.heart-image {
  border: none;
  height: 100%;
  width: 100%;
}

.event-date {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background: #06d6a0;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  top: 38%;
  right: 0.6em;
}

p {
  font-size: 21px;
  text-align: center;
  width: 100%;
}
</style>
