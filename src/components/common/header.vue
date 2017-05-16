<template>
	<nav class="navbar navbar-fixed-top nav-bg">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header"> 
				<button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only" style="border: 1px silver solid;">Toggle navigation</span>				        
					<span class="icon-bar"></span>				        
					<span class="icon-bar"></span>				        
					<span class="icon-bar"></span>				     
				</button>
				<a class="navbar-brand" href="#"> 
				<img alt="Brand" src="../../assets/img/logo.png"> </a>
			</div>
			<div class="collapse navbar-collapse"  id="bs-example-navbar-collapse-1">
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

</template>

<script>
	export default {
		data (){
			return{
				
			}
		},
		methods:{
			collapse(){
				$('.collapse').collapse('hide');
			}
		}
	}
</script>

<style>
.navbar-toggle {
	background-color: #EBEBEB;
}

.navbar-toggle>.icon-bar {
	background-color: #333333;
}

.navbar-brand>img {
	height: 20px;
}
.navbar{
	font-size: 16px;
	/*color: black;*/
}
.nav>li>a{
	color: #3c3c3c;
}

.nav-bg {
	background-color: white;
}
</style>