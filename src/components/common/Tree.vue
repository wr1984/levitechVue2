<template>
	<div class="tree container">
		<div id="treebox">
			<div class="move">
				<div id="bg">
					<img id="img_bg" height="100%" src="/static/img/tree/10860x1811.jpg" />
				</div>
				<div id="svg">
					<embed id="tree_bg" :src="src" height="100%"></embed>
				</div>
			</div>
			<div class="logo">
				<img src="/static/img/tree/tree-logo.png" />
			</div>
		</div>
	</div>
</template>
<script>
	import svg from './img/tree/10860x1811.svg';
	import TweenMax from "gsap";
	import SucaiObj from '@/assets/js/tree';
	const yzOrigin = ["0% 100%", "10% 100%", "0% 50%", "0% 100%", "90% 100%", "100% 60%", "90% 100%", "0% 100%", "0% 100%","10% 100%","100% 100%","0% 100%","0% 100%","100% 60%","100% 80%","100% 100%","0% 100%",
					"0% 100%", "10% 100%", "0% 50%", "0% 100%", "90% 100%", "100% 60%", "90% 100%", "0% 100%", "0% 100%","10% 100%","100% 100%","0% 100%","0% 100%","100% 60%","100% 80%","100% 100%","0% 100%"];
	const hdOringin = ["50% 50%", "50% 50%","50% 50%", "50% 50%"];
	
	export default {
		name: 'tree',
		data() {
			return {
				src:svg,
				svg_yz:null,
				hdArr:null,
				yzArr:null
			}
		},
		mounted () {
			var me = this;
//			window.onload=function(){
//				
//
//			}
			this.$nextTick(function(){
				var embed = document.getElementById('tree_bg');
				
				
				setTimeout(function(){
					this.svg_yz = embed.getSVGDocument().getElementById('svg');
					this.hdArr1 = initSucai('hd1_', 'hd2_', 4, hdOringin, svg_yz);
					this.sucai1Arr = initSucai('yz1_', 'yz2_', 34, yzOrigin, svg_yz);
					this.sucai1Arr.forEach(function(yz) {
						yz.init();
						yz.grow(randomInRange(3, 10), randomInRange(1, 5));
					});
					this.hdArr1.forEach(function(hd) {
						hd.init();
						hd.grow(0.1, 0.1);
					});
				},0)
			
			})
			function initSucai(name1, name2, count, origin, svg) {
				var arr = [];
				for(var i = 0; i < count; i++) {
					arr.push(new SucaiObj(name1, name2, i, origin, svg));
				}
				return arr;
			};
			function randomInRange(min, max) {
				return Math.round(Math.random() * (max - min + 1)) + min;
			}

		},
		updated(){
			console.log('updataee')
		},
		watch: {

		},
		destroyed:function(){
//			console.log('destroyed');
		},
		created:function(){

		},
		methods: {
			initSucai:function(name1, name2, count, origin, svg) {
				var arr = [];
				for(var i = 0; i < count; i++) {
					arr.push(new SucaiObj(name1, name2, i, origin, svg));
				}
				return arr;
			}
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

#move{
	width: 100%;
	height: 100%;
	background-color: #343434;
	position: absolute;
}

#treebox{
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	/*background-color: red;*/
}
.logo img{
	position: absolute;	
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 20%;
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