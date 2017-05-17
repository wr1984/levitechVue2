<template>
  <div class="contacts  container">
		{{msg}}
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      msg: '我是contacts'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
