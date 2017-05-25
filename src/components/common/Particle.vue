<template>
	<div class="particle">
			<!--<div class="loading" v-show = 'isLoading'>
				<span class="loading-anim">LOADING . . .</span>
			</div>-->
		<loading v-show = 'isLoading'></loading>
		<div id="canvasBox">
			<canvas id="canvas"></canvas>
			<div class = "logo" v-show = '!isLoading'>
				<img src="static/img/cloud/text.png"/>	
			</div>
		</div>
	</div>
</template>

<script>
	import loading from '@/components/common/loading'
	export default {
		name: 'particle',
		data() {
			return {
				threeR74: null,
				cloud: null,
				isLoading:true
			}
		},
		components: {
			loading,
		},
		beforeCreate(){
		},
		created() {
//			this.threeR74 = document.createElement('script');
//			this.threeR74.type = "text/javascript";
//			this.threeR74.src = "./static/three.r74.min.js";
//			document.body.appendChild(this.threeR74);
		},
		mounted() {
			var me = this;

			setTimeout(function() {
				me.cloud = document.createElement('script');
				me.cloud.type = "text/javascript";
				me.cloud.src = "./static/cloud.js";
				document.body.appendChild(me.cloud);
			}, 0)
			
			var stl = setInterval(function(){
				if(!window.paticleIsLoading){
					me.isLoading = false;
					window.paticleIsLoading = true;
					clearInterval(stl)
				}
			},200);
		},
		beforeDestroy() {
			window.cancelAnimationFrame(window._animation);
			var me = this;
			if(me.cloud) {
				me.cloud.remove();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

canvas{
	width: 100%;
	height: 100%;
	background-color: #343434;
}
.particle{
	height: 100%;
	width: 100%;
	/*position: relative;*/
}
#canvasBox{
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: relative;
}

#canvasBox img{
	position: absolute;	
	bottom:10px;
	left: 20px;
}
</style>