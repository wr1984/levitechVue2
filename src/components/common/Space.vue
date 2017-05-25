<template>
	<div class="space">
		<div id="canvasBox">
			<loading v-show='isLoading'></loading>
			<canvas id="canvas"></canvas>
			<div class="logo" v-show='!isLoading'>
				<img src="static/img/space/space-logo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	import TweenMax from "gsap";
	//import Star from '@/assets/js/star.js';
	import Space from '@/assets/js/appSpace.js';
	//console.log(space);
	import loading from '@/components/common/loading'

	export default {
		name: 'space',
		data() {
			return {
				isLoading: true
			}
		},
		components: {
			loading,
		},
		created() {
			window.THREE2 = require("three");

		},
		mounted() {
			//	console.log(Star)
			var me = this;

			setTimeout(function() {
				new Space();
			}, 0);
			var stl = setInterval(function(){
				if(!window.spaceIsLoading){
					me.isLoading = false;
					window.paticleIsLoading = true;
					clearInterval(stl)
				}
			},200);
			
		},
		beforeDestroy() {
			window.cancelAnimationFrame(window._spaceAnimation);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#canvas {
		width: 100%;
		height: 100%;
		background-color: #343434;
	}
	
	.space {
		height: 100%;
		/*position: relative;*/
	}
	
	#canvasBox {
		height: 100%;
		width: 100%;
		position: relative;
		/*background-color: red;*/
	}
	
	#canvasBox img {
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>