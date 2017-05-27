import Vue from 'vue'
import Router from 'vue-router'
import Space from '@/components/common/Space'
import Tree from '@/components/common/Tree'
import Particle from '@/components/common/Particle'
import Top from '@/components/top/Top'
import About from '@/components/about/About'
import Products from '@/components/products/Products'
import Projects from '@/components/projects/Projects'
import Clients from '@/components/clients/Clients'
import Recruitment from '@/components/recruitment/Recruitment'
import Contacts from '@/components/contacts/Contacts'
import Treepic from '@/components/common/treepic'
import Spacepic from '@/components/common/spacepic'
import Particlepic from '@/components/common/particlepic'
import TreeMobile from '@/components/common/TreeMobile'
Vue.use(Router)

export default new Router({
//	mode: 'history',
	routes: [
		{
			path:'/',
			redirect:'top'
		},
//		{
//			path: '/top',
//			name: 'top',
//			component:Top,
//			children:[
//				{
//					path:'/top/:#amount',
//					component:Particle
//				}
//			]
////			meta: {keepAlive: true}
//		},
		{
			path: '/top',
			name: 'top',
			components:{
				default:Top,
				particle:Particle,
				particlepic:Particlepic
			},
//			meta: {keepAlive: true}
		},
		{
			path: '/about',
			name: 'about',
			component: About 
		},
		{
			path: '/products',
			name: 'products',
			component: Products
			
		},
		{
			path: '/projectsMobile',
			name: 'projectsMobile',
			components: {
				default: Projects,
				tree: TreeMobile,
				treepic:Treepic
			},
//			meta: {keepAlive: true}
		},
		{
			path: '/projects',
			name: 'projects',
			components: {
				default: Projects,
				tree: Tree,
				treepic:Treepic
			}
		},
		{
			path: '/clients',
			name: 'clients',
			component: Clients
			
		},
		{
			path: '/recruitment',
			name: 'recruitment',
			components: {
				default: Recruitment,
				space: Space,
				spacepic:Spacepic
			}
			
		},
		{
			path: '/contacts',
			name: 'contacts',
			component:Contacts
			
		}
	]
})