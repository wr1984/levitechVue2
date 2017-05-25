<template>
	<div class="img">
		<img src="static/img/tree/10860x1811.jpg"/>
		<div class="logo">
			<img src="static/img/tree/tree-logo.png" />
		</div>	
	</div>
</template>

<script>
</script>

<style scoped>
	.img {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.img>img{
		height: 100%;
	}
	
	.logo img {
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 20%;
		z-index: 2;
	}
</style>