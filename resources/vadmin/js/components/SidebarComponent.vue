<template>
	<nav :class="{ 'sidebar': true, 'sidebar-closed': !sidebarState } ">
		<div class="sidebar-header">
			<a href="/vadmin">
				<img src="/images/vadmin/logo.png" alt="Vadmin Logo" />
			</a>
		</div>
		<simplebar class="sidebar-content" data-simplebar-auto-hide="false">
			<transition name="view">
				<sidebar-items :item="links"></sidebar-items>
			</transition>	
		</simplebar>
	</nav>
</template>


<script>
	import { mapGetters } from "vuex"

	import CommonMixins from '../mixins/CommonMixin'
	import Simplebar from 'simplebar-vue'
	import SidebarItems from '../components/SidebarItems'
	import links from '../router/links.json'

	export default {
		components: {
			Simplebar,
			'sidebar-items': SidebarItems,
		},
		mixins: [ CommonMixins ],
		data() {
			return {
				links,
			}
		},
		computed: {
			...mapGetters(['sidebarState'])
		}
	}
</script>


<style>

	.view-enter-active, .view-leave-active {
		transition: opacity 0.5s ease-in-out, transform 0.5s ease;
	}

	.view-enter-active {
		transition-delay: 0.5s;
	}

	.view-enter, .view-leave-to {
		opacity: 0
	}

	.view-enter-to, .view-leave {
		opacity: 1
	}

</style>