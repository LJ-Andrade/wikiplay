<template>
    <div id="app" class="container-fluid" >
		
		<card-component headerClass="Hidden">
			<div class="container-fluid" slot="card-body">
				<div class="row">
					<div class="col">
						<form @submit.prevent="submitForm('/setSettings', settings, 'Configuraciones actualizadas')">
							<div class="row">
								<div class="col">
									<h1>Configuraciones Generales</h1>
									<hr>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12 col-sm-4">
									<div class="form-group">
										<label><b>Email del sitio web</b></label>
										<input type="email" v-model="settings.email" value=""  class="form-control">
									</div>	
								</div>
							</div>
							<div class="row">
								<div class="col-12 form-group">
									<label><b>Descripción del sitio</b></label>
									<textarea v-model="settings.site_description" cols="10" rows="5" class="form-control" placeholder="Ingrese aquí la descripción del sitio. Este será el texto que se mostrará cuando su sitio aparezca en los resultados de búsquedas de algún buscador o feed"></textarea>
								</div>
								<div class="col-12 form-group">
									<label><b>Palabras Claves - Keywords</b></label>
									<textarea v-model="settings.site_keywords" cols="10" rows="5" class="form-control" placeholder="Ingrese aquí las palabras claves del sitio, estas serán utilizadas por los motores de búsquedas para encontrar el mismo"></textarea>
								</div>
							</div>
							<div class="row">
								<div class="col-12 form-group">
									<label><b>Código de Google Analitycs</b></label>
									<textarea v-model="settings.google_analitycs" cols="10" rows="5" class="form-control" placeholder="Incluya aquí el código de Analytics que Google le proporciona"></textarea>
								</div>
								<div class="col-12 form-group">
									<label><b>Código de Google Tag Manager</b></label>
									<textarea v-model="settings.google_tag_manager" cols="10" rows="5" class="form-control" placeholder="Incluya aquí el código de Analytics que Google le proporciona"></textarea>
								</div>
							</div>
							<div class="row">
								<div class="col">
									<button type="submit" class="btn btn-main">Actualizar información</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<br>
			</div>
		</card-component>
    </div>
</template>

<script>
	import CommonMixins from '../mixins/CommonMixin';
	import axios from "axios";
	
	import { mapState, mapActions, mapGetters, mapMutations } from "vuex"

	// SlotComponents
	import Card from '../components/slot-components/CardSlotComponent'

	export default {
		mixins: [ CommonMixins ],
		components: {
			'card-component': Card
		},
		data() {
			return {
				settings: [],
			}
		},
		created() {
			this.getSettings();
		},
		mounted() {
		},
		computed: {
			...mapState(['loader'])
		},
		methods: {
			...mapMutations(['toggleLoader']),

			getSettings() {
				this.toggleLoader(true);

				axios.get('/getSettings')
					.then((res) => {
						// console.log(res.data);
						this.settings = res.data;
					})
					.catch((error) => {
						console.log(error);
					}).finally(() => {
						this.toggleLoader(false);
					});
				},

		}
	
	}

</script>