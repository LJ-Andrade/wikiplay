<template>
	<div class="row">
		<div class="col-6 col-md-6 col-lg-7 p-0">
			 <!-- <l-map ref="myMap" style="min-height: 400px"> </l-map> -->
			<l-map ref="map" id="map"  style="min-height: 400px"
				:zoom="zoom" 
				:center="center"
				>
				<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
				<!-- <l-marker :lat-lng="marker" v-for="(marker, index) in markers" :key="index" ></l-marker>  -->
				<!-- <l-marker :lat-lng="marker"></l-marker> -->
				<l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng" @l-add="$event.target.openPopup()" v-on:click="scrollToElement('Article'+item.id)">
	
					<l-popup :content="item.content"></l-popup>
				</l-marker>
				<!-- <l-marker ref="dataMarkers" v-for="d in data" @click="markerSelected($event, d)" :key="d.id" :lat-lng="d.latlng">
					<l-popup v-if="d.name"> {{ d.name }}</l-popup>
				</l-marker> -->
			</l-map> 
		</div>
		<simplebar data-simplebar-auto-hide="false" class="col-6 col-md-6 col-lg-5 small-list small-list-home p-0" >
			<!-- {{ vuelog( allArticles) }} -->
				<div v-for="(article, index) in allArticles" :key="index" v-on:click="focusOnMarker(article.address_latitude, article.address_longitude)" class="small-list-item" :id="'Article'+article.id">
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
				</div>
		</simplebar>
	</div>
</template>

<script>

import CommonMixins from '../mixins/CommonMixin';

import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

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
		components: {
			// Map Components
			'l-map': LMap,
			'l-tile-layer': LTileLayer,
			'l-marker' : LMarker,
			'l-popup' : LPopup,
			simplebar
		},
		mixins: [ CommonMixins ],
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
			}
		},
		created(){
			this.fetchArticles();
			// Center market on default location
			this.center = L.latLng(this.mapLatValue, this.mapLongValue);
			this.marker = L.latLng(this.mapLatValue, this.mapLongValue);

			
		},
		mounted() {
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
			...mapGetters(['allArticles', 'apiUrl', 'assetSrc']),
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
		},
		methods: {
			...mapActions(['fetchArticles']),
			scrollToElement(id) {
				console.log("Clicking on event");
				const element = document.querySelector('#' + id);
				element.scrollIntoView({ behavior: 'smooth' });
				
				element.classList.add('small-list-item-active');

				const elements = document.querySelector('.small-list-item');
				console.log(elements);
				elements.classList.remove('small-list-item-active');
				console.log("Focusing on article");
			},
			focusOnMarker(lat, long){
				this.center = L.latLng(lat, long);
				this.marker = L.latLng(lat, long);
			},

		},
		filters: {
			imageSrc: function (image, imgSrc) {
				
				return imgSrc + 'images/articles/' + image;
				console.log(image);
				
				// return '../assets/images/default-article.jpg';
			},
		},
		
}

</script>