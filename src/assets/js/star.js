
	var tlRotate;
	var tlMove;
	var easeArr3 = [
						SlowMo.ease.config(0.1, 0.1, false),
						SlowMo.ease.config(0.1, 0.4, false),
						SlowMo.ease.config(0.1, 0.7, false),
						Power0.easeNone,
						Power1.easeIn,
						Power2.easeIn,
						Power3.easeIn,
						Power4.easeIn,
					]
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
			this.width = window.innerWidth/1.2;
			this.height = window.innerHeight/1.2;
			this.position = params.pos; 
			this.rSpeed = this.randomInRange(20,50);
			this.mSpeed = this.randomInRange(1,5);
			this.rotate();
			
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
		
		fall(x,y){
//			TweenMax.killTweensOf(this.mesh.position);
			TweenMax.to(this.mesh.position, 5,{
				x: x,
				y: y,
				ease:Power2.easeOut
			})
		}
				
		move(){
			
			let temp = [-1,1];
			let tl = new TimelineMax({
				repeat:-1,
				repeatDelay:20
			});
			tl.add(TweenMax.from(this.mesh.material,this.randomInRange(1,8),{
				opacity:0,
				delay:this.randomInRange(1,5)
			}))

			//80%向上运动
			if(Math.random() < 0.8){
				tl.add(TweenMax.to(this.mesh.position, this.randomInRange(5,10),{
					y: this.height,
					delay:8,
					ease:easeArr3[this.randomInRange(0,7)]
				}))
			}

			//回到原位
			tl.add(TweenMax.to(this.mesh.position, 60,{
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
			if(Math.random() < 0.8){
				tl.add(TweenMax.to(this.mesh.position, this.randomInRange(2,10),{
					y: -this.height,
					delay:10,
					ease:Bounce.easeOut
				}))
			}
			
			//回到原位
			tl.add(TweenMax.to(this.mesh.position, 60,{
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
		}
		
		
		randomInRange(min,max){
			return Math.round(Math.random()*(max-min)+min)
		}
	}

	export default Star;
