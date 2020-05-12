<template>
  	<header class="nav-header justify-content-between" :class="{ 'nav-header-full': !sidebarState }">
		<div class="left-items">
			<div class="btn-hamburguer" v-on:click="sidebarToggle(sidebarState)">
				<div class="bar bar1"></div>
				<div class="bar bar2"></div>
				<div class="bar bar3"></div>
			</div>
		</div>
		<div class="right-items">
			<b-dropdown class="right-menu">  
				<template slot="button-content">
					<span class="user-name">{{ authUser.username }}</span>
					<img class="user-image" src="/images/vadmin/logo-gen.jpg">
				</template>
				<b-dropdown-item href="#">
					<router-link to="/vadmin/perfil-de-usuario">
						<img class="icon" src="/vendor/bootstrap-icons/person-fill.svg"> Perfil
					</router-link>
				</b-dropdown-item>
				<b-dropdown-item href="/vadmin/logout" id="logout-link">
					<img class="icon" src="/vendor/bootstrap-icons/power.svg"> Desconectar
				</b-dropdown-item>
			</b-dropdown>
		</div>
  	</header>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	import CommonMixins from "../mixins/CommonMixin";
	import simplebar from "simplebar-vue";

	export default {
		components: {
			simplebar
		},
		mixins: [ CommonMixins ],
		data() {
			return {};
		},
		mounted() {
			
		},
		computed: {
			...mapGetters(["sidebarState"]),
			...mapGetters(["authUser"])
		},
		methods: {
			...mapActions(["sidebarToggle"]),
			
			logout(evt) {
				console.log("ok");
				axios.get('/logout').then(response => {
					console.log(response);
					// localStorage.removeItem('auth_token');

					// remove any other authenticated user data you put in local storage

					// Assuming that you set this earlier for subsequent Ajax request at some point like so:
					// axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth_token ;
					// delete axios.defaults.headers.common['Authorization'];

					// If using 'vue-router' redirect to login page
					// this.$router.go('/login');
				})
				.catch(error => {
					console.log(error);
					// If the api request failed then you still might want to remove
					// the same data from localStorage anyways
					// perhaps this code should go in a finally method instead of then and catch
					// methods to avoid duplication.
					// localStorage.removeItem('auth_token');
					// delete axios.defaults.headers.common['Authorization'];
					// this.$router.go('/login');
				});       

			}

		}
	};
</script>
