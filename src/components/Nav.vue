<template>
    <nav class="nav-bar">
        <button class="home-btn">
            <router-link to="/">
                <h1>covents</h1>
                <h4>SOCIAL / DISTANT</h4>
            </router-link>
        </button>
        <Search />
        <Calendar />
        <YourEvents />
    </nav>
</template>

<script>
import Search from './Search';
import Calendar from './Calendar';
import YourEvents from './YourEvents';

export default {
    name: "nav",
    components: {
        Search,
        Calendar,
        YourEvents
    }
}
</script>

<style scoped>
    .nav-bar {
       background: #118AB2;
       height: 100vh;
       width: 22%;
       position: sticky;
       display: flex;
       flex-flow: column nowrap;
       align-items: center;
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
