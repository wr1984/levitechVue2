<template>
	<div id="headertpl">
		<nav class="navbar navbar-fixed-top nav-bg">

			<div class="container" :style="conStyle">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button id="toggleBtn" type="button" @click="collapse2" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" expanded="false">
					<span class="sr-only" style="border: 1px silver solid;">Toggle navigation</span>				        
					<span class="icon-bar icon-bar1"></span>				        
					<span class="icon-bar icon-bar1"></span>				        
					<span class="icon-bar icon-bar3"></span>				     
				</button>
					<a class="navbar-brand" href="#">
						<img alt="Brand" src="static/img/logo.png"> </a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav nav-center">
						<li class="active" @click="collapse">
							<!--<a href="#top">Top <span class="sr-only">(current)</span></a>-->
							<router-link :to="{ name: 'top' }">Top<span class="sr-only">(current)</span></router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'about' }">About</router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'products'}">Products</router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'projects'}">Projects</router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'clients'}">Clients</router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'recruitment'}">Recruitment</router-link>
						</li>
						<li @click="collapse">
							<router-link :to="{ name: 'contacts'}">Contacts</router-link>
						</li>
					</ul>
					<hr />
					<ul class="nav navbar-nav navbar-right search">
						<li @click="collapse">
							<a href="#">Cn/En</a>
						</li>
						<li @click="collapse">
							<a href="#">SEARCH</a>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				width: 0,
				conStyle: {
					width: "0px !important"
				},
				isShow: false,
				collapseDiv: null
			}
		},
		mounted() {
			var me = this;
			//			var headertpl = document.getElementById('headertpl');
			//			this.width = headertpl.offsetWidth;
			this.width = window.innerWidth;
			if(this.width < 768) {
				this.conStyle.width = (this.width - 30) + 'px !important';
			} else {
				this.conStyle.width = (this.width - 100) + 'px !important';
			}

			window.addEventListener('resize', function() {
				me.width = window.innerWidth;
				if(me.width < 768) {
					me.conStyle.width = (me.width - 30) + 'px !important';
				} else {
					me.conStyle.width = (me.width - 100) + 'px !important';
				}
			})

			//			this.collapseDiv = $('#bs-example-navbar-collapse-1');
			//			$('.collapse').removeClass(ClassName.COLLAPSING)
		},
		methods: {
			collapse() {
				$('.collapse').collapse('hide');
				//				$('.collapse').hide();
			},
			collapse2() {
				//				$('.collapse').collapse('show');
				//				$('.collapse').animate
				//				console.log($('#toggleBtn').attr('aria-expanded'))
				if(!this.isShow) {
					//					this.collapseDiv.addClass('in')
					//					//展开
					//					TweenMax.from(this.collapseDiv, 1, {
					//						width: 0,
					//						height: 0,
					////						display: 'block'
					//					})
					//标记为已打开
					this.isShow = !this.isShow;
				} else {
					//关闭
					//标记为已关闭
					this.isShow = !this.isShow;
				}
			}
		}
	}
</script>

<style>
	.navbar-collapse{
		overflow-y: scroll;
	}
	
	#headertpl {
		width: 100%;
		height: 51px;
	}
	
	.container {
		padding-right: 0 !important;
		padding-left: 0 !important;
	}
	
	.navbar-toggle {
		background-color: #EBEBEB !important;
		padding: 5px 10px !important;
		margin-top: 14px !important;
	}
	
	.navbar-toggle>.icon-bar {
		height: 1px !important;
		background-color: #333333;
	}
	
	.navbar-brand>img {
		height: 20px;
	}
	
	.navbar {
		font-size: 16px;
	}
	
	.nav>li>a {
		color: #3c3c3c;
	}
	
	.nav-bg {
		background-color: white;
	}
</style>