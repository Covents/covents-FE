<template>
  <div class="event-card">
    <button class="heart-btn" @click="toggleFavorite" ><img class="unfilled-heart" v-bind:id="eventObj.id" src="../../public/empty-heart.png" alt="unfilled heart"></button>
    <img :src="checkForImage(eventObj)" >
    <div class="event-date">
      <p>{{formatDate(eventObj.event_date)}}</p>
    </div>
    <h3>{{eventObj.event_name.toUpperCase()}}</h3>
    <a :href="eventObj.link" target="_blank"><button class="event-details-btn">EVENT DETAILS</button></a>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["eventObj", "events", "favorites"],
  methods: {
    formatDate(date) {
      let dateArray = date.split(", ");
      let monthDate = dateArray[1];
      return monthDate;
    },
    checkForImage(eventObj) {
      if (eventObj.image) {
        return eventObj.image
      } else {
        return 'https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg'
      }
    },
    toggleFavorite(e) {
      e.preventDefault();
      let selectedEvent = this.events.find(
        (eventObj) => eventObj.id === e.target.id
      );
      let matchingEvent = this.favorites.find(
        (eventObj) => eventObj.id === selectedEvent.id
      );

      if (matchingEvent) {
        console.log("DELETE FAVORITE")
      } else {
        console.log("ADD FAVORITE")
      }
    }
  }
}
</script>

<style scoped>

.event-card {
  height: 300px;
  width: 300px;
  border: 2px solid #118AB2;
  border-radius: 10px;
  margin: 2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

img {
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
  margin-bottom: .5em;
}

.event-details-btn {
  background: #EF476F;
  border: none;
  color: white;
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.event-details-btn:hover {
  background: #06D6A0;
}

.unfilled-heart {
  border: none;
  height: 4em;
  width: 4em;
}

.heart-btn {
  background: none;
  z-index: 1;
  position: absolute;
  height: 4em;
  width: 4em;
  border: none;
  top: -1.7em;
  right: .4em;
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
  right: .6em;
}

p {
   font-size: 21px;
   text-align: center;
   width: 100%;
}

</style>