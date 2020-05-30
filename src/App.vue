<template>
  <div id="app">
    <Nav />
    <EventsContainer v-bind:events="events" v-bind:favorites="favorites" @toggle-favorite="toggleFavorite" />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import EventsContainer from "./components/EventsContainer";
export default {
  name: "app",
  components: {
    Nav,
    EventsContainer,
  },
  data() {
    return {
      events: [
        {
          id: "1",
          event_name: "Zayn Malik Party",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
          event_date: "Sun, May 31, 2020",
          link:
            "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
        },
        {
          id: "2",
          event_name: "One Direction 2020 At Home",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100862282%2F446435521372%2F1%2Foriginal.20200513-122914?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C24%2C768%2C384&s=03fd9fffc3443d689802fa20ef5c7f90",
          event_date: "Sat, May 30, 2020",
          link:
            "https://www.eventbrite.co.uk/e/one-direction-2020-at-home-tickets-105236948546?aff=ebdssbonlinesearch",
        },
        {
          id: "3",
          event_name: "#VirtualDayParties & #VirtualVS",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101933614%2F254238099628%2F1%2Foriginal.20200527-013807?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C141%2C500%2C250&s=534313a03fd8c142b3b0863026d35472",
          event_date: "Thu, May 28, 2020",
          link:
            "https://www.eventbrite.com/e/virtualdayparties-virtualvs-tickets-101654344882?aff=ebdssbonlinesearch",
        },
        {
          id: "4",
          event_name: "DCJazzFest From Home Series",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99457776%2F119015619107%2F1%2Foriginal.20200424-194945?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=382%2C0%2C1068%2C534&s=825de94e15775c953040327b94efe728",
          event_date: "Sat, May 30, 2020",
          link:
            "https://www.eventbrite.com/e/dcjazzfest-from-home-series-tickets-103369585212?aff=ebdssbonlinesearch",
        },
        {
          id: "5",
          event_name: "WayV 1st CONCERT IN JAKARTA",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98650696%2F439837602994%2F1%2Foriginal.20200414-113226?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=13%2C0%2C815%2C407&s=3ff105fa5e8241afa0b1588fe6a37ac5",
          event_date: "Sat, May 30, 2020",
          link:
            "https://www.eventbrite.sg/e/wayv-1st-concert-in-jakarta-tickets-102673120066?aff=ebdssbonlinesearch",
        },
      ],
      favorites: [],
      selectedEvent: ''
    };
  },
  methods: {
    toggleFavorite(e) {
      e.preventDefault();
      let selectedEvent = this.events.find(
        (eventObj) => eventObj.id === e.target.id
      );
      let matchingEvent = this.favorites.find(
        (eventObj) => eventObj.id === selectedEvent.id
      );

      if (matchingEvent) {
        this.favorites = this.favorites.filter(favoriteObj => {
          return favoriteObj.id !== matchingEvent.id
        })
      } else {
        this.favorites.push(selectedEvent)
      }
    }
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
</style>
