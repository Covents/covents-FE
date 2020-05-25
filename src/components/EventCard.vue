<template>
  <div class="event-card">
    <button class="heart-btn"><img class="unfilled-heart" src="../../public/empty-heart.png" alt="unfilled heart"></button>
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg" alt="No image available">
    <h3>SHAWN MENDES: THE VIRTUAL TOUR</h3>
    <button class="event-details-btn">EVENT DETAILS</button>
  </div>
</template>

<script>
export default {
  name: "event-card"
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
}

h3 {
  font-size: 24px;
  font-weight: normal;
  margin-left: 1em;
}

.event-details-btn {
  background: #EF476F;
  border: none;
  color: white;
  font-size: 24px;
  font-family: 'Roboto Condensed', sans-serif;
  width: 85%;
  height: 16%;
  border-radius: 10px;
  margin-bottom: .5em;
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

</style>