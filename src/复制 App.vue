<template>
	<div id="app">
		<div class="container-fluid ">
			<div id="header" :style="heanderStyle">
				<vheader></vheader>
			</div>
			<div class="animContent">
				<div class="pull-left" :style="sideStyle">
					<img :style="attentionStyle" class="attention" src="static/img/attention.png" />
				
				</div>
				<div class="pull-left">
					<div :style="animStyle" style="background-color: #343434;">
						<!--<keep-alive>-->
							<router-view name='tree'></router-view>
						<!--</keep-alive>-->
						<router-view name='space'></router-view>
						<router-view name='particle'></router-view>
					</div>
					<div style="width: 100%;">
						<router-view></router-view>
					</div>
				</div>
				<div class="pull-right" :style="sideStyle">
					<div class="indicators" :style="indicatorsStyle">
						<li class="active"></li>
						<li></li>
						<li></li>
						<li></li>
					</div>
				
				</div>
			</div>
		</div>
		
		<!--<div class="container-fluid ">
			<div style="width: 100%; padding-left: 35px; padding-right: 35px;">
				<router-view></router-view>
			</div>
		</div>-->
		
	</div>
</template>

<script>
	import vheader from '@/components/common/header'
	export default {
		name: 'app',
		data() {
			return {
				isTop:true,
				h:0,
				w:0,
				sideStyle:{
					width:'35px',
				},
				indicatorsStyle:{
					'margin-top':'-200px',
				},
				attentionStyle:{
					'margin-top':'-200px',
				},
				heanderStyle:{
					width:'0px',
					'margin-left':'35px'
				},
				animStyle:{
					width:'0px',
					height:'0px',
					'margin-bottom':'50px',
				}
			}
		},
		components: {
			vheader,
		},
		mounted(){
			var me = this;
			me.h = window.innerHeight;
			me.w = window.innerWidth;
//			console.log(me.w)
//			document.getElementById('app').style.width = (me.w)+'px';

//			window.addEventListener('scroll', this.handleScroll);
			if(me.w < 768){
				me.sideStyle.width = '0px';
				me.heanderStyle['margin-left'] = '0px';
				me.animStyle.height = (me.h-65)+'px';
				me.animStyle.width = (me.w-30) + 'px';
				me.heanderStyle.width = me.animStyle.width;
				me.indicatorsStyle['margin-top'] = (me.h-65)/2 + 'px';
				me.attentionStyle['margin-top'] = (me.h-65)/2 + 'px';
				me.animStyle['margin-bottom'] = '15px';
			}else{
				if(me.h < 568){
					me.h = 568;
				}else if(me.h > 1200){
					me.h = 1200;
				}
				me.sideStyle.width = '35px';
				me.heanderStyle['margin-left'] = '35px';
				me.animStyle.height = (this.h-100)+'px';
				me.animStyle.width = (this.w-100) + 'px';
				me.heanderStyle.width = me.animStyle.width;
				me.indicatorsStyle['margin-top'] = (me.h-100)/2 + 'px';
				me.attentionStyle['margin-top'] = (me.h-100)/2 + 'px';
				me.animStyle['margin-bottom'] = '50px';
			}
			
			
//			document.body.onmousewheel = function(){console.log(1);}
			
			window.addEventListener('resize',this.resizeEvent);

		},
		methods:{

			resizeEvent(){
				var me = this;
				me.w = window.innerWidth;
				me.h = window.innerHeight;
				
				if(me.w < 768){
					me.sideStyle.width = '0px';
					me.heanderStyle['margin-left'] = '0px';
					me.animStyle.height = (me.h-65)+'px';
					me.animStyle.width = (me.w-30) + 'px';
					me.heanderStyle.width = me.animStyle.width;
					me.indicatorsStyle['margin-top'] = (me.h-65)/2 + 'px';
					me.attentionStyle['margin-top'] = (me.h-65)/2 + 'px';
					me.animStyle['margin-bottom'] = '15px';
				}else{
					if(me.h < 568){
						me.h = 568;
					}else if(me.h > 1200){
						me.h = 1200;
					}
					me.sideStyle.width = '35px';
					me.heanderStyle['margin-left'] = '35px';
					me.animStyle.height = (me.h-100)+'px';
					me.animStyle.width = (me.w-100) + 'px';
					me.heanderStyle.width = me.animStyle.width;
					me.indicatorsStyle['margin-top'] = (me.h-100)/2 + 'px';
					me.attentionStyle['margin-top'] = (me.h-100)/2 + 'px';
					me.animStyle['margin-bottom'] = '50px';
				}
			}
		},
		beforeDestroy(){
			
		}
	}
</script>

<style>
	
	body::-webkit-scrollbar{
  		display: none;
	}
	/*body{
		overflow: hidden;
	}*/

	/*==========================自定义字体=============================*/
	
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
	/*==========================宽度适配=============================*/
	
	/*@media (min-width: 992px) {
		.container {
			width: 892px !important;
		}
	}
	
	@media (min-width: 1024px) {
		.container {
			width: 924px !important;
		}
	}
	
	@media (min-width: 1200px) {
		.container {
			width: 1100px !important;
		}
	}
	
	@media (min-width: 1280px) {
		.container {
			width: 1180px !important;
		}
	}
	
	@media (min-width: 1360px) {
		.container {
			width: 1260px !important;
		}
	}
	
	@media (min-width: 1440px) {
		.container {
			width: 1340px !important;
		}
	}
	
	@media (min-width: 1600px) {
		.container {
			width: 1500px !important;
		}
	}
	
	@media (min-width: 1920px) {
		.container {
			width: 1820px !important;
		}
	}
	@media (min-width: 2048px) {
	.container {
		width: 1948px;
	}
}*/
	
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
	}
	
	@media (min-width:768px) {
		hr {
			display: none;
		}
	}
	@media (max-width:768px) {
		.indicators,.attention{
			visibility: hidden;
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
		height: 51px;
		/*width: 100%;*/
	}
	/*==========================header=============================*/
	/*==========================content=============================*/

	/*==========================content=============================*/	
	
	/*==========================左右两侧 ===========================*/
.indicators li{
    width: 8px;
    height: 8px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000\9;
    background-color: rgba(0,0,0,0);
    border: 1px solid black;
    
    margin-left: 20px;
}

.indicators .active {
    width: 10px;
    height: 10px;
    /*margin: 0;*/
    background-color: black;
}

.indicators{
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

.attention{
    /*position: absolute;
    z-index: 15;*/
   margin-left: -5px;
    width: 30px;
    /*left: 15px;*/
}
	/*==========================左右两侧 ===========================*/
</style>