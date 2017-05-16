<template>
	<div id="cloud" class="container particle">
	</div>
</template>

<script>
//	require('@/static/three.r74.min');
//	console.log(THREE)
	//setTimeout(function(){
//	require('@/static/cloud')
	//},5000)

	export default {
		name: 'particle',
		data() {
			return {
				threeR74: null,
				cloud: null
			}
		},
		created() {
			//	  this.cloud = document.createElement('script');
			//		this.cloud.type = "text/javascript";
			//		this.cloud.src = "./static/cloud.js";
			//		document.body.appendChild(this.cloud);
		},
		mounted() {
			console.log('mounted1')
			this.threeR74 = document.createElement('script');
			this.threeR74.type = "text/javascript";
			this.threeR74.src = "./static/three.r74.min.js";
			document.body.appendChild(this.threeR74);
			console.log('mounted2')
			var me = this;
			setTimeout(function() {
				me.cloud = document.createElement('script');
				me.cloud.type = "text/javascript";
				me.cloud.src = "./static/cloud.js";
				document.body.appendChild(me.cloud);
			}, 100)
		},
		beforeDestroy() {
			var me = this;
			//	console.log('destroyed')
			if(me.threeR74) {
				me.threeR74.remove();
			}
			if(me.cloud) {
				me.cloud.remove();
			}
		},
		//destroyed(){
		//	this.$destroy();
		//},
		//beforeRouteLeave (to, from, next) {
		//		console.log('beforeRouteLeave');	
		//		this.$destroy();
		//}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>