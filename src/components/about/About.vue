<template>
  <div class="about">
		{{msg}}
  </div>
 	<!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '我是about'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
