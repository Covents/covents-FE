<template>
  <div id="app">
    <NavBar v-on:search-events="searchEvents" v-bind:favorites="favorites"/>
    <EventsContainer v-bind:events="events" v-bind:favorites="favorites" @toggle-favorite="toggleFavorite" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import EventsContainer from "./components/EventsContainer";
import axios from 'axios';
export default {
  name: "app",
  components: {
    NavBar,
    EventsContainer,
  },
  data() {
    return {
      events: [],
      results: [],
      favorites: [],
      selectedEvent: ''
    };
  },
  methods: {
    toggleFavorite(e) {
      e.preventDefault();
      let selectedEvent = this.events.find(
        (eventObj) => eventObj.id === parseInt(e.target.id)
      );
      let matchingEvent = this.favorites.find(
        (eventObj) => eventObj.id === parseInt(selectedEvent.id)
      );

      if (matchingEvent) {
        this.favorites = this.favorites.filter(favoriteObj => {
          return favoriteObj.id !== parseInt(matchingEvent.id)
        })
      } else {
        this.favorites.push(selectedEvent)
      }
    },
    searchEvents(keyword) {
      console.log(keyword)
      axios.get(`https://cors-anywhere.herokuapp.com/https://fierce-earth-48309.herokuapp.com/api/v1/resources/event_keyword?keyword=${keyword}`)
        .then(res => this.results = res.data)
        .catch(err => console.log(err))
    }
  },
    created() {
    axios.get('https://cors-anywhere.herokuapp.com/https://fierce-earth-48309.herokuapp.com/api/v1/resources/events/all')
      .then(res => this.events = res.data)
      .catch(err => console.log(err))
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: "Playfair Display", serif;
}

h2,
h3,
h4,
p {
  font-family: "Roboto Condensed", sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-flow: row nowrap;
}

body,html{
  height: 100%;
}
</style>
