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

/* Calendar Styling */
  
  .vuecal__menu, .vuecal__cell-events-count {
    background-color: #ffffff;
  }
  .vuecal--green-theme .vuecal__title-bar {
    background-color: #9ed7ea;
    border-radius: 10px 10px 0 0;
  }
  .vuecal__title-bar button {
    font-size: 20px;
    text-transform: uppercase;
  }


  .vuecal--green-theme .vuecal__cell--today, 
  .vuecal--green-theme .vuecal__cell--current {
    background-color: #EF476F;
  }
  .vuecal--green-theme .vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
    background-color: #EF476F;
  }
  .vuecal--green-theme .vuecal__cell--selected:before {
    border-color: #EF476F;
  }

  .vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
  .vuecal--green-theme .vuecal__cell-split--highlighted {
    background-color: #EF476F;
  }
  .vuecal--green-theme .vuecal__arrow.vuecal__arrow--highlighted,
  .vuecal--green-theme .vuecal__view-btn.vuecal__view-btn--highlighted {
    background-color: #EF476F;
  }

</style>
