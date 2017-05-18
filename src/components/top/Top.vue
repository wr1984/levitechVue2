<template>
  <div class="top">
		{{msg}}
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: '我是top'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		/*width: 100%;
		height: 500px;
		background-color: royalblue;*/
	}
</style>
