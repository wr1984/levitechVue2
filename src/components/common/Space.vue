<template>
	<div class="container space">
		<div id="canvasBox">
			<canvas id="canvas"></canvas>
			<div class = "logo">
				<img src="/static/img/space/space-logo.png"/>	
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
      msg: '我是space'
    }
  },
  created (){
//	window.THREE = require("three");
  	
  },
  mounted(){
//	console.log(Star)
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
	transform: translate(-50%, -50%);
	width: 20%;
}
</style>
