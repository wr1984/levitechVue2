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

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			redirect:'top'
		},
		{
			path: '/top',
			name: 'top',
			components:{
				default:Top,
				particle:Particle
			}
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
			path: '/projects',
			name: 'projects',
			components: {
				default: Projects,
				tree: Tree
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
				space: Space
			}
			
		},
		{
			path: '/contacts',
			name: 'contacts',
			component:Contacts
			
		}
	]
})