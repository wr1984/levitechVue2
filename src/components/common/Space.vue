<template>
	<div class="space">
		<div id="canvasBox">
			<canvas id="canvas"></canvas>
			<div class = "logo">
				<img :style="imgStyle" src="static/img/space/space-logo.png"/>	
			</div>
		</div>
	</div>
</template>

<script>
import TweenMax from "gsap";
//import Star from '@/assets/js/star.js';
import Space from '@/assets/js/appSpace.js';
//console.log(space);

export default {
  name: 'space',
  data () {
    return {
    	w:0,
    	imgStyle:{
    		width:"320px"
    	}
    }
  },
  created (){
//	window.THREE = require("three");
  	
  },
  mounted(){
//	console.log(Star)
		var me = this;
		var canvas = document.getElementById('canvas');
		window.onload = function(){
			me.w = canvas.offsetWidth;
			if(me.w < 768){
				me.imgStyle.width = "150px";
			}else{
				me.imgStyle.width = "320px";
			}
			
		}
		
		window.addEventListener('resize',function(){
			me.w = canvas.offsetWidth;
			if(me.w<768){
				me.imgStyle.width = "150px"
			}else{
				me.imgStyle.width = "320px";
			}
		})
		setTimeout(function(){
			new Space();
			
		},0)
  },
  beforeDestroy(){
  	window.cancelAnimationFrame(window._spaceAnimation);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas{
	width: 100%;
	height: 100%;
	background-color: #343434;
}
.space{
	height: 100%;
	/*position: relative;*/
}
#canvasBox{
	height: 100%;
	width: 100%;
	position: relative;
	/*background-color: red;*/
}
#canvasBox img{
	position: absolute;	
	top:50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	/*width: 20%;*/
}
</style>
