<template>
  <div class="container particle">
		{{msg}}
  </div>
</template>

<script>
export default {
  name: 'particle',
  data () {
    return {
      msg: '我是 粒子系统'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
