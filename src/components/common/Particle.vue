<template>
	<div class="particle">
		<div id="canvasBox">
			<canvas id="canvas"></canvas>
			<div class = "logo">
				<img :style='imgStyle' src="static/img/cloud/text.png"/>	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'particle',
		data() {
			return {
				threeR74: null,
				cloud: null,
				height:0,
				imgStyle:{
					width:'320px'
				},
				w:0
			}
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
			
			var canvasBox = document.getElementById('canvasBox');
			window.onload = function(){
				me.w = canvasBox.offsetWidth;
				if(me.w < 768){
					me.imgStyle.width = "150px";
				}else{
					me.imgStyle.width = "320px";
				}
			}
			
			window.addEventListener('resize',function(){
				me.w = canvasBox.offsetWidth;
				if(me.w<768){
					me.imgStyle.width = "150px"
				}else{
					me.imgStyle.width = "320px";
				}
			})
			
			
//			setTimeout(function() {
				me.cloud = document.createElement('script');
				me.cloud.type = "text/javascript";
				me.cloud.src = "./static/cloud.js";
				document.body.appendChild(me.cloud);
//			}, 0)
		},
		beforeDestroy() {
			window.cancelAnimationFrame(window._animation);
			var me = this;
			//	console.log('destroyed')
//			if(me.threeR74) {
//				me.threeR74.remove();
//			}
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
	position: relative;
}
/*.logo{
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: blueviolet;
}*/
#canvasBox img{
	position: absolute;	
	bottom:10px;
	left: 20px;
	/*width: 20%;*/
}
</style>