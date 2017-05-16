<template>
	<!--@mousemove="mousemoveEvent"--> 
	<div class="tree" @mousemove="mousemoveEvent" @mousedown="mousedownEvent">
		<div id="box" :style="boxStyle">
			<div class="move" :style="moveStyle">
				<div id="bg">
					<img id="img_bg" :style="boxStyle" src="./img/tree/tree-3200x786.png" />
				</div>
				<div id="svg">
					<embed id="tree_bg" :src="src" ></embed>
				</div>
			</div>
			<div class="logo">
				<img :style="imgStyle" src="./img/tree/tree-logo.png" />
			</div>
		</div>
	</div>
</template>
<script>
	import svg from './img/tree/tree-yz-3200x786.svg';
	import TweenMax from "gsap";
	
	var hdArr1;
	var sucai1Arr;
	var svg_yz;
	var embed;
	//var width = window.innerWidth;
	var height = window.innerHeight - 80;
	if(height < 568) {
		height = 568;
	}
	
	
	var yzOrigin = ["10% 100%", "100% 90%", "100% 100%", "100% 90%", "0% 100%", "100% 100%", "100% 90%", "0% 100%", "100% 100%"];
	var hdOringin = ["50% 50%", "50% 50%"];
//	let img_w;
	//svgBox.style.width = width + 'px';
	//svgBox.style.height = height + 'px';

	function initSucai(name1, name2, count, origin, svg) {
		var arr = [];
		for(var i = 0; i < count; i++) {
			arr.push(new SucaiObj(name1, name2, i, origin, svg));
		}
		return arr;
	};

	function SucaiObj(name1, name2, index, origin, svg) {
		this.el = svg.getElementById(name1 + index);
		this.el2 = svg.getElementById(name2 + index);
		this.x;
		this.y;
		this.opacity = 0.9;
		this.scale = 0;
		this.transformOrigin = origin[index];
		this.isFall = false;
		this.isGrow = false;
		this.isShake = false;

		SucaiObj.prototype.init = function() {
			TweenMax.set([this.el, this.el2], {
				opacity: this.opacity,
				scale: this.scale,
				transformOrigin: this.transformOrigin
			});
		}
		SucaiObj.prototype.grow = function(growTime, delayTime, scale, startAt) {
			this.isGrow = true;
			TweenMax.to([this.el, this.el2], growTime || 10, {
				scale: scale || 1,
				ease: Linear.easeNone,
				delay: delayTime || 2,
				startAt: startAt,
				onComplete: function(me) {
					me.isGrow = false
				},
				onCompleteParams: [this]
			});
		}
		SucaiObj.prototype.shake = function() {
			if(!this.isFall && !this.isGrow && !this.isShake) {
				this.isShake = true;
				new TimelineMax().to([this.el, this.el2], 0.2, {
						rotation: 10
					})
					.to([this.el, this.el2], 10, {
						rotation: 0,
						ease: Elastic.easeOut.config(3, 0.1),
						onComplete: function(me) {
							me.isShake = false;
							if(Math.random() > 0.8) {
								me.fall();
							}
						},
						onCompleteParams: [this]

					})
			}
		}
		SucaiObj.prototype.fall = function() {
			if(this.isGrow || this.isFall) {
				return
			};

			this.isFall = true;
			var temp = [-1, 1];
			var t = new TimelineMax({
				onComplete: this.reGrow,
				onCompleteParams: [this]
			});
			t.to([this.el, this.el2], 10, {
					y: height + 200,
				})
				.to([this.el, this.el2], 15, {
					x: randomInRange(10, 20) * temp[Math.round(Math.random())],
					ease: Elastic.easeOut.config(3, 0.1)
				}, "-=9.8")
				.to([this.el, this.el2], 6, {
					rotation: randomInRange(60, 180),
				}, "-=15")
		}

		SucaiObj.prototype.reGrow = function(obj) {
			obj.isFall = false;
			obj.grow(randomInRange(5, 10), randomInRange(1, 5), 1, {
				x: 0,
				y: 0,
				rotation: 0,
				scale: 0
			});
		}
	}

	function randomInRange(min, max) {
		return Math.round(Math.random() * (max - min + 1)) + min;
	}
	
//	window.onload = function() {
//		var yzOrigin = ["10% 100%", "100% 90%", "100% 100%", "100% 90%", "0% 100%", "100% 100%", "100% 90%", "0% 100%", "100% 100%"];
//		var hdOringin = ["50% 50%", "50% 50%"];
//
//		let embed = document.querySelector('#tree_bg');
//		let svg_yz = embed.getSVGDocument().querySelector('#svg');
//
//		hdArr1 = initSucai('hd1_', 'hd2_', 1, hdOringin, svg_yz);
//		sucai1Arr = initSucai('yz1_', 'yz2_', 9, yzOrigin, svg_yz);
//
//		sucai1Arr.forEach(function(yz) {
//			yz.init();
//			yz.grow(randomInRange(5, 20), randomInRange(1, 5));
//		});
//		hdArr1.forEach(function(hd) {
//			hd.init();
//			hd.grow(0.1, 0.1);
//		});
//		
//		console.log(sucai1Arr[0])
//	}
	
	

	export default {
		name: 'tree',
		data() {
			return {
				src: svg,
				l: 0,
				img_w: 3200,
				h: height,
				moveStyle: {
					width: '3200px',
					left: 0 + 'px'
				},
				boxStyle: {
					height: height + 'px'
				},
				imgStyle: {
					width: 25 + '%',
				}
			}
		},
		mounted: function() {
			let me = this;
			let img_bg = document.getElementById('img_bg');
			img_bg.onload = function(){
				me.img_w = img_bg.offsetWidth;
//				console.log("初始化图片宽"+me.img_w )
				setInterval(function() {
					me.l -= 1;
					if(me.l < -me.img_w / 2) {
						me.l = 0;
					}
				}, 60 / 1000);
			}
			window.addEventListener('resize', function() {
				me.h = window.innerHeight - 80;
				me.img_w = img_bg.offsetWidth;
			});
			window.onload = function() {
				console.log('mounted')
				embed = document.querySelector('#tree_bg');
				svg_yz = embed.getSVGDocument().querySelector('#svg');

				hdArr1 = initSucai('hd1_', 'hd2_', 1, hdOringin, svg_yz);
				sucai1Arr = initSucai('yz1_', 'yz2_', 9, yzOrigin, svg_yz);

				sucai1Arr.forEach(function(yz) {
					yz.init();
					yz.grow(randomInRange(5, 20), randomInRange(1, 5));
				});
				hdArr1.forEach(function(hd) {
					hd.init();
					hd.grow(0.1, 0.1);
				});
			}

		},
		watch: {
			l: function() {
				this.moveStyle.left = this.l + 'px';
			},
			img_w: function() {
				this.moveStyle.width = this.img_w + 'px';
				console.log('图片宽度变化')
				// 		let embed = document.querySelector('#tree_bg');
				// 		let svg_yz = embed.getSVGDocument().querySelector('#svg');
				// 		svg_yz.setAttribute('viewBox','0 0 '+ this.img_w + ' ' + this.h);

			},
			h: function(newVal, oldVal) {
				if(newVal >= 568) {
					this.boxStyle.height = this.h + 'px';

				} else {
					this.h = 568;
					this.boxStyle.height = this.h + 'px';
				}
			}
		},
		destroyed:function(){
			console.log('destroyed');
		},
		created:function(){
				console.log('created');
//				let embed = document.querySelector('#tree_bg');
//				let svg_yz = embed.getSVGDocument().querySelector('#svg');

				hdArr1 = initSucai('hd1_', 'hd2_', 1, hdOringin, svg_yz);
				sucai1Arr = initSucai('yz1_', 'yz2_', 9, yzOrigin, svg_yz);

				sucai1Arr.forEach(function(yz) {
					yz.init();
					yz.grow(randomInRange(5, 20), randomInRange(1, 5));
				});
				hdArr1.forEach(function(hd) {
					hd.init();
					hd.grow(0.1, 0.1);
				});
		},
		methods: {
			mousemoveEvent: function(e) {
				if(sucai1Arr && Math.random() > 0.99) {
					sucai1Arr.forEach(function(sucai) {
						sucai.shake();
					});
				}
			},
			mousedownEvent: function(e){
				e.preventDefault();
			}

		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tree {
		width: 100%;
		/*overflow: hidden;*/
		/*position: relative;*/
		background-color: black;
	}
	
	#box {
		position: relative;
		width: 100%;
		overflow: hidden;
		background-color: red;
	}
	
	.move {
		position: absolute;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	
	.logo {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		/*align-content: center;*/
		width: 100%;
		height: 100%;
		z-index: 999;
		/*background-image: url(./img/tree/tree-logo.png);
				background-position: center;	
				background-size: 25% 35%;
				background-repeat: no-repeat;*/
		/*background-color: red;*/
	}
	
	#bg {
		position: absolute;
		height: 100%;
		width: 100%;
	}
	
	#svg {
		position: absolute;
		height: 100%;
		width: 100%;
		/*background-color: royalblue;*/
	}
</style>