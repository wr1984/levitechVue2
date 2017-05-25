<template>
	<div class="loading">
		<span class="loading-anim">LOADING . . .</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style>
.loading{
	position: absolute;	
	top:50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	z-index: 10;
}
.loading span{
	color: #FFFFFF;
	font-weight: bold;
	font-size: 20px;
}
</style>