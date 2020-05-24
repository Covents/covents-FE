<template>
  <div id="app">
    <div>
      <Nav />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: "app",
  components: {
    Nav
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

  body {
    height: 100%;
    width: 100vw;
    background: #ffffff;
    display: flex;
    flex-flow: column wrap;
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
</style>
