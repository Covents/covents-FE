<template>
  <div @click="selectDate" class="calendar-container">
    <v-date-picker
      mode="single"
      color="blue"
      v-model="selectedDate"
      :theme-styles="themeStyles"
      is-inline
    >
    </v-date-picker>
  </div>
</template>

<script>
export default {
  name: "calendar-container",
  data() {
    return {
      selectedDate: null,
      themeStyles: {
        wrapper: {
          border: "1",
        },
        header: {
          color: "#fafafa",
          backgroundColor: "#f142f4",
          borderColor: "#404c59",
          borderWidth: "1px 1px 0 1px",
        },
        headerVerticalDivider: {
          borderLeft: "1px solid #404c59",
        },
        weekdays: {
          color: "#ffffff",
          backgroundColor: "#f142f4",
          borderColor: "#ff0098",
          borderWidth: "0 1px",
          padding: "5px 0 10px 0",
        },
        weekdaysVerticalDivider: {
          borderLeft: "1px solid #404c59",
        },
        weeks: {
          border: "1px solid #dadada",
        },
      },
    };
  },
  methods: {
    selectDate(e) {
      let selectedDate = this.selectedDate;
      if (selectedDate && e.target.classList.contains("vc-day-content")) {
        this.$emit("handle-date", selectedDate);
      }
    },
  },
};
</script>

<style scoped>
.calendar-container {
  border-radius: 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 14px;
}
</style>
