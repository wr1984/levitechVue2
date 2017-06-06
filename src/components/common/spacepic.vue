<template>
	<div class="img">
		<img :style='imgStyle' src="static/img/space/space.jpg" />
		<div class="logo">
			<img src="static/img/space/space-logo.png" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgStyle: {
					width: null,
					height: null
				}
			}
		},

		mounted() {
			let screenWidth = window.screen.availWidth;
			let screenHeight = window.screen.availHeight;

			let width = screenWidth;
			let height = screenHeight;

			if(screenWidth <= 1024) {
				screenWidth < screenHeight ? width = screenHeight : height = screenWidth;
			}

			this.imgStyle.width = width + 'px';
			this.imgStyle.height = height + 'px';
		}
	}
</script>

<style scoped>
	.img {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	
	.img>img {
		position: absolute;
		left: 50%;
		top: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	
	.logo img {
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		z-index: 2;
	}
</style>