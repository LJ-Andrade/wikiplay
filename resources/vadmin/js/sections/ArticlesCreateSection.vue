<template>
	<div>
		<info-modal ref="InfoModal" :title="infoModalTitle" :content="infoModalContent" ></info-modal>

		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<!-- <router-link to="articles" class="simple-link">Volver</router-link> -->
					<h1 v-if="updateMode">Editando el artículo <b>{{ item.title }}</b></h1>
					<h1 v-else>Nuevo Artículo</h1>
				</div>
			</div>
			<card-component headerClass="Hidden">
				<div slot="card-header" style="display: none"></div>
				<div class="container" slot="card-body">
					<div class="row">
						<form @submit.prevent="submitArticle()" ref="FormWithFiles" class="custom-form">
							<input type="hidden" name="_token" :value="csrf">
							<div class="row">
								<!-- TITLE -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Título del artículo </label>
										<input v-model="item.title" name="title" type="text" class="form-control" placeholder="Título">
										<div class="input-error" v-if="errors['title']">{{ errors.title[0] }}</div>
									</div>
								</div>
								<!-- CONTENT -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Lugar / Descripción</label>
										<input v-model="item.content" name="content" placeholder="Ingrese el lugar/descripción del evento" class="form-control">
										<div class="input-error" v-if="errors['content']">{{ errors.content[0] }}</div>
									</div>
								</div>
								<!-- PRICE -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Precio</label>
										<input v-model="item.price" name="price" type="number" min="0" class="form-control" placeholder="Precios">
										<div class="input-error" v-if="errors['price']">{{ errors.price[0] }}</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<!-- PHONE -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Teléfonos</label>
										<input v-model="item.phone" name="phone" type="text" class="form-control" placeholder="Teléfonos">
										<div class="input-error" v-if="errors['phone']">{{ errors.phone[0] }}</div>
									</div>
								</div>
								<!-- HOURS -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Horarios</label>
										<input v-model="item.hour" name="hours" type="text" class="form-control" placeholder="Horarios">
										<div class="input-error" v-if="errors['hours']">{{ errors.hours[0] }}</div>
									</div>
								</div>
								<!-- AGE FROM -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Edad desde</label>
										<input v-model="item.age_from" name="age_from" type="number" min="0" class="form-control" placeholder="Ingrese edad mínima">
										<div class="input-error" v-if="errors['age_from']">{{ errors.age_from[0] }}</div>
									</div>
								</div>
								<!-- AGE TO -->
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> Edad hasta</label>
										<input v-model="item.age_to" name="age_to" type="number" min="0" class="form-control" placeholder="Ingrese edad máxima">
										<div class="input-error" v-if="errors['age_to']">{{ errors.age_to[0] }}</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="row">
								<!-- DATE BEGIN -->
								<div class="col-12 col-sm-12 col-md-12 col-lg-3 form-group">
									<label> <i class="fas fa-circle dot"></i> Comienzo del evento</label> <br>
									 <date-picker
										v-model="item.date_begin"
										type="date"
										:lang="lang"
										:disabled-date="notBeforeToday"
										value-type="format"
										format="DD-MM-YYYY"
									></date-picker>
								</div>
								<!-- DATE ENDS -->
								<div class="col-12 col-sm-12 col-md-12 col-lg-3 form-group">
									<label> <i class="fas fa-circle dot"></i> Fin del evento</label> <br>
									 <date-picker
										v-model="item.date_ends"
										type="date"
										:lang="lang"
										:disabled-date="notBeforeToday"
										value-type="format"
										format="DD-MM-YYYY"
									></date-picker>
								</div>
								<div class="col-12 col-sm-12 col-md-12 col-lg-6 form-group ">
									<!-- horizontal-list -->
									<label> <i class="fas fa-circle dot"></i> Días del evento</label> <br>
									<input type="text" class="form-control" v-model="item.daysText">
									<!-- SELECTED DAYS -->
									<div v-for="(day, index) in selectedDays" :key="index" class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" v-model="day.selected"
										:id="'cb-day-'+day.value" 
										v-on:change="prepareSelectedDays">
										<label class="form-check-label" :for="'cb-day-'+day.day">{{ day.name }}</label>
									</div>

								</div>
							</div>
							
							<hr>
							<div class="row">
								<div class="col-12">
									<label> <i class="fas fa-circle dot"></i> Ubicación</label>
								</div>
								<div class="col-12 col-sm-12 col-md-12 col-lg-6">
									<l-map ref="map" id="map"  style="min-height: 400px"
										:zoom="zoom" 
										:center="center"
										@locationfound="userLocationFound($event)"
										v-on:click="addMarker"
										>
										<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
										<v-geosearch :options="geosearchOptions"></v-geosearch>
										<l-marker :lat-lng="marker" ></l-marker>
										<!-- <l-marker ref="dataMarkers" v-for="d in data" @click="markerSelected($event, d)" :key="d.id" :lat-lng="d.latlng">
											<l-popup v-if="d.name"> {{ d.name }}</l-popup>
										</l-marker> -->
									</l-map>
									<!-- MAPA -->
									<!-- :max-bounds="maxBounds" -->
									<div class="form-check">
										<input :checked="mapWarning == 'on'" type="checkbox" class="form-check-input" id="MapWarningCheckbox" v-on:click="updateMapWarning">
										<label style="font-size: 0.9rem"  class="form-check-label" for="MapWarningCheckbox">Desactivar advertencía en mapa</label>
									</div>
								</div>
								<div class="mobile-spacing"></div>
								<div class="col-12 col-sm-12 col-md-12 col-lg-6">
									<div class="row">
										<!-- Address -->
										<div class="col-12">
											<div class="form-group">
												<label> <i class="fas fa-circle dot"></i> Dirección</label>
												<input class="form-control" type="text" v-model="item.address">
												<span class="small-under-input" v-if="item.address_latitude">
													Latitud: {{ item.address_latitude }} | Longitud: {{ item.address_longitude }}
												</span>
											</div>
										</div>
										<!-- PROVS -->
										<div class="col-12">
											<div class="form-group">
												<label> <i class="fas fa-circle dot"></i> Provincia</label>
												<select @click="getLocsFromProv(item.prov_id)" v-model="item.prov_id" class="form-control">
													<option value="" disabled selected>Seleccione una provincia</option>
													<option v-for="(prov, index) in provs" :key="index" :value="prov.id" 
														:selected="prov.id == item.prov_id ">
														{{ prov.name }}
													</option>
												</select>
											</div>
										</div>
										<!-- LOCS -->
										<div class="col-12">
											<div class="form-group">
												<label> <i class="fas fa-circle dot"></i> Localidad</label>
												<select v-model="item.loc_id" class="form-control">
													<option v-for="(loc, index) in locsFromProv" :key="index" :value="index" 
													:selected="index == item.loc_id ">
														{{ loc }}
													</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<button type="button" class="btn btn-help" v-on:click="uiToggle('address-help')"><i class="far fa-question-circle"></i> Ayuda</button>
											<transition name="fade">
												<div v-if="uiItems['address-help']" class="info-box">
													<b>Provincias y Localidades: </b> <br>
													Las provincias y localidades deben ser ingresadas manualmente, para que luego sean reconocidad
													por el filtro del sitio web. <br><br>
													<b>Mapa:</b> <br>
													Para que una dirección aparezca en los mapas, debe ingresarla desde este mapa, para que el sistema
													ponga las coordenadas automáticamente:
													Ingrese la dirección correspodiente en la caja del buscador en el mapa 
													(<i class="fas fa-search"></i>).
													Si la ubicación solicitada no aparece en los resultados, recuerde de incluír la dirección
													completa, incluyendo la localidad. <br>
													<b>Por ejemplo:</b> Av. Directorio 5000 Caba. 
												</div>
											</transition>
										</div>
									</div>
									
								</div>
							</div>
							<br>
							<hr>
					
							<div class="row">
								<div class="col-12">
									<label> <i class="fas fa-circle dot"></i> Imágenes del artículo</label> <br>
								</div>
								<div class="col-12 col-md-12 col-lg-6">
									<div class="multiple-image-plugin">
										<!-- IMAGE UPLOAD -->
										<vue-upload-multiple-image
											v-model="images"
											@upload-success="imagesSelected"
											@before-remove="beforeRemoveImage"
											@edit-image="editImage"
											@mark-is-primary="setFeaturedImage"
											:data-images="images"
											:multiple=true
											dragText="Agregar imagenes"
											dropText="Suelte aquí las imágenes"
											browseText="Click Aqui"
											primaryText=""
											popupText="Esta imágen estará en primera posición de las que estás subiendo"
											markIsPrimaryText="Mover al principio"
										></vue-upload-multiple-image>
										<!-- 
											More options
											maxImage="5" 
										-->
									</div>
								</div>
								<div class="mobile-spacing"></div>
								<!-- Existing Images -->
								<div class="col-xs-12 col-md-12 col-lg-6 inline-images">
									<label> Imágenes publicadas</label>
									<div v-if="existingImages.length > 0">
										<ul class="images">
											<li class="image" v-for="(image, index) in existingImages" :key="index">
												<div class="overlay">
													<a type="button" 
														v-on:click="deleteItem('/vadmin/images', image['id'], `Desea eliminar la imágen <b> &nbsp ${image['name']}</b> ?`, false, existingImages, [index])">
														<i class="fas fa-trash"></i>
													</a>
												</div>
												<img :src="'/images/articles/' + image.thumb" alt="Article Image">
											</li>
										</ul>
									</div>
									<div v-else>
										No hay imágenes publicadas
									</div>
								</div>
							</div>
							<hr>
							<div class="row">
								<!-- CATEGORY -->
								<div class="col-12 col-sm-12 col-md-12 col-lg-6">
									<div class="form-group">
										<label> <i class="fas fa-circle dot"></i> 
											Categoría
											<i class='far fa-question-circle info-icon' v-on:click="infoModal('Para que sirve la categoría?', 'La categoría es útil para filtrar los artículos en el buscador de la web')"></i>
										</label>
										<select v-model="item.category_id" name="prov_id" type="name" class="form-control" >
											<option placeholder="Nombre de la provincia" value="" disabled> Seleccione una categoría </option>
											<option v-for="(category, index) in categories" :key="index" :value="category.id"> {{ category.name }} </option>
										</select>
									</div>
								</div>
								<!-- PUBLISHED AT -->
								<div class="col-12 col-sm-6 col-md-6 col-lg-3 form-group">
									<label> <i class="fas fa-circle dot"></i> Publicación 
										<i class='far fa-question-circle info-icon' v-on:click="infoModal(infoModalData.published_at.title, infoModalData.published_at.content)"></i> 
									</label> <br>
									 <date-picker
										v-model="item.published_on"
										type="date"
										:lang="lang"
										:disabled-date="notBeforeToday"
										value-type="format"
										format="DD-MM-YYYY"
										placeholder="Seleccione una fecha"
									></date-picker>
								</div>
								<!-- PUBLISHED ON -->
								<div class="col-12 col-md-4 col-md-6 col-lg-3 form-group">
									<label> <i class="fas fa-circle dot"></i> Expiración
										<i class='far fa-question-circle info-icon' v-on:click="infoModal(infoModalData.published_on.title, infoModalData.published_on.content)"></i> 
									</label> <br>
									<date-picker
										v-model="item.published_at"
										type="date"
										:lang="lang"
										value-type="format"
										format="DD-MM-YYYY"
										placeholder="Seleccione una fecha"
									></date-picker>
								</div>
							</div>
							<br>
							<div class="row">
								<!-- FEATURED -->
								<div class="col-12 col-sm-6 col-md-6 col-lg-3">
									<div class="form-group justify-content-center">
										<label> <i class="fas fa-circle dot"></i> Destacado</label> <br>
										<label class="switch">
											<input class="switch-checkbox" type="checkbox" v-model="item.featured"
											:checked="item.featured"
											>
											<span class="slider round"></span>
										</label>
									</div>
								</div>
								<!-- ORDER -->
								<transition name="fade">
									<div class="col-12 col-sm-6 col-md-6 col-lg-3" v-if="item.featured">
										<div class="form-group">
											<label> <i class="fas fa-circle dot"></i> 
												Prioridad
												<i class='far fa-question-circle info-icon' v-on:click="infoModal('Para que sirve el campo Prioridad?', 'La prioridad sirve para ordenar los artículos marcados como destacados.<br> Si dos artículos tienen el mismo número de prioridad, se ordenarán por fecha, el más reciente saldrá primero.')"></i>
											</label> 
											<input v-model="item.order" type="number" name="order" placeholder="Prioridad" class="form-control">
										</div>
									</div>
								</transition>
							</div>
							<div class="modal-footer pb-0 pl-0 pr-0">
								<label for="">Estado</label>
								<select v-model="item.status" class="form-control" style="width: 150px">
									<option value="A" selected>Activo</option>
									<option value="I">Pausado</option>
								</select>
								<!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button> -->
								<button type="submit" v-on:click="redirectAfterUpdate('here')" class="btn btn-main"> 
									<template v-if="!item.id"> <i class="fas fa-check"></i> Crear </template>
									<template v-else> <i class="fas fa-sync"></i> Actualizar</template>
								</button>
								<button type="submit" v-on:click="redirectAfterUpdate('list')" class="btn btn-main"><i class="fa fa-check"></i> Guardar y Salir</button>

							</div>
						</form>
					</div>		
				</div>
			</card-component>

		</div>
		<br>
	</div>
</template>

<script>

	import { mapGetters, mapMutations } from "vuex";

	// Mixins
	import CommonMixins from '../mixins/CommonMixin';

	// Slot Components
	import Card from '../components/slot-components/CardSlotComponent'

	// Components
	import InfoModal from '../components/InfoModalComponent'

	// Map Assets
	import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
	import { EsriProvider } from 'leaflet-geosearch' // This provider gives street number presition
	import VGeosearch from 'vue2-leaflet-geosearch'
	import { Icon } from 'leaflet'
	import 'leaflet/dist/leaflet.css'
	import "leaflet-geosearch/dist/style.css"
	import "leaflet-geosearch/assets/css/leaflet.css"

	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		iconRetinaUrl: '../../../vendor/leaflet/marker-icon-2x.png',
		iconUrl: '../../../vendor/leaflet/marker-icon.png',
		shadowUrl: '../../../vendor/leaflet/marker-shadow.png'
	});

	// Datepicker Docs
	// https://mengxiong10.github.io/vue2-datepicker/index.html
	// https://www.npmjs.com/package/vue2-datepicker
	import DatePicker from 'vue2-datepicker';
	import 'vue2-datepicker/index.css';
	import 'vue2-datepicker/locale/es'

	// Image Uploader Docs
	// https://github.com/lekhang2512/vue-upload-multiple-image
	import VueUploadMultipleImage from 'vue-upload-multiple-image'


	export default {
		components: {
			'card-component': Card,
			'info-modal': InfoModal,
			// Map Components
			'l-map': LMap,
			'l-tile-layer': LTileLayer,
			'l-marker' : LMarker,
			'l-popup' : LPopup,
			VGeosearch,
			DatePicker,
			VueUploadMultipleImage,
		},
		mixins: [ CommonMixins ],
		data () {
			return {
				// Section properties
				sectiontitle: '',
				useProvs: true,
				// Model properties
				route: '/vadmin/articles',
				item: { id:'', title: '', category_id: '', content: '', address: '', address_latitude: '', prov_id: '', loc_id: '',
						address_longitude: '', published_on: '', published_at: '', phone: '', hour: '', date_begin: '', date_ends: '',
						days: [], daysText: '', age_from: '', age_to: '', price: '', 'status': 'A', 'featured': '', order: '', date: ''
					},
				selectedDays: [ 
					{ value: '1', selected: false, name: 'Lunes', },
					{ value: '2', selected: false, name: 'Martes', },
					{ value: '3', selected: false, name: 'Miércoles', },
					{ value: '4', selected: false, name: 'Jueves', },
					{ value: '5', selected: false, name: 'Viernes', },
					{ value: '6', selected: false, name: 'Sábado', },
					{ value: '7', selected: false, name: 'Domingo', }

				],
				images: [],
				existingImages: [],
				categories: [],
				errors: [],
				listData: [
							['', 'Título'],
							['', 'Contenido'],
							['', 'Dirección'],
							['', 'Lat y Long'],
							['', 'Teléfonos y Horarios'],
							['', 'Edades'],
							['', 'Precios'],
							['', '']
						],
				undeleteableItems: [],
				updateMode: false,
		
				// DatePickers
				todayDate: '',
				lang: {
				formatLocale: {
					firstDayOfWeek: 1,
				},
					monthBeforeYear: false,
				},

				// Map Settings
				zoom: 13,
				mapLatValue: -34.60848999999996,
				mapLongValue: -58.37343999999996,
				center: L.latLng(0,0),
				marker: L.latLng(0,0),
				url:'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="https://community.esri.com/" target="_blank">Esri</a> contributors',
				markers: [],
				coordinates: [],
				coordinateY: '',
				coordinateX: '',
				coord: '',
				searchMarker: {},
				geosearchOptions: {
					provider: new EsriProvider(),
					showMarker: true,
					showPopup: true,
					autoClose: true,
					autocomplete: true,
					searchLabel: 'Ingrese dirección',
					keepResult: true,
					allowMultipleResults: false,
					popupFormat: ({ query, result }) => result.label,
					marker: { // optional: L.Marker    - default L.Icon.Default
						icon: new L.Icon.Default(),
						draggable: false,
					},
				},
				mapWarning: 'off',

				// Form
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				form: new FormData,
		
				// Redirect
				redirectTo: 'list',

				// Ui and Help
				uiItems: { 'address-help' : false, 'other' : true },
				infoModalData: {
					published_at: { title: 'Publicación del artículo', content: 'Este campo define La fecha en la que el articulo comenzará a aparecer en los listados de la web <br><br><b>El articulo no sera eliminado de la base de datos</b>' },
					published_on: { title: 'Expiración del artículo', content: 'Este campo define la fecha en la que el articulo dejará de aparecer en los listados de la web. <br><br><b>El articulo no sera eliminado de la base de datos</b>' },
				}
			}
		},

		created() {
			if(this.$route.params.id != undefined) {
				this.updateMode = true;
				this.getItem(this.$route.params.id);
			} else {
				// Tal vez borrar FIX
				this.updateMode = false;
			}

			this.getCategories();

			// Center market on default location
			this.center = L.latLng(this.mapLatValue, this.mapLongValue);
			this.marker = L.latLng(this.mapLatValue, this.mapLongValue);
			
		}, 

		mounted() {
			this.$refs.map.mapObject.on('geosearch/showlocation', this.setCoordinates);
			// this.$refs.map.mapObject.on('geosearch/marker/dragend',  this.setCoordinates);
			this.todayDate = new Date();
			this.todayDate.setHours(0, 0, 0, 0);


			// MapWarning
			if (localStorage.mapWarning)
				this.mapWarning = localStorage.mapWarning

			this.setDaysText();

			if(this.item.days.length > 0)
				this.setSelectedDays(this.item.days);

		},

		watch:{

			// Reset section data if redirect from update to create
			$route (to, from){
				if(to.name == 'articles_create' ) {
					this.toggleLoader(true);
					location.reload();
				}
			}
		},


		computed: {
			maxBounds() {
				return L.latLngBounds([-73.4154357571, -55.25], [-53.628348965, -21.8323104794]); // Testing
			},
		},

		filters: {

			convertDate(date) {
				
				if (date != null)
				{
					let d = date.split("-");
					return d[2] + '-' + d[1] + '-' + d[0];
				}
			}

		},

		methods: {
			...mapMutations(['toggleLoader']),

			setSelectedDays(data) {

				let existingDays = data.split(',');

				this.selectedDays.forEach(function (item, index) {
					existingDays.forEach(existingDay => {
						if(existingDay == item.value) 
							item.selected = true;
					});
				});
				this.setDaysText();
			},

			prepareSelectedDays() {
				
				this.item.days = [];
				this.selectedDays.forEach(element => {
					if(!this.selectedDays.includes(element.value))
						if(element.selected)
							this.item.days.push(element.value);
				});
				this.setDaysText();
			},

			updateMapWarning(e) {
				if(e.target.checked)
					this.mapWarning = 'on';
				else
					this.mapWarning = 'off';

				localStorage.mapWarning = this.mapWarning;
			},

			getItem(id){
				axios.get('/vadmin/articles/' + id + '/edit')
					.then((res) => {
						
						// Set Data
						this.item = res.data.item;
						this.existingImages = res.data.item.images;
						
						// Set Locs
						if(this.item.prov_id)
							this.getLocsFromProv(this.item.prov_id);

						// Convert dates
						this.item.date_begin = this.$options.filters.convertDate(this.item.date_begin); 
						this.item.date_ends = this.$options.filters.convertDate(this.item.date_ends); 
						this.item.published_on = this.$options.filters.convertDate(this.item.published_on); 
						this.item.published_at = this.$options.filters.convertDate(this.item.published_at);

						// Mark address in map and center position
						this.center = L.latLng(this.item.address_latitude, this.item.address_longitude);
						this.marker = L.latLng(this.item.address_latitude, this.item.address_longitude);
					})
					.catch((error) => {
						console.error('Error on getItem()');
						console.error(error);
					}).finally(() => {
						this.toggleLoader(false);
					});
			},

			getCategories() {
				axios.get('/vadmin/get_all_categories')
					.then((res) => {
						this.categories = res.data.categories;
					})
					.catch((error) => {
						console.error('Error on getCategories()');
						console.error(error);
					}).finally(() => {

					});
			},
			
			submitArticle() {
				this.errors = [];
				this.toggleLoader(true);

				axios({
						method: 'PUT',
						url: '/vadmin/saveArticle',
						data: this.item,
						config: { headers: {'Content-Type': 'multipart/form-data' }}, 
					})
					.then((res) => {
						
						if(res.data.status == 'success')
						{
							this.alertSuccess(res.data.message[0], res.data.message[1]);

							if(this.redirectTo == 'list')
							{
								window.location.replace("/vadmin/articulos");
							}
							else if(this.redirectTo == 'here')
							{
								this.getItem(res.data.data);
								this.updateMode = true;
							}
							
						}
						else if(res.data.status == 'error')
						{
							this.errors = res.data.message;
							this.alertError('Tiene errores en el formulario', 'Hay campos que debe completar o no son válidos');
						}
						else
						{
							console.log(res.data);
						}
					})
					.catch((error) => {
						console.error('Error: ' + error);
					}).finally(() => {
						this.toggleLoader(false);
				});

			}, 

			// Image Upload
			// --------------------
			imagesSelected(formData, index, fileList) {
				
				this.item.images = fileList;
				// Upload image api
				// axios.post('http://your-url-upload', formData).then(response => {
				//   console.log(response)
				// })
			},

			beforeRemoveImage (index, done, fileList) {
				// console.log('index', index, fileList)

				this.alertConfirm('Está por remover una imágen', 'Estás segur@?', undefined, undefined, function (confirmed) {
					if (confirmed) {
						done();
					}
				});
			},

			setFeaturedImage(index, fileList) {
				console.log(fileList);
			},

			editImage (formData, index, fileList) {
				console.log('edit data', formData, index, fileList)
			},


			// Datepicker
			// ------------------------------------------

			notBeforeToday(date) {
				return date < this.todayDate;
			},


			// Map Methods
			// ------------------------------------------

			// removeMarker(index) {
			// 	this.markers.splice(index, 1);
			// },

			addMarker(event) {

				// this.$refs.map.mapObject.removeLayer(this.$refs.map.mapObject);
				let _this = this;
				if(this.mapWarning) {
					continueAddingMarker(_this);
				} else {
					let message = 'Estás apunto de marcar una localización de forma manual. <br><br> Si hace esto deberá ingresar el nombre de la calle/lugar a mano. <br><br>'
					this.alertConfirm2(message, 'Desea continuar?', 'Cancelar', 'Continuar', _this, function (confirmed) {
						if (confirmed) { 
							continueAddingMarker(_this);
						}
					});
				}

				function continueAddingMarker(_this) {
					if(_this.searchMarker) {
						// Remove Mark from previous search
						_this.$refs.map.mapObject.removeLayer(_this.searchMarker);
					}
					
					_this.item.address = '';
					_this.item.marker = '';
					_this.item.address_latitude = event.latlng.lat;
					_this.item.address_longitude = event.latlng.lng;

					_this.center = L.latLng(event.latlng.lat, event.latlng.lng);
					_this.marker = L.latLng(event.latlng.lat, event.latlng.lng);
				}
			},

			setCoordinates (event){
				this.searchMarker = event.marker;
				
				console.log(event.marker);
				// console.log("y: " + event.location.y);
				// console.log("x: " + event.location.x);
				// console.log(event.location.label);
				// this.item.address = event.location.label;
				this.item.marker = '';
				this.item.address_latitude = event.location.y;
				this.item.address_longitude = event.location.x;
				
				let splittedAddress = event.location.label.split(',');
				
				this.item.address = splittedAddress[0];
		
			},
			
			userLocationFound (location) {
				console.log("UserLocationFound: ");
				console.log(location);
				this.center = location.latlng;
			},

			redirectAfterUpdate(location) {
				this.redirectTo = location;
			},

			setDaysText() {
				
				// let existingDays = data.split(',');
				
				let data = this.item.days;

				let days = []; 
				
				// Check if data is already converted to array
				if(Array.isArray(data))
					days = data;
				else
					days = data.split(',');

				let t = 'Todos los días';
				let _this = this;
				if(days.length == 1) {	

					t = _this.selectedDays[parseInt(days)-1].name; // Sets the single day name

				} else {

					if(days.includes('1') && days.includes('2') && days.includes('3') && days.includes('4') && days.includes('5') && days.includes('6') && days.includes('7') ) {
						t = 'Todos los días';
					}
					else if( days.includes('1') && days.includes('2') && days.includes('3') && days.includes('4') && days.includes('5') && !days.includes('6') && !days.includes('7') ) {
						t = 'Lunes a Viernes';
					}
					else if(days.includes('6') && days.includes('7') && !days.includes('1') && !days.includes('2') && !days.includes('3') && !days.includes('4') && !days.includes('5') ) {
						t = 'Sábados y Domingos';
					} else {

						// Set days with a - separator and no - at the end. ;)
						t = '';
						days.forEach(function (day, index) {
							t += _this.selectedDays[parseInt(day)-1].name;
							if(index != days.length - 1) {
								t += ' - ';
							} 
						});

					}
				}

				this.item.daysText = t;
			},

		}
	}
</script>
