<template>
  <div class="projects">
		{{msg}}
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      msg: '我是projects'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
