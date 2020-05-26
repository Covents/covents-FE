<template>
    <div class="calendar-container">
        <Calendar />
    </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd';

export default {
    name: "calendar-container",
    components: {
        Calendar,
    }
}
</script>

<style scoped>

 .calendar-container {
    border-radius: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
 }

</style>