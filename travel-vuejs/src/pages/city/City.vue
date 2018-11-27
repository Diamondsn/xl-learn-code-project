<template>
<div>
<city-header></city-header>
<city-search></city-search>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
