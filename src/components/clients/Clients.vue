<template>
  <div class="clients">
		{{msg}}
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'clients',
  data () {
    return {
      msg: '我是clients'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
