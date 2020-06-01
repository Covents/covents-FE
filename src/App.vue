<template>
  <div id="app">
    <NavBar v-bind:favorites="favorites"/>
    <EventsContainer v-bind:events="events" v-bind:favorites="favorites" @toggle-favorite="toggleFavorite" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import EventsContainer from "./components/EventsContainer";
export default {
  name: "app",
  components: {
    NavBar,
    EventsContainer,
  },
  data() {
    return {
      events: [
              {
          "id": "184",
          "name": "Harry Styles FINE LINE",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100605488%2F445247269428%2F1%2Foriginal.20200510-070845?w=438&auto=format%2Ccompress&q=75&sharp=10&rect=121%2C0%2C438%2C219&s=e38a4a925a8153d69b12cd82f9e5f88b",
          "date": "Sat, Jun 20, 2020",
          "time": "12:00 PM PDT",
          "link": "https://www.eventbrite.co.uk/e/harry-styles-fine-line-tickets-104857862690?aff=ebdssbonlinesearch"
        },
        {
          "id": "185",
          "name": "#VirtualDayParties & #VirtualVS",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101933614%2F254238099628%2F1%2Foriginal.20200527-013807?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C141%2C500%2C250&s=534313a03fd8c142b3b0863026d35472",
          "date": "Thu, Jun 4, 2020",
          "time": "5:00 PM CDT",
          "link": "https://www.eventbrite.com/e/virtualdayparties-virtualvs-tickets-101654344882?aff=ebdssbonlinesearch"
        },
        {
          "id": "186",
          "name": "DCJazzFest From Home Series",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99457776%2F119015619107%2F1%2Foriginal.20200424-194945?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=382%2C0%2C1068%2C534&s=825de94e15775c953040327b94efe728",
          "date": "Sat, Jun 6, 2020",
          "time": "7:00 PM EDT",
          "link": "https://www.eventbrite.com/e/dcjazzfest-from-home-series-tickets-103369585212?aff=ebdssbonlinesearch"
        },
        {
          "id": "187",
          "name": "Why don\u2019t we and one direction stay at home concert",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100401476%2F444603329180%2F1%2Foriginal.20200507-071246?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C549%2C828%2C414&s=3932df80f9c6d294bdce1c522c8bf104",
          "date": "Wed, Jun 3, 2020",
          "time": "1:00 PM CDT",
          "link": "https://www.eventbrite.com/e/why-dont-we-and-one-direction-stay-at-home-concert-tickets-104616059450?aff=ebdssbonlinesearch"
        },
        {
          "id": "188",
          "name": "Why Don\u2019t We Stay Home concert",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100390776%2F442549010914%2F1%2Foriginal.20200507-024227?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C349%2C1080%2C540&s=07d9b456ca4d549b313b09c103107f5c",
          "date": "Sat, Jun 6, 2020",
          "time": "5:30 PM EDT",
          "link": "https://www.eventbrite.com/e/why-dont-we-stay-home-concert-tickets-104589195098?aff=ebdssbonlinesearch"
        },
        {
          "id": "189",
          "name": "SMTT: At Home",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99048928%2F441341652152%2F1%2Foriginal.20200420-045730?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C6%2C2386%2C1193&s=125aeb816d89ca90c561a60d4f81fa35",
          "date": "Sat, Jun 6, 2020",
          "time": "7:00 PM EDT",
          "link": "https://www.eventbrite.com/e/smtt-at-home-tickets-103108253562?aff=ebdssbonlinesearch"
        },
        {
          "id": "190",
          "name": "Romance Tour At Home",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100168898%2F444556407008%2F1%2Foriginal.20200504-211355?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C169%2C736%2C368&s=20ef2835c87dc6ace4ca3a6584d22d19",
          "date": "Tue, Jun 2, 2020",
          "time": "8:00 PM CDT",
          "link": "https://www.eventbrite.co.uk/e/romance-tour-at-home-tickets-104366396702?aff=ebdssbonlinesearch"
        },
        {
          "id": "191",
          "name": "Why don't we online festival!",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101174004%2F447205590384%2F1%2Foriginal.20200517-103926?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=9a01adce574222c486df36564a7d5190",
          "date": "Fri, Jun 5, 2020",
          "time": "9:30 PM CEST",
          "link": "https://www.eventbrite.com/e/why-dont-we-online-festival-tickets-105682240426?aff=ebdssbonlinesearch"
        },
        {
          "id": "192",
          "name": "QUARANTINGO! Virtual Music Bingo w/ Pour Entertainment",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98300940%2F307892959837%2F1%2Foriginal.20200408-203009?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C12%2C1080%2C540&s=2a0e87d5e72bb48631a350126b0d772f",
          "date": "Sun, Jun 7, 2020",
          "time": "2:00 PM EDT",
          "link": "https://www.eventbrite.com/e/quarantingo-virtual-music-bingo-w-pour-entertainment-tickets-102295448440?aff=ebdssbonlinesearch"
        },
        {
          "id": "193",
          "name": "In Session: Understanding music publishing",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101445780%2F365760079899%2F1%2Foriginal.20200520-155720?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C41%2C1920%2C960&s=0c81377a62b2ed39e11932cf4d909aad",
          "date": "Thu, Jun 4, 2020",
          "time": "1:00 PM EDT",
          "link": "https://www.eventbrite.com/e/in-session-understanding-music-publishing-tickets-104338581506?aff=ebdssbonlinesearch"
        },
        {
          "id": "194",
          "name": "Harry Styles tour at home",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101257944%2F444806640466%2F1%2Foriginal.20200518-173139?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C35%2C1440%2C720&s=1c221f76ee77122ef2cf72e2f8933791",
          "date": "Mon, Jun 8, 2020",
          "time": "5:00 PM EDT",
          "link": "https://www.eventbrite.com/e/harry-styles-tour-at-home-tickets-104531829516?aff=ebdssbonlinesearch"
        },
        {
          "id": "195",
          "name": "One direction",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101085310%2F440834339650%2F1%2Foriginal.20200515-164221?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d06be91d5837cef41119729e8f37f8a3",
          "date": "Mon, Jun 1, 2020",
          "time": "7:00 PM BST",
          "link": "https://www.eventbrite.com/e/one-direction-tickets-105836616168?aff=ebdssbonlinesearch"
        },
        {
          "id": "196",
          "name": "Purpose Tour Virtual Concert",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101163992%2F447173388538%2F1%2Foriginal.20200517-004456?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C627%2C828%2C414&s=781105e8f4c46675451faea2eded08aa",
          "date": "Sat, Jun 6, 2020",
          "time": "10:00 PM CEST",
          "link": "https://www.eventbrite.com/e/purpose-tour-virtual-concert-tickets-105545571646?aff=ebdssbonlinesearch"
        },
        {
          "id": "197",
          "name": "Why Don\u2019t We Online Concert !!",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100822806%2F446328596098%2F1%2Foriginal.20200512-232858?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C22%2C720%2C360&s=7d154e6f55cceb161ccddcb7191fb30e",
          "date": "Tue, Jun 2, 2020",
          "time": "2:00 PM CDT",
          "link": "https://www.eventbrite.com/e/why-dont-we-online-concert-tickets-105668294714?aff=ebdssbonlinesearch"
        },
        {
          "id": "198",
          "name": "No Shame OnLine Tour",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101717152%2F444637416130%2F1%2Foriginal.20200524-033233?w=300&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C300%2C150&s=1b22c45c4b5d957bcad25961bea232c4",
          "date": "Fri, Jun 12, 2020",
          "time": "8:00 PM BST",
          "link": "https://www.eventbrite.co.uk/e/no-shame-online-tour-tickets-105185641084?aff=ebdssbonlinesearch"
        },
        {
          "id": "199",
          "name": "Up All Night Experience",
          "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101162644%2F3358207041%2F1%2Foriginal.20200516-234622?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1080%2C540&s=251e37fd50a33c5c488bcaacc1e2e97e",
          "date": "Sat, Jun 6, 2020",
          "time": "12:00 PM CDT",
          "link": "https://www.eventbrite.co.uk/e/up-all-night-experience-tickets-106528002122?aff=ebdssbonlinesearch"
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

body,html{
  height: 100%;
}
</style>
