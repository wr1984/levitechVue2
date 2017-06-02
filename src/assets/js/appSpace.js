import Star from '@/assets/js/star';
import tool from '@/assets/js/tool'
//	console.log(new Star)
var canvas;
var camera;
var scene;
var renderer;
var textureLoader;
var width, height;
var me;
//	var controls;
var size = 30;
var eSize = 10;
var aMaps, bMaps, cMaps, dMaps, eMaps;
var aMaterials, bMaterials, cMaterials, dMaterials, eMaterials;
var diandianGroup, xingxingGroup, xingqiuGroup, yuanquanGroup;
var diandianControls, xingxingControls, xingqiuControls, yuanquanControls;
var aArr, bArr, cArr, dArr, eArr;
var diandian2_0Arr, diandian2_1Arr, diandian2_2Arr, diandian2_3Arr, diandian2_4Arr, diandian2_5Arr;
var isStart = true;
var colorArr = [0xf9dce0, 0xf5957d, 0x17ffa7];
var easeArr = [SlowMo.ease.config(0.5, 0.4, false),
	//					Bounce.easeInOut,
	Power4.easeInOut,
	Back.easeInOut.config(4),
	Power0.easeNone,
	Expo.easeInOut,
	//					 Elastic.easeInOut.config(2.5, 0.1)
];
//	var sxGrop0;
var box;
var tempHeight;
var tempWidth;
var isResize = false;
var indicators;
var attention;
var screenW;
var canvasBox;
var cameraScale;
var allArr;

var screenWidth;
var screenHeight;
var canvasBox;

var tag = true;
var x = 0;
var y = 0;
var z = 0;
var lastX = 0;
var lastY = 0;
var lastZ = 0;
var SHAKE_THRESHOLD = 800;
var last_update = 0;
class App {
	constructor() {
		this.init();
		this.update();
	}

	init() {
		me = this;
		screenWidth = window.screen.availWidth;
		screenHeight = window.screen.availHeight;

		canvasBox = document.getElementById('canvasBox');
		canvas = document.getElementById('canvas');
		canvasBox = document.getElementById('canvasBox');

		width = screenWidth;
		height = screenHeight;

		if(width <= 1024) {
			if(width < height) {
				width = height;
			} else {
				height = width;
			}
		}

		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';
		canvasBox.style.width = width + 'px';
		canvasBox.style.height = height + 'px';
		//			tempHeight = height;
		//			tempWidth = width;

		scene = new THREE2.Scene();

		camera = new THREE2.PerspectiveCamera(45, width / height, 1, 1500);
		//			console.log(width/height);
		//			cameraScale = width/height;
		//			if(cameraScale>2.1){
		//				camera.position.z = 900/(cameraScale/2)
		//			}else{
		//			}

		if(tool.CurrentSystem.system.iphone || tool.CurrentSystem.system.android) {
			camera.position.z = 700;
//			console.log("mobile")
		} else {
			camera.position.z = 1000;
		}

		camera.lookAt(scene.position);
		scene.add(camera);

		renderer = new THREE2.WebGLRenderer({
			canvas: canvas
		});
		renderer.setClearColor(0x343434);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);

		//			controls = new Controls(camera, renderer.domElement);

		textureLoader = new THREE2.TextureLoader();
		//加载mapping
		//			yuanquanMaps = this.createMappings('yuanquan',12);
		aMaps = this.createMappings('a', 16)
		bMaps = this.createMappings('b', 16);
		cMaps = this.createMappings('c', 12);
		dMaps = this.createMappings('d', 20);
		eMaps = this.createMappings('e', 9);
		//初始化starts
		this.initStars();
		allArr = [aArr, bArr, cArr, dArr, eArr];
		//			canvas.appendChild(renderer.domElement);
		//			window.addEventListener('resize', this.resize, false);
		canvasBox.addEventListener('mousemove', this.onMouseClick, true);
		canvasBox.addEventListener('touchmove', this.onMouseClick, true);
		renderer.render(scene, camera);
		//			this.move(aArr);
		//			this.move(bArr);
		//			this.move(cArr);
		//			this.move(dArr);
		//			this.move(eArr);
		this.showAll();
		//			this.moveAll();
		//			this.resize();

		if(window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', this.deviceMotionHandler, false);
		}
	}
	
	
	
	
	deviceMotionHandler(eventData) {
		var acceleration = eventData.accelerationIncludingGravity;
		var curTime = new Date().getTime(); 
		 if ((curTime - last_update)> 300) { 
		 	var diffTime = curTime -last_update;
		 	last_update = curTime; 
		 	x = acceleration.x; // 获取加速度的x轴，用于计算水平水平加速度
		 	y = acceleration.y; // 获取加速度的y轴，用于计算垂直方向的加速度，同时计算正玄值
		 	z = acceleration.z;    
	 		var speed = Math.abs(x +y + z - lastX - lastY - lastZ) / diffTime * 10000;          
	           if (speed > SHAKE_THRESHOLD) {
	                for(let i = 0; i < 5; i++) {
	                	allArr[i].forEach(function(item) {
	                		if(Math.random() > 0.5){
	                			item.shake(Math.abs(x - lastX),'x');
	                		}
	
	                	})
	                }
	        }
		 }
		// 重新记录最后一次值，作为下一次开始坐标
		lastX = x;
		lastY = y;
		lastZ = z;
	}

	initStars() {
		if(width < 420) {
			size = 20;
			eSize = 5
			aMaterials = this.createMaterials(aMaps, 50);
			bMaterials = this.createMaterials(dMaps, 50);
			cMaterials = this.createMaterials(cMaps, 50);
			dMaterials = this.createMaterials(dMaps, 25);
			eMaterials = this.createMaterials2(eMaps, 25);
		} else if(width < 768) {
			size = 22;
			eSize = 6;
			aMaterials = this.createMaterials(aMaps, 80);
			bMaterials = this.createMaterials(dMaps, 80);
			cMaterials = this.createMaterials(cMaps, 80);
			dMaterials = this.createMaterials(dMaps, 40);
			eMaterials = this.createMaterials2(eMaps, 40);
		} else {
			aMaterials = this.createMaterials(aMaps, 200);
			bMaterials = this.createMaterials(dMaps, 200);
			cMaterials = this.createMaterials(cMaps, 200);
			dMaterials = this.createMaterials(dMaps, 50);
			eMaterials = this.createMaterials2(eMaps, 100);
		}

		//			console.log(eSize)
		aArr = this.createSpriteGroup2("a", aMaterials, size, 10);
		bArr = this.createSpriteGroup2("b", bMaterials, size, 10);
		cArr = this.createSpriteGroup2("c", cMaterials, size, 10);
		dArr = this.createSpriteGroup2("d", dMaterials, size, 10);
		//			eArr = this.createSpriteGroup2("e",eMaterials, size);
		eArr = this.createMeshGroup2(eMaterials, eSize);

		window.spaceIsLoading = false;
	}

	showAll() {
		let me = this;
		for(let i = 0; i < 5; i++) {
			allArr[i].forEach(function(item) {
				item.move();
			})
		}
	}
	moveAll() {
		let me = this;
		for(let i = 0; i < 5; i++) {
			allArr[i].forEach(function(item) {
				item.randomMove(100, 100, 20);
			})
		}
	}

	clearScene() {
		var temp = [aArr, bArr, cArr, dArr, eArr];
		for(let i = 0; i < 5; i++) {
			temp[i].forEach(function(s) {
				scene.remove(s.mesh);
			})
		}
	}
	move(arr) {
		for(let i = 0, len = arr.length; i < len; i++) {
			arr[i].move();
		}
	}

	createSxsys(count) {
		let temp = [-1, 1];
		for(let i = 0; i < count; i++) {
			let tm = new TimelineMax({
				repeat: -1,
				yoyo: true,
				repeatDelay: 1
			});
			let sxGroup = this.shuangxingSystem();
			this.sxDistance(sxGroup);
			tm.to(sxGroup.rotation, this.randomInRange(100, 300), {
				z: Math.PI * 10 * temp[Math.round(Math.random())],
				ease: easeArr[this.randomInRange(0, 4)]
			});
		}
	}
	sxDistance(sxGrop) {
		let mesh1 = sxGrop.children[0];
		let mesh2 = sxGrop.children[1];
		TweenMax.to(mesh1.position, this.randomInRange(5, 30), {
			x: mesh2.position.x,
			y: mesh2.position.y,
			repeat: -1,
			yoyo: true,
			ease: easeArr[this.randomInRange(0, 4)]
		});
		TweenMax.to(mesh2.position, this.randomInRange(5, 30), {
			x: mesh1.position.x,
			y: mesh1.position.y,
			repeat: -1,
			yoyo: true,
			ease: easeArr[this.randomInRange(0, 4)]
		})
	}
	shuangxingSystem() {
		let temp = this.randomInRange(0, xingqiumaterials.length - 2);
		let sxGroup = new THREE2.Group();
		let sxMatArr = [xingqiumaterials[temp], xingqiumaterials[temp + 1]];
		let sxSpriteArr = this.createSpriteGroup2('sx', sxMatArr, size);
		for(let i = 0; i < 2; i++) {
			sxGroup.add(sxSpriteArr[i].mesh);
		}
		scene.add(sxGroup);
		return sxGroup;
	}
	diandian2Move() {
		let temp = ['bomb1', 'bomb2'];
		for(let i = 0; i < diandian2Arr.length; i++) {
			let delay = this.randomInRange(2, 20);
			let temp2 = Math.round(Math.random());
			diandian2Arr[i].forEach(function(d) {
				d.move(temp[temp2], delay);
				//					d.move(temp[Math.round(Math.random())],delay);
			})
		}
	}
	createMeshGroup2(materials, eSize) {
		let arr = [];
		for(let i = 0, len = materials.length; i < len; i++) {
			let mesh = new THREE2.Mesh(new THREE2.CircleGeometry(eSize, 32), materials[i]);
			mesh.position.x = Math.random() * width - width / 2;
			mesh.position.y = Math.random() * height - height / 2;
			mesh.position.z = 0;
			let star = new Star({
				mesh: mesh,
				name: "e",
				pos: mesh.position
			});
			arr.push(star);
			scene.add(mesh);
		}
		return arr;
	}

	createMeshGroup(controlArr, spriteSize) {
		let group = new THREE2.Group();
		for(let i = 0; i < controlArr.length; i++) {
			let size = this.randomInRange(4, 15)
			let mesh = new THREE2.Mesh(new THREE2.CylinderGeometry(size, size, 2, 32), new THREE2.MeshBasicMaterial({
				opacity: 1,
				transparent: true,
				color: colorArr[this.randomInRange(0, 2)]
			}));
			//				console.log(mesh.isSprite)
			group.add(mesh);
		}
		return group;
	}

	/**
	 * 创建spriteGroup
	 * @param {Array} 	materialArr 材质数组
	 * @param {Array} 	controlArr 	控制数组，这里主要为了获取数量，因为一个sprite对应一个control
	 * @param {Number} 	spriteSize	sprite的尺寸
	 */
	createSpriteGroup(materialArr, controlArr, spriteSize, biggerArr, biggerScale) {
		let group = new THREE2.Group();
		for(let i = 0; i < controlArr.length; i++) {
			let pos = Math.floor(Math.random() * materialArr.length)
			let sprite = new THREE2.Sprite(materialArr[pos]);
			if(biggerArr && biggerArr.indexOf(pos) > 0) {
				sprite.scale.set(spriteSize * biggerScale, spriteSize * biggerScale, spriteSize * biggerScale);
			} else {
				sprite.scale.set(spriteSize, spriteSize, spriteSize);
			}
			//				console.log(sprite.isSprite)
			group.add(sprite);
		}
		return group;
	}
	randomPoint(num) {
		let arr = [];
		if(num > 0) {
			for(let i = 0; i < num; i++) {
				let point = {
					x: this.randomInRange(-width / 2, width / 2),
					y: this.randomInRange(-height / 2, height / 2)
				}
				arr.push(point);
			}
		}
		return arr;
	}

	createSpriteGroup2(name, materialArr, spriteSize, pointNum) {
		let arr = [];
		let points = this.randomPoint(pointNum);
		//			console.log(points);
		for(let i = 0; i < materialArr.length; i++) {
			let sprite = new THREE2.Sprite(materialArr[i]);
			let point = points[this.randomInRange(0, pointNum - 1)];
			//				console.log(this.randomInRange(point.x-100,point.x+100))
			let x = this.randomInRange(point.x - 100, point.x + 100);
			let y = this.randomInRange(point.y - 100, point.y + 100);
			sprite.position.x = x;
			sprite.position.y = y;
			sprite.position.z = 0;

			sprite.scale.set(spriteSize, spriteSize, spriteSize);
			let star = new Star({
				mesh: sprite,
				name: name,
				pos: sprite.position
			})
			arr.push(star);
			scene.add(sprite);
		}
		return arr;
	}

	/**
	 *创建control
	 * @param {Number} amount 创建的数量，一个sprite对应一个control
	 * @param {Object} params control的参数
	 * @return {Array}	control数组
	 */
	createControls(amount, params, name) {
		let arr = [];
		for(let i = 0; i < amount; i++) {
			let spriteControl = new SpriteControl(params);
			spriteControl.position.x = Math.random() * width - width / 2;
			spriteControl.position.y = Math.random() * height - height / 2;
			spriteControl.position.z = Math.random() * 100 - 100;
			//				spriteControl.position.x = Math.random() * 100 - 50;
			//				spriteControl.position.y = Math.random() * 100 - 50;
			//				spriteControl.position.z = Math.random() * 100 - 50;

			spriteControl.spriteName = name;
			spriteControl.velocity.set(0, 0, 0);
			arr.push(spriteControl);
		}
		return arr;
	}

	/**
	 * 创建material的mapping
	 * @param {String} name 存放图片的文件夹名字，图片名字以数字命名，从0开始
	 * @param {Number} amount 图片的数量
	 * @return {Array}	mapping 数组
	 */
	createMappings(name, amount) {
		let arr = []
		for(let i = 0; i < amount; i++) {
			arr.push(textureLoader.load('static/img/space/' + name + '/' + i + '.png'));
		};
		return arr;
	}

	/**
	 * 创建material
	 * @param {Array} mapArr mapping数组
	 * @return {Array} material数组
	 */
	createMaterials(mapArr, count) {
		let arr = [];
		for(let i = 0; i < count; i++) {
			let pos = Math.floor(Math.random() * mapArr.length)
			let spriteMaterial = new THREE2.SpriteMaterial({
				opacity: 1.0,
				transparent: true,
				map: mapArr[pos]
			});
			arr.push(spriteMaterial);
		};
		return arr;
	}

	createMaterials2(mapArr, count) {
		let arr = [];
		for(let i = 0; i < count; i++) {
			let pos = Math.floor(Math.random() * mapArr.length)
			let spriteMaterial = new THREE2.MeshBasicMaterial({
				opacity: 1.0,
				transparent: true,
				side: THREE2.DoubleSide,
				map: mapArr[pos],
				depthWrite: false
			});
			arr.push(spriteMaterial);
		};
		return arr;
	}

	randomInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	onMouseClick(e) {
		
		function randomInRange(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		let me = this;

		if(tag) {
			tag = false;
			let x = e.clientX;
			let y = e.clientY;

			let glx = x - width / 2 + Math.abs(width - window.innerWidth) / 2;
			let gly = -(y - height / 2 + Math.abs(height - window.innerHeight) / 2);

			let temp = [-1, 1];
			for(let i = 0; i < 5; i++) {
				allArr[i].forEach(function(item) {
					let meshx = item.mesh.position.x;
					let meshy = item.mesh.position.y;

					let tempx = randomInRange(50, 100) * temp[Math.round(Math.random())];
					let tempy = randomInRange(50, 100) * temp[Math.round(Math.random())];

					if(Math.abs(meshx - glx) < 20 && Math.abs(meshy - gly) < 50) {
						item.fall(glx + tempx, gly + tempy);
					}

				})
			}

			setTimeout(function() {
				tag = true;
			}, 300);
		}

	}

	initStats() {
		stats = new Stats();
		stats.setMode(0);
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';
		document.body.appendChild(stats.domElement);
	}
	resize() {
		//			width = canvasBox.offsetWidth;			
		//			height = canvasBox.offsetHeight;
		//			
		//			renderer.setSize(width, height);
		//			renderer.setPixelRatio(window.devicePixelRatio);
		//			camera.aspect = width / height;
		//			camera.updateProjectionMatrix();
		//			if(!isResize && (tempHeight < height || tempWidth < width)){
		//				me.clearScene();
		//				isResize = true;
		//				
		//				setTimeout(function(){
		//					if(isResize){
		//						me.initStars();
		//						isResize = false;
		//						me.move(aArr);
		//						me.move(bArr);
		//						me.move(cArr);
		//						me.move(dArr);
		//						me.move(eArr);
		//					}
		//				},0)
		//			}
	}

	xqAnimat() {
		for(let i = 0, len = xingqiuArr.length; i < len; i++) {
			xingqiuArr[i].flock(xingqiuArr);
		}
	}
	update() {
		let t = Date.now() / 1000;
		renderer.render(scene, camera);
		window._spaceAnimation = window.requestAnimationFrame(me.update);
	}

}
export default App;
//});