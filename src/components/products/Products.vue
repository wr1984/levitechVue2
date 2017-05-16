<template>
  <div class="products">
		{{msg}}
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      msg: '我是products'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
