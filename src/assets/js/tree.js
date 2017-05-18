//;(function(window,document){
	
	var yzOrigin = ["0% 100%", "10% 100%", "0% 50%", "0% 100%", "90% 100%", "100% 60%", "90% 100%", "0% 100%", "0% 100%","10% 100%","100% 100%","0% 100%","0% 100%","100% 60%","100% 80%","100% 100%","0% 100%",
					"0% 100%", "10% 100%", "0% 50%", "0% 100%", "90% 100%", "100% 60%", "90% 100%", "0% 100%", "0% 100%","10% 100%","100% 100%","0% 100%","0% 100%","100% 60%","100% 80%","100% 100%","0% 100%"];
	var hdOringin = ["50% 50%", "50% 50%","50% 50%", "50% 50%"];
	var hdArr1;
	var sucai1Arr;
	var tree = function init(){

		var embed = document.getElementById('tree_bg');
		var svg_yz= embed.getSVGDocument().getElementById('svg');
		hdArr1 = initSucai('hd1_', 'hd2_', 4, hdOringin, svg_yz);
		sucai1Arr = initSucai('yz1_', 'yz2_', 34, yzOrigin, svg_yz);

		sucai1Arr.forEach(function(yz) {
			yz.init();
		});
		hdArr1.forEach(function(hd) {
			hd.init();
		});
		
		//===========================定时摇摆============================================
			setInterval(function(){
				sucai1Arr.forEach(function(yz){
					if(Math.random() > 0.6){
						yz.shake();
					}
				});
				hdArr1.forEach(function(hd){
					if(Math.random() > 0.6){
						hd.fall();
					}
				});
			}, 10000);
			
			var treeBox = document.querySelector('.logo');
			treeBox.addEventListener('mousedown',mousemoveEvent,true);
	}
		
//	
	var tag = true;
	function mousemoveEvent(e){
		e.preventDefault();
		if(tag){
			tag = false;
			sucai1Arr.forEach(function(yz){
				if(Math.random() > 0.5){
					yz.shake();
				}
			});
			hdArr1.forEach(function(hd){
				if(Math.random() > 0.58){
					hd.fall();
				}
			});
			tag = true;
		}
	};
	
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
		this.opacity = 1;
		this.scale = 1;
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
			var temp = [-1, 1];
			if(!this.isFall ) {
				this.isShake = true;
//				TweenMax.killTweensOf(this.el);
//				TweenMax.killTweensOf(this.el2);
//				console.log('摇摆')
				new TimelineMax().to([this.el, this.el2], 0.5, {
						rotation: randomInRange(5,20) * temp[Math.round(Math.random())]
					})
					.to([this.el, this.el2], randomInRange(10,15), {
						rotation: 0,
						ease: Elastic.easeOut.config(3, 0.1),
//						onComplete: function(me) {
//							me.isShake = false;
//							if(Math.random() > 0.2) {
//								me.fall();
//							}
//						},
//						onCompleteParams: [this],
						onUpdate:function(me){
							me.isShake = false;
							
							if(Math.random() > 0.996) {
								TweenMax.killTweensOf(this.el);
								TweenMax.killTweensOf(this.el2);
								me.fall();
							}
						},
						onUpdateParams:[this]

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
					y: 1811,
				})
				.to([this.el, this.el2], 15, {
					x: randomInRange(15,50) * temp[Math.round(Math.random())],
					ease: Elastic.easeOut.config(3, 0.1)
				}, "-=9.8")
				.to([this.el, this.el2], 6, {
					rotation: randomInRange(60, 360)* temp[Math.round(Math.random())],
				}, "-=15")
				.to([this.el, this.el2], 6, {
					skewX:randomInRange(30, 360) * temp[Math.round(Math.random())] + 'deg',
				}, "-=15")
		}

		SucaiObj.prototype.reGrow = function(obj) {
			obj.isFall = false;
			obj.grow(randomInRange(5, 10), randomInRange(1, 5), 1, {
				x: 0,
				y: 0,
				rotation: 0,
				scale: 0,
				skewX:0
			});
		}
	}

	function randomInRange(min, max) {
		return Math.round(Math.random() * (max - min + 1)) + min;
	}


	export default tree;
//})(window,document);
