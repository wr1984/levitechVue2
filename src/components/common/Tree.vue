<template>
	<div class="tree">
		<div id="treebox">
			<loading v-show = 'isLoading'></loading>
			<div class="move" v-show = 'isShow'>
				<div id="bg">
					<img id="img_bg" height="100%" src="static/img/tree/10860x1811.jpg" />
				</div>
				<div id="svg">
					<!--<embed id="tree_bg" :src="src" height="100%"></embed>-->
					<embed id="tree_bg" src="static/img/tree/10860x1811.svg" height="100%"></embed>
				</div>
			</div>
			<div class="logo" v-show = 'isShow'>
				<img src="static/img/tree/tree-logo.png" />
			</div>
		</div>
	</div>
</template>
<script>
//	import svg from './img/tree/10860x1811.svg';
	import loading from '@/components/common/loading'
	import TweenMax from "gsap";
	export default {
		name: 'tree',
		data() {
			return {
//				src:svg,
				moveWidth:0,
				imgWidth:0,
				speed:100,
				time:60,
				move:null,
				isShow:false,
				isLoading:true
			}
		},
		components: {
			loading,
		},
		mounted () {
			var me = this;
			var treeBox = document.getElementById('treebox');
			var embed = document.getElementById('tree_bg');
			var img = document.getElementById('img_bg');
			this.move = document.querySelector('.move');
			embed.addEventListener('load',function(){
				me.tree = document.createElement('script');
				me.tree.type = "text/javascript";
				me.tree.src = "static/tree.js";
				document.body.appendChild(me.tree);
			});
			
			img.onload = function(){
					me.isShow = true;
					me.$nextTick(function(){
						me.moveWidth = img.offsetWidth;
						console.log(me.moveWidth)
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
			
			window.addEventListener('resize',function(){
				setTimeout(function(){
					img.onload();
				},0)
			});
			
//			setTimeout(function(){
//				this.tree = document.createElement('script');
//				this.tree.type = "text/javascript";
//				this.tree.src = "static/tree.js";
//				document.body.appendChild(this.tree);
//			},1000)
		},
		beforeDestroy() {
			TweenMax.killTweensOf(this.move);
			setTimeout(function(){
				if(this.tree){
					this.tree.remove();
				}
			},0)
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
			isShow(){
				if(this.isShow){
					this.isLoading = false;
				}
			}
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
}


#treebox{
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
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