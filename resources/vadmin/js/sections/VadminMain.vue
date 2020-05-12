<template>
	<div>
		<loader-component v-if="loader"></loader-component>
		<sidebar-component></sidebar-component>
		<div :class="{ 'main-wrapper': true, 'main-wrapper-full': !sidebarState }">
			<header-component></header-component>
			<div class="main-content">
				<transition name="view">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import axios from "axios";
	
	import CommonMixins from '../mixins/CommonMixin';

	import Header from "../components/HeaderComponent";
	import Sidebar from "../components/SidebarComponent";
	import Loader from  "../components/LoaderComponent";

	export default {
		props: [ 'user' ],
		mixins: [ CommonMixins ],
		components: {
			"header-component": Header,
			"sidebar-component": Sidebar,
			"loader-component": Loader
		},
		computed: {
			...mapGetters(["sidebarState"]),
			...mapGetters(["loader"])
		},
		created() {
			this.getAuthUser();
		},
		methods: {
			...mapActions(['getAuthUser'])
		}
	};
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