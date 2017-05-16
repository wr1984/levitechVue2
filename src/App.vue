<template>
  <div id="app">
  	<div id="header">
  		<vheader></vheader>
  	</div>
		<router-view name='tree'></router-view>
		<router-view name='space'></router-view>
		<router-view name='particle'></router-view>
		<router-view></router-view>
  </div>
</template>

<script>
import vheader from '@/components/common/header'
export default {
  name: 'app',
  components:{
  	vheader,
  }
}
</script>

<style>
/*==========================自定义字体=============================*/
@font-face {
	font-family:cond;
	src: url(./assets/fonts/DINPro-Cond.otf);
}
@font-face {
	font-family:condBold;
	src: url(./assets/fonts/DINPro-CondBold.otf);
}
@font-face {
	font-family:condLight;
	src: url(./assets/fonts/DINPro-CondLight.otf);
}
@font-face {
	font-family:condMedium;
	src: url(./assets/fonts/DINPro-CondMedium.otf);
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

/*@media (max-width:768px) {
	.indicators,.attention{
		visibility: hidden;
	}
}*/
/*==========================宽度适配=============================*/

#app {
  font-family: 'cond','微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #3c3c3c;
}

/*==========================header=============================*/
#header{
	/*position: relative;*/
	height: 51px;
	width: 100%;
}

/*==========================header=============================*/
</style>
