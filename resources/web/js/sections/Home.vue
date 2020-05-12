<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<nav class="container navbar">
			<div class="row">
				<div class="col-2 left-element p-0">
					<img src="images/web/logo-sos.png" alt="Logo SOS">
				</div>
				<div class="col-8 center-element p-0 main-logo">
					<img src="images/web/logo-wp.png" alt="Logo Wiki Play">
				</div>
				<div class="col-2 right-element menu-icon p-0 align-self-center">
					<div class="hamburguer-icon">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</nav>
		<!-- Slogan -->
		<section class="container-fluid p-0">
			<div class="slogan">
				<img src="images/web/slogan.png" alt="Wiki Play Slogan">
				<div class="slogan-text">
					<p>
						Por derecho a la educación, el juego, la recreación, y a participar de la vida cultural y artística de los niños y niñas.
						(Declaración Universal - 1959)
					</p>
				</div>
			</div>
			<!-- Search filters -->
			<search-filters></search-filters>
		</section>
		<!-- Separation between slogan-filters and map-->
		<div style="height: 10px"></div> 
		<section class="container-fluid map">
			<div class="row">
				<div class="col-12 col-md-2 col-lg-2 hide-mobile brd">
					Ads
				</div>
				<div class="col-12 col-md-8 col-lg-8">
					<!-- MAP -->
					<map-and-articles></map-and-articles>

					<!-- FEATURED ARTICLES -->
					<featured-articles></featured-articles>
					
				</div>
				<div class="col-12 col-md-2 col-lg-2 brd">
					Ads
				</div>
			</div>
			
		</section>
		<br><br><br><br>	

	</div>
</template>

<script>
	import CommonMixins from '../mixins/CommonMixin.js';
	import SearchFilters from "../components/SearchFilters.vue";
	import MapAndArticles from "../components/MapAndArticles.vue";
	import FeaturedArticles from "../components/FeaturedArticles.vue";
	
	import Vue from 'vue';
	// import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

	export default {
		name: "Home",
		mixins: [ CommonMixins ],
		components: {
			'search-filters': SearchFilters,
			'map-and-articles': MapAndArticles,
			'featured-articles': FeaturedArticles
		},
		data() {
			return {
			}
		},
		created() {
			// let route = 'https://leandro-andrade.cc/api/getArticles';
			// console.log("Trying to get articles");
			// document.title = 'Wiki Play';
			// this.fetchArticles();
		},
		methods: {
			// ...mapActions(['fetchArticles'])			
		},
		computed: {
			// ...mapGetters(['allArticles', 'apiUrl', 'assetSrc'])
		},
	};
</script>

