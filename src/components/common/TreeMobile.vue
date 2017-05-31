<template>
	<div class="tree">

		<div id="treebox">
			<loading v-show = 'isLoading'></loading>
			<div class="move" v-show = '!isLoading'>
				<div id="bg">
					<img id="img_bg" :style="fixHeight"  />
				</div>
				<div id="svg">
					<!--<embed id="tree_bg" src="static/img/tree/4605x768.svg" height="100%"></embed>-->
					<embed id="tree_bg" :src="src"  :style="fixHeight"></embed>
				</div>
			</div>
			<div class="logo"  v-show = '!isLoading'>
				<img src="static/img/tree/tree-logo.png" />
			</div>
		</div>
	</div>
</template>
<script>
	import svg from './img/tree/4605x768.svg';
	import loading from '@/components/common/loading';
	import TweenMax from "gsap";
	import tool from '@/assets/js/tool';
//	import PreLoad from '@/assets/js/preload';
	export default {
		name: 'tree',
		data() {
			return {
				src:svg,
				moveWidth:0,
				imgWidth:0,
				speed:100,
				time:60,
				move:null,
				isLoading:true,
				screenWidth:null,
				screenHeight:null,
				fixHeight:{
					height:null
				}
			}
		},
		components: {
			loading,
		},
		created(){
		},
		mounted () {
			
			var me = this;
			me.screenWidth = window.screen.availWidth;
			me.screenHeight = window.screen.availHeight;
			
			var treeBox = document.getElementById('treebox');
			var embed = document.getElementById('tree_bg');
			var img = document.getElementById('img_bg');
			this.move = document.querySelector('.move');
			
			if(window.treeImgBg){
				img.src = window.treeImgBg.src;
			}else{
				img.src = "static/img/tree/4605x768.jpg";
			}
//			console.log(tool.CurrentSystem.system.ipad)
			
			var isIpad = tool.CurrentSystem.system.ipad;
			if(me.screenWidth > 768 && !isIpad){
				me.fixHeight.height = (me.screenHeight-50) + 'px';
				me.speed = 100;
				
			}else{
				me.speed = 60;
				if(me.screenWidth > me.screenHeight){
					me.fixHeight.height = (me.screenWidth-50) + 'px';
				}else{
					me.fixHeight.height = (me.screenHeight-50) + 'px';
				}
			}
			
			img.onload = function(){
					me.isLoading = false;
					me.$nextTick(function(){
						me.moveWidth = img.offsetWidth;
						me.move.style.width = me.moveWidth + 'px';
						me.time = me.moveWidth/me.speed;
						TweenMax.killTweensOf(me.move);
						TweenMax.set(me.move,{x:0});
						TweenMax.to(me.move,me.time,{
							x:-me.moveWidth/2,
							ease: Power0.easeNone,
							repeat:-1
						})
					})
			}
			
			embed.addEventListener('load',function(){
				me.tree = document.createElement('script');
				me.tree.type = "text/javascript";
				me.tree.src = "static/tree.js";
				document.body.appendChild(me.tree);
			});
			
//			window.addEventListener('resize',function(){
//				setTimeout(function(){
//					img.onload();
//				},0)
//			});
			

			
//			setTimeout(function(){
//				this.tree = document.createElement('script');
//				this.tree.type = "text/javascript";
//				this.tree.src = "static/tree.js";
//				document.body.appendChild(this.tree);
//			},1000)
		},
		beforeDestroy() {
			var me = this;
			TweenMax.killTweensOf(me.move);
			setTimeout(function(){
				if(me.tree){
					me.tree.remove();
				}
			},0)
		},
		computed:{

		},
		beforeCreate(){
			
		},
		created:function(){
//			console.log("kkkk")
		},
		updated(){
//			console.log('updataee')
		},
		destroyed:function(){
//			console.log('destroyed');
		},
		activated (){
		},
		deactivated (){
		},
		watch: {
		},
		methods: {
//			mousemoveEvent: function(e) {
//				if(sucai1Arr && Math.random() > 0.99) {
//					sucai1Arr.forEach(function(sucai) {
//						sucai.shake();
//					});
//				}
//			},
//			mousedownEvent: function(e){
//				e.preventDefault();
//			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tree{
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
}

#treebox{
	position: absolute;
	height: 100%;
	width: 100%;
	/*top:50px;*/
	/*position: relative;
	overflow: hidden;*/
	/*background-color: red;*/
}
.move{
	width: 100%;
	height: 100%;
	background-color: #343434;
	position: absolute;
}
.logo{
	width: 100%;
	height: 100%;
	position: absolute;	
	z-index: 5;
}
.logo img{
	position: absolute;	
	top:50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	z-index: 2;
}
#svg{
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 1;
}
#bg{
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 0;
}
</style>