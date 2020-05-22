<template>
	<div class="container-fluid">
		<div class="row">
			
			<!-- Left Ads -->
			<div class="col-12 col-sm-12 col-md-2 col-lg-2 ctesan">
				<img src="images/web/ctesad/an1.jpg" class="mb-2" alt="">
				<img src="images/web/ctesad/an3.jpg" alt="">
			</div>

			<div class="col-xs-12 col-lg-8">
				<div class="row p-1">			
					<div class="col-6 col-sm-6 col-md-6 col-lg-6 p-0">
						<!-- <l-map ref="myMap" style="min-height: 400px"> </l-map> -->
						<l-map ref="map" id="map"  style="min-height: 400px"
							:zoom="zoom" 
							:center="center"
							>
							<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
							<!-- <l-marker :lat-lng="marker" v-for="(marker, index) in markers" :key="index" ></l-marker>  -->
							<!-- <l-marker :lat-lng="marker"></l-marker> -->
							<l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng" @l-add="$event.target.openPopup()" 
							v-on:click="scrollToElement('Article'+item.id), selectRow(item.id)">
								<l-popup :content="item.content"></l-popup>
							</l-marker>
							<!-- <l-marker ref="dataMarkers" v-for="d in data" @click="markerSelected($event, d)" :key="d.id" :lat-lng="d.latlng">
								<l-popup v-if="d.name"> {{ d.name }}</l-popup>
							</l-marker> -->
						</l-map> 
					</div>

					<simplebar data-simplebar-auto-hide="false" class="col-6 col-sm-6 col-md-6 col-lg-6 small-list small-list-home p-0" >
						<!-- {{ vuelog( allArticles) }} --> 
						<div v-for="(article, index) in allArticles" :key="index" 
							v-on:click="focusOnMarker(article.address_latitude, article.address_longitude), selectRow(article.id)"
							class="small-list-item" :class="{ 'small-list-item-active' : selectedRow == article.id }" :id="'Article'+article.id">
								<div class="image-container">
									<!-- {{ vuelog(article) }} -->
									<img v-if="article.images != undefined && article.images.length > 0" class="image" :src="'images/articles/' + article.images[0].thumb" alt="">
									<!-- <img v-if="article.images != undefined && article.images.length > 0" class="image" :src="assetSrc + 'images/articles/' + article.images[0].thumb" alt=""> -->
									<img v-else class="image" src="/images/web/default.jpg" alt="">
								</div>
								<div class="content">
									<div class="top-text one-line-ellipsis">{{ article.content}}</div>
									<div class="main-text one-line-ellipsis">{{ article.title }}</div>
									<div class="bottom-text one-line-ellipsis">{{ article.daysText }}</div>
								</div>
								<a href="#" class="action" :class="{ 'action-active' : selectedRow == article.id }">
									<div class="action-content">
										<i class="fas fa-search"></i>
									</div>
								</a>
							</div>
					</simplebar>


				</div>	
				<div class="row mt-2 mb-2">
					<div class="col-xs-12 col-sm-6 col-lg-7 p-1">
						<featured-article v-if="newestArticle" :article="newestArticle"></featured-article>
					</div>
					<div class="col-xs-12 col-sm-6 col-lg-5 p-1">
						<featured-article v-if="featuredArticle" :article="featuredArticle"></featured-article>
					</div>
				</div>
			</div>
			<!-- Right Ads -->
			<div class="col-12 col-sm-12 col-md-2 col-lg-2 ctesan">
				<img src="images/web/ctesad/an2.jpg" class="mb-2" alt="">
				<img src="images/web/ctesad/an4.jpg" alt="">
			</div>
			
		</div>

		<section class="row orange-bg" v-if="freeArticles">
			<div class="container-fluid">
				<div class="container">
					<h5 class="white-text fw-400">Para divertirse gratis</h5>
					<div class="row">
						<card-article class="col-xs-12 col-sm-6 col-md-3 col-lg-3 p-1" style="display: flex"
							v-for="(freeArticle, index) in freeArticles" :key="index" 
							:article="freeArticle">
						</card-article>
					</div>
				</div>
			</div>
		</section>


		<!-- Music, all Family and Weather Widget -->
		<div class="row">
			<!-- Ads -->
			<div class="col-md-2 ctesan">
				<img src="images/web/ctesad/an5.jpg" alt="">
			</div>

			<div class="col-md-8">
				<div class="row">
					<div class="col-md-9">
						<h5>ATR (A todo ritmo!)</h5>
						<div class="row">
							<!-- Music Articles -->
							<template v-if="allFamilyArticles">
								<card-article class="col-xs-12 col-sm-6 col-md-4 p-1" style="display: flex"
									v-for="(allFamilyArticle, index) in allFamilyArticles" :key="index" 
									:article="allFamilyArticle">
								</card-article>
							</template>
						</div>
					</div>
					<div class="col-md-3">
						<h5>El tiempo</h5>
						<!-- Weather Widget -->
						<div class="widget-weather">
							<img src="images/web/clima-04.png" alt="">
						</div>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-9">
						<h5>Para toda la familia</h5>
						<div class="row">
							<!-- All Family Articles -->
							<template v-if="allFamilyArticles">
								<card-article class="col-xs-12 col-sm-6 col-md-4 p-1" style="display: flex"
									v-for="(allFamilyArticle, index) in allFamilyArticles" :key="index" 
									:article="allFamilyArticle">
								</card-article>
							</template>
						</div>
					</div>
					<div class="col-md-3 ctesan">
						<br>
						<!-- Ad -->
						<img src="images/web/ctesad/an7.jpg" alt="">	
					</div>
				</div>
			</div>
			
			<!-- Ads -->
			<div class="col-md-2 ctesan">
				<img src="images/web/ctesad/an6.jpg" alt="">		
			</div>

		</div>

		

	</div>
</template>

<script>

import CommonMixins from '../mixins/CommonMixin';

import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

import FeaturedArticle from './FeaturedArticle';
import CardArticle from './CardArticle';

// Custom Scroll Bar
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

// Map Assets	
import * as Vue2Leaflet from 'vue2-leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: '../../../vendor/leaflet/marker-icon-2x.png',
	iconUrl: '../../../vendor/leaflet/marker-icon.png',
	shadowUrl: '../../../vendor/leaflet/marker-shadow.png'
});


export default {
		name: "MapAndArticles",
		mixins: [ CommonMixins ],
		components: {
			// Map Components
			'l-map': LMap,
			'l-tile-layer': LTileLayer,
			'l-marker' : LMarker,
			'l-popup' : LPopup,
			'featured-article': FeaturedArticle,
			'card-article': CardArticle,
			simplebar,
		},
		data() {
			return {
				zoom: 13,
				mapLatValue: -34.60848999999996,
				mapLongValue: -58.37343999999996,
				center: L.latLng(0,0),
				marker: L.latLng(0,0),
				url:'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="https://community.esri.com/" target="_blank">Esri</a> contributors',
				// markers: [],
				coordinates: [],
				selectedRow: undefined
			}
		},
		created(){
			this.fetchArticles();
			this.fetchSpecialArticles();
			// Center market on default location
			this.center = L.latLng(this.mapLatValue, this.mapLongValue);
			this.marker = L.latLng(this.mapLatValue, this.mapLongValue);			
		},
		mounted() {
			// console.log(this.$refs.index);
			// this.$nextTick(() => {
			// 	this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
			// });
			// console.log(this.allArticles);

			// FIX
			// Hay que ver como debe ser el array de markers para poder obtener sus bounds y pasarselo a firBounds.
			// let bounds = L.latLngBounds(this.markers);
			// // console.log(bounds);
			// this.$refs.map.mapObject.fitBounds(this.markers);
			// // this.$refs.map.mapObject.fitBounds(this.markers);

		},
		computed: {
			...mapGetters(['allArticles', 'specialArticles', 'apiUrl', 'assetSrc']),
			markers() {
				let marks = [];

				this.allArticles.forEach(function (item, index) {

					let newMarker = { id: item.id , latlng: L.latLng(item.address_latitude, item.address_longitude), 
						content: item.content + '<br><b>' + item.title + '</b><br>' + item.address + '<br>' + item.daysText + '<br><a href="/articulo/'+ item.id +'">Ver Más</a>'
					};
					marks.push(newMarker);
				});
				
				return marks;
			},

			newestArticle() {
				if(this.specialArticles != undefined && this.specialArticles.newestArticle != undefined) {
					return  this.specialArticles.newestArticle;
				}
			},
			
			featuredArticle() {
				if(this.specialArticles != undefined && this.specialArticles.featuredArticles) {
					return this.specialArticles.featuredArticles[1];
				}
			},

			freeArticles() {
				if(this.specialArticles != undefined && this.specialArticles.freeArticles) {
					return this.specialArticles.freeArticles;
				}
			},

			allFamilyArticles() {
				if(this.specialArticles != undefined && this.specialArticles.allFamilyArticles) {
					return this.specialArticles.allFamilyArticles;
				}
			}
		},
		methods: {
			...mapActions(['fetchArticles', 'fetchSpecialArticles']),
			

			selectRow(index) {
				this.selectedRow = index;
			},

			scrollToElement(id) {
				const element = document.querySelector('#' + id);
				element.scrollIntoView({ behavior: 'smooth' });
				
				const elements = document.querySelector('.small-list-item');
			},

			focusOnMarker(lat, long){
				this.center = L.latLng(lat, long);
				this.marker = L.latLng(lat, long);
			},

		},
		filters: {
			imageSrc: function (image, imgSrc) {
				
				return imgSrc + 'images/articles/' + image;

			},

			
		},
		
}

</script>