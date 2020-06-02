<template>
    <nav class="nav-bar">
        <button class="home-btn">
            <router-link to="/home">
                <h1>covents</h1>
                <h4>SOCIAL / DISTANT</h4>
            </router-link>
        </button>
        <Search v-on:submit-search="submitSearch"/>
        <CalendarContainer />
        <YourEvents v-bind:favorites="favorites"/>
    </nav>
</template>

<script>
import Search from './Search';
import CalendarContainer from './CalendarContainer';
import YourEvents from './YourEvents';

export default {
    name: "NavBar",
    props: ["favorites"],
    components: {
        Search,
        CalendarContainer,
        YourEvents
    },
    methods: {
        submitSearch(keyword) {
            this.$emit('search-events', keyword);
        }
    }
}
</script>

<style scoped>
    .nav-bar {
       background: #118AB2;
       height: 100%;
       width: 22%;
       display: flex;
       flex-flow: column nowrap;
       align-items: center;
       position: fixed;
    }

    .home-btn {
        background: none;
        border: none;
        width: 90%;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    h1 {
        font-size: 5em;
        letter-spacing: .1em;
    }

    h4 {
        font-size: 2em;
        letter-spacing: .15em;
    }

</style>
