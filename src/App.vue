<template>
	<div id="app">
		<div id="header">
			<vheader></vheader>
		</div>
		<div id="animContent" :style="animStyle">
			<router-view name='tree'></router-view>
			<router-view name='space'></router-view>
			<router-view name='particle'></router-view>
		</div>
		<router-view></router-view>
		<!--右侧指示器-->
		<ol class="indicators" :style="indicatorsStyle">
			<li class="active"></li>
			<li></li>
			<li></li>
			<li></li>
		</ol>
		<!--左侧图标-->
		<img :style="attentionStyle" class="attention" src="/static/img/attention.png" />
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
				indicatorsStyle:{
					top:'-200px',
					right:'0px'
				},
				attentionStyle:{
					top:'-200px',
					left:'0px'
				},
				animStyle:{
					width:'100%',
					height:'0px'
				}
			}
		},
		components: {
			vheader,
		},
		mounted(){
			var me = this;
			this.h = window.innerHeight;
			this.animStyle.height = (this.h-50)+'px';
			this.w = window.innerWidth;
			var headerWidth = document.querySelector('.container').offsetWidth;
			var temp = (this.w - headerWidth)/4;
			this.indicatorsStyle.top = (this.h-50)/2 + 'px';
			this.attentionStyle.top = (this.h-50)/2 + 'px';
			this.indicatorsStyle.right = temp + 'px';
			this.attentionStyle.left = (temp-10) + 'px';
			
			
			window.addEventListener('resize',resizeEvent);
			function resizeEvent(){
				this.h = window.innerHeight;
				me.animStyle.height = (this.h-50)+'px';
				this.w = window.innerWidth;
				headerWidth = document.querySelector('.container').offsetWidth;
				temp = (this.w - headerWidth)/4;
				me.indicatorsStyle.top = (this.h-50)/2 + 'px';
				me.attentionStyle.top = (this.h-50)/2 + 'px';
				me.indicatorsStyle.right = temp + 'px';
				me.attentionStyle.left = (temp-10) + 'px';
			}
		}
	}
</script>

<style>
	
	body::-webkit-scrollbar{
  		display: none;
	}
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
	
	@media (min-width: 992px) {
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
	/*@media (min-width: 2048px) {
	.container {
		width: 1948px;
	}
}*/
	
	@media (min-width: 960px) {
		.nav-center {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0%);
		}
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
	}
	

	/*==========================header=============================*/
	
	#header {
		/*position: relative;*/
		height: 51px;
		width: 100%;
	}
	/*==========================header=============================*/
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
}

.indicators .active {
    width: 10px;
    height: 10px;
    margin: 0;
    background-color: black;
}

.indicators{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    position: absolute;
    right: 20px;
    z-index: 15;
    height: 100px;
    /*width: 30px;*/
    list-style: none;
    /*background-color: red;*/
}

.attention{
    position: absolute;
    z-index: 15;
    width: 30px;
    left: 15px;
}
	/*==========================左右两侧 ===========================*/
</style>