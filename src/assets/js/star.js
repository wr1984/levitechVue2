//window.THREE2 = require("THREE2");
//import TweenMax from "gsap";

	var tlRotate;
	var tlMove;
	var easeArr2 = 	[
						SlowMo.ease.config(0.5, 0.4, false),
						SlowMo.ease.config(0.1, 0.7, false),
//						Bounce.easeInOut,
						Power4.easeInOut,
						Back.easeInOut.config(4),
						Power0.easeNone,
						Expo.easeInOut,
						Bounce.easeInOut
					];
	var easeArr = 	[
						SlowMo.ease.config(0.5, 0.4, false),
						Bounce.easeIn,
						Bounce.easeOut,
						Power4.easeIn,
						Power4.easeOut,
						Back.easeIn.config(4),
						Back.easeOut.config(3),
						Power0.easeNone,
						Expo.easeIn,
						Expo.easeOut,
						Bounce.easeIn,
						Bounce.easeOut
					];
					 //Elastic.easeInOut.config(2.5, 0.1),
	var minDistance = 10;
	class Star {
		constructor(params) {
			this.mesh = params.mesh;
			this.name = params.name;
			this.width = window.innerWidth/2;
			this.height = window.innerHeight/2;
			this.position = params.pos; 
//			this.init();
			this.rSpeed = this.randomInRange(20,50);
			this.mSpeed = this.randomInRange(1,5);
			this.rotate();
			
		}

		init() {
			
//			console.log(this.position)
//			if(Math.random()>0.5){
//				TweenMax.from(this.mesh.material,5,{
//					opacity:0,
//				})
//			}else{
//				TweenMax.from(this.mesh.position,2,{
//					z:-1500,
//					ease:Bounce.easeOut
//				})
//			}
		}
		
		
		rotate() {
			let temp = [-1,1];
			if(this.name === "e") {
				let tlRotate = new TimelineMax({
					repeat:-1,
//					repeatDelay:this.randomInRange(1,10),
					yoyo:true
				});
				tlRotate.to(this.mesh.rotation, this.rSpeed, {
					x:Math.PI*2*12,
					ease:easeArr[this.randomInRange(0,6)]
				})
				.to(this.mesh.rotation,this.rSpeed,{
					y:Math.PI*2*12,
					ease:easeArr[this.randomInRange(0,6)]
				})
				.to(this.mesh.rotation,this.rSpeed,{
					z:Math.PI*2*12,
					ease:easeArr[this.randomInRange(0,6)]
				})

			} else {
				TweenMax.to(this.mesh.material,  this.rSpeed, {
					rotation:Math.PI*2*10*temp[Math.round(Math.random())],
					ease:easeArr[this.randomInRange(0,6)],
					repeat:-1,
					yoyo:true,
					repeatDelay:5
				})
			}
		}
		
		show(delay){
			TweenMax.from(this.mesh.material,this.randomInRange(1,5),{
				opacity:0,
				delay:delay
			})
		}
		hide(){
			TweenMax.to(this.mesh.material,this.randomInRange(1,5),{
				opacity:0
			})
		}
		randomMove(x,y,t){
			TweenMax.to(this.mesh.position, t||10,{
				bezier:{
					curviness:10,
					values:[
						{x:'+='+ x, y:'+='+y},
						{x:'-='+ x, y:'-='+y},
					]
//					values:[
//						{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//						{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//					]
				},
				ease:easeArr[this.randomInRange(0,10)]
			})
		}
		up(){
			TweenMax.to(this.mesh.position, 5,{
				y: this.height,
				delay:5,
				ease:easeArr[this.randomInRange(0,10)]
			})
		}
		down(){
			TweenMax.to(this.mesh.position, 5,{
				y: -this.height,
				delay:5,
				ease:Bounce.easeOut
			})
		}
		
		
		move(){
			
			let temp = [-1,1];
			let tl = new TimelineMax({
				repeat:-1,
//				yoyo:true,
//				delay:this.randomInRange(0,10),
				repeatDelay:30
			});
			//80%透明度0-1进入场景
			if(Math.random()<0.8){
				tl.add(TweenMax.from(this.mesh.material,this.randomInRange(1,5),{
					opacity:0,
					delay:this.randomInRange(0,10)
				}))
			}else{
				tl.add(TweenMax.from(this.mesh.position,this.randomInRange(5,10),{
					x: this.randomInRange(-this.width*2,this.width*2),
					y:  this.randomInRange(-this.height*2,this.height*2),
					delay:this.randomInRange(0,5),
					ease: Power4.easeIn,
				}))
			}
			//100% 做随机运动
//			tl.add(TweenMax.to(this.mesh.position, 150,{
//				bezier:{
//					curviness:3.25,
//					values:[
//						{x:'+='+ x, y:'+='+y},
//						{x:'-='+ x, y:'-='+y},
//					]
//				},
////				ease:easeArr[this.randomInRange(0,10)],
//			}))		

			//80%向上运动
			if(Math.random() < 0.9){
				tl.add(TweenMax.to(this.mesh.position, 10,{
					y: this.height,
					delay:10,
//					ease:SlowMo.ease.config(0.1, 0.7, false),
					ease:easeArr2[this.randomInRange(0,6)]
				}))
			}
//			else{
//				tl.add(TweenMax.to(this.mesh.position, this.randomInRange(20,80),{
//					bezier:{
//						curviness:4.25,
//						values:[
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//						]
//					},
//					delay:10,
//					ease:easeArr2[this.randomInRange(0,6)]
//				}))
//			}
//			console.log(this.position.x)
			//回到原位
			tl.add(TweenMax.to(this.mesh.position, 50,{
				bezier:{
					curviness:3.25,
					values:[
						{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
						{x:this.position.x,y:this.position.y},
					]
				},
				delay:15,
				ease:easeArr2[this.randomInRange(0,6)]
			}))

			//80%掉落运动
			if(Math.random() < 0.98){
				tl.add(TweenMax.to(this.mesh.position, 5,{
					y: -this.height,
					delay:10,
					ease:Bounce.easeOut
				}))
			}
			
			//回到原位
			tl.add(TweenMax.to(this.mesh.position, 50,{
				bezier:{
					curviness:4.25,
					values:[
						{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
						{x:this.position.x,y:this.position.y},
					]
				},
				delay:15,
				ease:easeArr2[this.randomInRange(0,6)]
				
			}))
			
			tl.add(TweenMax.to(this.mesh.material,2,{
				opacity:0,
				
			}))
//			if(this.name === "a" || this.name === "c"){
//				tl.add(TweenMax.to(this.mesh.position, 5 ,{
//					y: -this.height,
//					ease:Bounce.easeOut
//				}))
//			}
		}
		
		
//		move(type,delay){
//			if(this.name === "diandian2"){
//				let temp = [-1,1];
//				if(type === "bomb1"){
//					let t = this.randomInRange(5,15);
//					let x1 = this.width*2*temp[Math.round(Math.random())];
//					let y1 = this.height*2*temp[Math.round(Math.random())];
//					let tl = new TimelineMax({
//						repeat:-1,
//						yoyo:true,
//						delay:delay,
//						repeatDelay:delay
//					});
//					tl.from(this.mesh.material,.5,{opacity:0})
//
//					.to(this.mesh.position, t, {
//						x: "+=" + x1,
//						y: "+=" + y1,
//						delay:1
//					})
////					.to(this.mesh.position, t, {
////						x: this.randomInRange(-this.width,this.width),
////						y: this.randomInRange(-this.height,this.height),
////						delay:1
////					})
//				}else{
//					let t = this.randomInRange(3,6);
//					let x2 = this.randomInRange(10,200) * temp[Math.round(Math.random())];
//					let y2 = this.randomInRange(10,100) * temp[Math.round(Math.random())];
//					let tl = new TimelineMax({
//						repeat:-1,
//						yoyo:true,
//						delay:delay,
//						repeatDelay:delay
//					});
//					tl.from(this.mesh.material,.5,{opacity:0})
//					.to(this.mesh.position, 5, {
//						x: "+=" + x2,
//						y: "+=" + y2,
//						ease: Power4.easeOut,
//						delay:1
//					})
//					.to(this.mesh.position,t,{
//						y:-this.height,
//						ease: Bounce.easeOut
//					})
////					.to(this.mesh.position,t,{
////						x: this.randomInRange(-this.width,this.width),
////						y: this.randomInRange(-this.height,this.height),
////						ease: Power4.easeOut,
////						delay:1
////					})
////					.to(this.mesh.position,t,{
////						y:-this.height,
////						ease: Bounce.easeOut
////					})
//				}
//				
//			}else{
//				let tl = new TimelineMax({
//					repeat:-1,
//					yoyo:true,
//					delay:this.randomInRange(1,10),
//					repeatDelay:this.randomInRange(5,20)
//				});
//				tl.from(this.mesh.material,Math.random(),{
//					opacity:0
//				})
//				.to(this.mesh.position, this.randomInRange(120,240),{
//					bezier:{
//						curviness:2.25,
//						values:[
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//							{x:this.randomInRange(-this.width,this.width),y:this.randomInRange(-this.height,this.height)},
//
//						]
//					},
//					ease:easeArr[this.randomInRange(0,6)]
//				})
//
//				if(this.name === "a" || this.name === "c"){
//					tl.add(TweenMax.to(this.mesh.position, 5 ,{
//						y: -this.height,
//						ease:Bounce.easeOut
//					}))
//				}
//			}
//		}
		
//		flock(xqArr){
//			let xq;
//			let distance;
//			let posSum = new THREE2.Vector3();
//			let repulse = new THREE2.Vector3();
//			for(let i=0,len=xqArr.length; i<len; i++){
//				if(Math.random()>0.6){continue};
//				xq = xqArr[i];
//				
//				distance  = xq.mesh.position.distanceTo(this.mesh.position);
//				if(distance<=minDistance){
//					console.log(xq)
//					repulse.subVectors( this.mesh.position, xq.mesh.position );
//					repulse.normalize();
//					repulse.divideScalar( distance );
//					posSum.add( repulse );
//				}
//			}
//			this.velocity.add(posSum);
//			 this.mesh.position.add(this.velocity);
//		}
		
		randomInRange(min,max){
			return Math.round(Math.random()*(max-min)+min)
		}
	}

	export default Star;
//});