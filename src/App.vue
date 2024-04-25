<script setup>
    import HelloWorld from './components/Home.vue'
</script>

<template>
    <head>
        <!-- ... other head elements -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style>
    #app {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 2px;
    }
</style>

./components/Home.vue