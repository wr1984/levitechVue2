<template>
	<div class="particle">
		<!--<div class="loading" v-show = 'isLoading'>
				<span class="loading-anim">LOADING . . .</span>
			</div>-->
		<loading v-show='isLoading'></loading>
		<div id="canvasBox" >
			<canvas id="canvas"></canvas>
			<div class="logo" v-show='!isLoading'>
				<img v-show='isImgShow' src="static/img/cloud/text.png" />
				<img v-show='!isImgShow' src="static/img/cloud/text_s.png" />
			</div>
		</div>
	</div>
</template>

<script>
	import loading from '@/components/common/loading'
	import tool from '@/assets/js/tool'
	export default {
		name: 'particle',
		data() {
			return {
				screenWidth:null,
				screenHeight:null,
				isImgShow:true,
				cloud: null,
				isLoading: true,
				urls: ["static/three.r74.min.js", "static/cloud.js"]
			}
		},
		components: {
			loading,
		},
		beforeCreate() {},
		created() {
			var me = this;
			tool.loadScript(me.urls[0],function(){
					tool.loadScript(me.urls[1])
			});
		},
		mounted() {

			var me = this;
			me.screenWidth = window.screen.availWidth;
			me.screenHeight = window.screen.availHeight;
//			console.log(me.screenWidth,me.screenHeight);
			if(me.screenWidth<768 && me.screenWidth > me.screenHeight){
				me.isImgShow = false;
			}else{
				me.isImgShow = true;
			}
			
			window.addEventListener('resize',function(){
				setTimeout(function(){
					me.screenWidth = window.screen.availWidth;
					me.screenHeight = window.screen.availHeight;
				
					if(me.screenWidth<768 && me.screenWidth > me.screenHeight){
						me.isImgShow = false;
					}else{
						me.isImgShow = true;
					}
					
				},0);
			})
//			setTimeout(function() {
//				me.cloud = document.createElement('script');
//				me.cloud.type = "text/javascript";
//				me.cloud.src = "./static/cloud.js";
//				document.body.appendChild(me.cloud);
//			}, 0)
			var stl = setInterval(function() {
				if(!window.paticleIsLoading) {
					me.isLoading = false;
					window.paticleIsLoading = true;
					clearInterval(stl)
				}
			}, 200);
		},
		beforeDestroy() {
			window.cancelAnimationFrame(window._animation);
			var me = this;
			if(me.cloud) {
				me.cloud.remove();
			};

			tool.unloadScript(me.urls);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	canvas {
		width: 100%;
		height: 100%;
		background-color: #343434;
	}
	
	.particle {
		height: 100%;
		width: 100%;
		/*position: relative;*/
	}
	
	#canvasBox {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: relative;
	}
	
	#canvasBox img {
		position: absolute;
		bottom: 10px;
		left: 20px;
	}
</style>