<template>
	<div id="app">
		<div class="container-fluid" :style="containerStyle">

			<div class="side-bar">
				<div>
					<img :style="sidebarStyle" class="attention" src="static/img/attention.png" />
				</div>
				<div class="indicators" :style="sidebarStyle">
					<li class="active"></li>
					<li></li>
					<li></li>
					<li></li>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div id="header">
						<nav class="navbar navbar-fixed-top nav-bg">
							<div class="container-fluid" :style="navContainerStyle">
								<!-- Brand and toggle get grouped for better mobile display -->
								<div class="navbar-header">
									<button @click='btnClikEvent' type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
										<span class="sr-only" style="border: 1px silver solid;">Toggle navigation</span>				        
										<span class="icon-bar icon-bar1"></span>				        
										<span class="icon-bar icon-bar2"></span>				        
										<span class="icon-bar icon-bar3"></span>				     
									</button>
									<a class="navbar-brand" href="#">
										<img alt="Brand" src="static/img/logo.png">
									</a>
								</div>
								<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul class="nav navbar-nav nav-center">
										<li class="active" @click="collapse">
											<!--<a href="#top">Top <span class="sr-only">(current)</span></a>-->
											<router-link class='navanim' :to="{ name: 'top' }">Top<span class="sr-only">(current)</span></router-link>
										</li>
										<li @click="collapse">
											<router-link class='navanim' :to="{ name: 'about' }">About</router-link>
										</li>
										<li @click="collapse">
											<router-link class='navanim' :to="{ name: 'products'}">Products</router-link>
										</li>
										<li v-if='isPC' @click="collapse">
											<router-link class='navanim' :to="{ name: 'projects'}">Projects</router-link>
										</li>
										<li v-if='isMobile' @click="collapse">
											<router-link class='navanim' :to="{ name: 'projectsMobile'}">Projects</router-link>
										</li>
										<li @click="collapse">
											<router-link class='navanim' :to="{ name: 'clients'}">Clients</router-link>
										</li>
										<li @click="collapse">
											<router-link class='navanim' :to="{ name: 'recruitment'}">Recruitment</router-link>
										</li>
										<li @click="collapse">
											<router-link class='navanim' :to="{ name: 'contacts'}">Contacts</router-link>
										</li>
									</ul>
									<hr />
									<ul class="nav navbar-nav navbar-right search">
										<li @click="collapse">
											<a class='navanim' href="#">Cn/En</a>
										</li>
										<li @click="collapse">
											<a class='navanim' href="#">SEARCH</a>
										</li>
									</ul>
								</div>
								<!-- /.navbar-collapse -->
							</div>
							<!-- /.container-fluid -->
						</nav>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="animContent" style="background-color: #343434;">
								<div class="loading-box" v-show='isLoading':style="animStyle" >
									<loading ></loading>
								</div>
								<div :style="animStyle">
									<router-view v-if="tree_anim" name='tree'></router-view>
									<router-view v-if="space_anim" name='space'></router-view>
									<router-view v-if="particle_anim" name='particle'></router-view>
									<router-view v-if="tree_pic" name='treepic'></router-view>
									<router-view v-if="space_pic" name='spacepic'></router-view>
									<router-view v-if="particle_pic" name='particlepic'></router-view>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import loading from '@/components/common/loading'
	import vheader from '@/components/common/header'
	import tool from '@/assets/js/tool'
	export default {
		name: 'app',
		data() {
			return {
				isLoading:true,
				tree_anim: true,
				tree_pic: false,
				space_anim: true,
				space_pic: false,
				particle_anim: true,
				particle_pic: false,
				isMobile:true,
				isPC:false,
				h: 0,
				w: 0,
				containerStyle: {
					padding: '0 65px',
				},
				navContainerStyle: {
					padding: '0 50px'
				},
				sidebarStyle: {
					top: '50px',
				},
				animStyle: {
					height: '0px',
				}
			}
		},
		components: {
			vheader,
			loading
		},
		beforeCreate(){
//		    '4k' : [64, 64, 0.29],
//		    '8k' : [128, 64, 0.42],
//		    '16k' : [128, 128, 0.48],
//		    '32k' : [256, 128, 0.55],
//		    '65k' : [256, 256, 0.6],
//		    '131k' : [512, 256, 0.85],
			
		},
		mounted() {
			//tree暂时不做切换只用手机版
			if(tool.CurrentSystem.system.iphone || tool.CurrentSystem.system.android){
//				this.isMobile = true;
				window.particleAmount = '32k'
			}else{
//				this.isPC = true;
				window.particleAmount = '65k'
			}
			var me = this;
			me.h = window.innerHeight;
			me.w = window.innerWidth;
			if(me.w <= 768) {
				me.containerStyle.padding = '0 15px';
				me.navContainerStyle.padding = '0 15px';
				me.animStyle.height = (me.h - 65) + 'px';
				me.sidebarStyle.top = (me.h / 2 - 50) + 'px';
			} else {
				if(me.h < 568) {
					me.h = 568;
				} else if(me.h > 1200) {
					me.h = 1200;
				}

				me.containerStyle.padding = '0 65px';
				me.navContainerStyle.padding = '0 50px';
				me.animStyle.height = (this.h - 100) + 'px';
				me.sidebarStyle.top = (me.h / 2 - 50) + 'px';
			}

			window.addEventListener('resize', this.resizeEvent);
			
			var browser = tool.getBrowserVersion()[0];
			if('IE'===browser){
				this.space_anim = false;
				this.space_pic = true;
				this.particle_anim = false;
				this.particle_pic = true;
			}
			
			var stl = setInterval(function() {
				if(!window.paticleIsLoading) {
					me.isLoading = false;
					window.paticleIsLoading = true;
					clearInterval(stl)
					
					console.log(me.isLoading)
				}
			}, 200);
			
			
		},
		methods: {
			btnClikEvent() {
				var btn = $('.navbar-toggle');
				var expanded = btn.attr('aria-expanded');
				var icon1 = $('.icon-bar1');
				var icon2 = $('.icon-bar2');
				var icon3 = $('.icon-bar3');
				//展开,加入动画
				if('false' == expanded) {
					icon1.addClass('icon-bar-anim1');
					icon2.addClass('icon-bar-anim2');
					icon3.addClass('icon-bar-anim3');
					TweenMax.staggerFrom('.navanim', .5, {
						rotationX: -90,
						opacity: 0,
						transformOrigin: "top left"
					}, .1)

				} else {
					icon1.removeClass('icon-bar-anim1');
					icon2.removeClass('icon-bar-anim2');
					icon3.removeClass('icon-bar-anim3');
				}
			},

			resizeEvent() {
				var me = this;
				me.w = window.innerWidth;
				me.h = window.innerHeight;

				if(me.w < 768) {
					me.containerStyle.padding = '0 15px';
					me.navContainerStyle.padding = '0 15px';
					me.animStyle.height = (me.h - 65) + 'px';
					me.sidebarStyle.top = (me.h / 2 - 50) + 'px';
				} else {
					if(me.h < 568) {
						me.h = 568;
					} else if(me.h > 1200) {
						me.h = 1200;
					}
					me.containerStyle.padding = '0 65px';
					me.navContainerStyle.padding = '0 50px';
					me.animStyle.height = (me.h - 100) + 'px';
					me.sidebarStyle.top = (me.h / 2 - 50) + 'px';
				}
			},
			collapse() {
				$('.collapse').collapse('hide');
				var icon1 = $('.icon-bar1');
				var icon2 = $('.icon-bar2');
				var icon3 = $('.icon-bar3');
				icon1.removeClass('icon-bar-anim1');
				icon2.removeClass('icon-bar-anim2');
				icon3.removeClass('icon-bar-anim3');
			},
		},
		beforeDestroy() {

		}
	}
</script>

<style>
	body::-webkit-scrollbar {
		display: none;
	}
	/*==========================自定义字体=============================*/
	
	.navbar-toggle .icon-bar {
		transition: all .5s;
	}
	
	.navbar-toggle .icon-bar-anim1 {
		transform: translateY(5px) rotateZ(45deg);
	}
	
	.navbar-toggle .icon-bar-anim2 {
		opacity: 0;
	}
	
	.navbar-toggle .icon-bar-anim3 {
		transform: translateY(-5px) rotateZ(-45deg);
	}
	
	@font-face {
		font-family: cond;
		src: url(assets/fonts/DINPro-Cond.otf);
	}
	
	@font-face {
		font-family: condBold;
		src: url(assets/fonts/DINPro-CondBold.otf);
	}
	
	@font-face {
		font-family: condLight;
		src: url(assets/fonts/DINPro-CondLight.otf);
	}
	
	@font-face {
		font-family: condMedium;
		src: url(assets/fonts/DINPro-CondMedium.otf);
	}
	/*==========================自定义字体=============================*/

	@media only screen and (min-height:450px ) {
		.navbar-fixed-top .navbar-collapse{
			max-height:none !important;
		}
	}
	@media only screen and (max-height:340px ) {
		.navbar-fixed-top .navbar-collapse{
			max-height:280px !important;
		}
	}
	@media only screen and (max-height:450px ) {
		.navbar-fixed-top .navbar-collapse{
			max-height:none ;
		}
	}
	@media only screen and (min-width: 768px) {
		.logo>img {
			width: 320px !important;
		}
	}
	
	.logo>img {
		width: 220px;

	}
	
	@media (min-width: 768px) {
		.nav-center {
			position: absolute;
			left: 50%;
			-ms-transform: translate(-50%, 0%);
			transform: translate(-50%, 0%);
		}
		/*#app{
			font-size: 14px;
		}*/
		.animContent {
			margin: 0 -15px 50px;
		}
	}
	
	@media (min-width:768px) {
		hr {
			display: none;
		}
		.indicators {
			position: absolute;
			right: 20px
		}
		.attention {
			position: absolute;
			left: 15px
		}
	}
	
	@media (max-width:768px) {
		.indicators,
		.attention,
		.side-bar {
			visibility: hidden;
			display: none;
		}
		.animContent {
			margin: 0 0 15px;
		}
	}
	/*==========================宽度适配=============================*/
	
	#app {
		font-family: 'cond', '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
		/*-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;*/
		/*text-align: center;*/
		color: #3c3c3c;
		/*overflow:hidden;*/
		/*scrollbar: display*/
	}
	/*==========================header=============================*/
	
	#header {
		/*position: relative;*/
		height: 50px;
		/*background-color: rosybrown;*/
		/*width: 100%;*/
	}
	/*==========================header=============================*/
	/*==========================content=============================*/
	/*==========================content=============================*/
	/*==========================左右两侧 ===========================*/
	
	.indicators li {
		width: 8px;
		height: 8px;
		margin: 1px;
		text-indent: -999px;
		cursor: pointer;
		background-color: #000\9;
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid black;
		margin-left: 20px;
	}
	
	.indicators .active {
		width: 10px;
		height: 10px;
		/*margin: 0;*/
		background-color: black;
	}
	
	.indicators {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/*position: absolute;*/
		/*right: 20px;*/
		/*z-index: 15;*/
		height: 100px;
		width: 30px;
		list-style: none;
		/*background-color: red;*/
	}
	
	.attention {
		/*position: absolute;
    z-index: 15;*/
		margin-left: -5px;
		width: 30px;
		/*left: 15px;*/
	}
	/*==========================左右两侧 ===========================*/
	
	.loading-box{
		width: 100%; 
		background-color: #343434; 
		position: absolute; 
		z-index: 999;
	}
</style>