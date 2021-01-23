<template>
  <div id="app">
    <md-tabs router-link>
      <md-tab md-label="Staff" to="/staff"></md-tab>
      <md-tab md-label="Home" to="/"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
