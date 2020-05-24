<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Playfair Display', serif;
}

h2,
h3,
p {
  font-family: 'Roboto Condensed', sans-serif;
}

</style>
