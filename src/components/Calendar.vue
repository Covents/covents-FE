<template>
    <div class="calendar">
        <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
                xsmall
                hide-view-selector
                :time="false"
                active-view="month"
                :disable-views="['week']">
        </vue-cal>
    </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'
export default {
    name: "calendar",
    components: {
        VueCal
    }
}
</script>

<style scoped>

 .calendar {
    width: 85%;
    background: #ffffff;
    border-radius: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
 }

</style>