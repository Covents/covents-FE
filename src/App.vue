 <template>
  <div id="app">
      <Nav /> 
      <EventsContainer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import EventsContainer from './components/EventsContainer'
export default {
  name: "app",
  components: {
    Nav,
    EventsContainer
  }
}
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
    font-family: 'Playfair Display', serif;
  }

  h2,
  h3,
  h4,
  p {
    font-family: 'Roboto Condensed', sans-serif;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background: #ffffff;
    display: flex;
    flex-flow: row nowrap;
  }

</style>
