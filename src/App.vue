<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from 'pages/tab/tab'

export default {
  components: {
    Tab
  },
  name: 'App'
}
</script>

<style>
</style>
