<template> 
    <h4>{{checkForEvents(eventObj)}}</h4>
</template>

<script>
export default {
  name: "saved-event",
  props: ["favorites", "eventObj"],
  methods: {
    checkForEvents() {
      if (this.favorites.length) {
          return `${this.eventObj.event_name}`;
      } else {
        return "You have no saved events!";
      }
    },
  },
};
</script>

<style scoped></style>
