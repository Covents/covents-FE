<template>
    <div class="your-events">
        <h2>YOUR EVENTS:</h2>
        <h4>You have no saved events!</h4>
    </div>
</template>

<script>
export default {
    name: "your-events",
    methods: {
        checkForEvents() {
        }
    },
    mounted() {
        this.checkForEvents()
    }
}
</script>

<style scoped>
    h2 {
        color: #ffffff;
        margin: 20px;
    }
    h4 {
        color: #ffffff;
        text-align: center;
    }
</style>