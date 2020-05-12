import { mapGetters } from "vuex";

export default {
	data() {
		return {
			// loader: false,
			provs: [],
			locsFromProv: { id: '', name: '' },
			selectedProv: '',
			selectedLoc: '',
			

			infoModalTitle: '',
			infoModalContent: '',
		};
	},
	created() {
		if(this.useProvs)
			this.getProvs();

		console.log("TEST");
	},
	computed: {
		// ...mapGetters(['loader']),
		...mapGetters(['items']),
	},
	filters: {
		translateStatus(status) {
			switch (status) {
				case 'A':
					return 'Activo';
					break;
				case 'I':
					return 'Inactivo';
					break;
				default:
					return 'Sin estado';
					break;
			}
		},

		imageSrcFilter(image) {
			return '/images/articles/' + image;
		},	

		getStatusBoolean(status){
			switch (status) {
				case 'A':
					return true;
					break;
				case 'I':
					return false;
					break;
				default:
					return false;
					break;
			}
		},
		switchStatus(status) {
			switch (status) {
				case 'A':
					return 'I';
					break;
				case 'I':
					return 'A';
					break;
				default:
					return 'I';
					break;
			}
		}
	},
	methods: {
		bIcon(icon) {
			return '/vendor/bootstrap-icons/' + icon + '.svg';
		}, 

		// Forms
		// --------------------------
		changeStatus(model, id, status, switchInactiveActive) {

			if(switchInactiveActive)
				status = this.$options.filters.switchStatus(status);
			axios
				.post("/vadmin/changeStatus", {
					model: model,
					id: id,
					status: status
				})
				.then(res => {
					console.log(res.data.message);
					
				})
				.catch(error => {
					console.error("Error");
					console.error(error);
				})
				.finally(() => {});
		},

		submitForm(route, data, message = "Formulario enviado") {
			// if(this.loader != undefined) this.loader = true;

			axios
				.post(route, data)
				.then(res => {
					console.log(res.data);

					if (res.data.status == "success") 
						this.alertSuccess(res.data.message);
					else 
						console.log(res.data);
				})
				.catch(error => {
					console.error("Error: " + error);
					console.log(error);
				})
				.finally(() => {
					// if(this.loader != undefined) this.loader = false;
				});
		},

		submitFormWithImages(route, data, message, action) {
			axios
				.post("route", data, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})
				.then(function() {
					console.log("SUCCESS!!");
				})
				.catch(function() {
					console.log("FAILURE!!");
				});
		},

		

		getProvs() {

			axios
				.get('/vadmin/provs?get=all')
				.then(res => {
					// console.log(res.data);
					this.provs = res.data;
				})
				.catch(error => {
					console.error("Error on getProvs()");
					console.log(error);
				});
		},


		getLocsFromProv(id){
			
			if(id != undefined)
			{
				// this.loader = true;
				let url = '/vadmin/locs?whereProv='+id;
	
				axios.get(url)
					.then((res) => {
						this.locsFromProv = res.data;
					})
					.catch((error) => {
						console.error('Error en getLocsFromProv');
						console.error(error)
					}).finally(() => {
						// this.loader = false;
					});
			}

		},
		
		

		// UI 

		// Toggle UI elements
		uiToggle(value) { 
			if(this.uiItems[value] == false) 
				this.uiItems[value] = true;
			else
				this.uiItems[value] = false;
		},

		// App Settings
		// --------------------------

		setSetting(setting, value) {
			// let data = { setting: setting, value: value };
			axios
				.post("/setSetting", {
					setting: setting,
					value: value
				})
				.then(res => {
					console.log(res.data);
					// $('#Error').html(res.data);
				})
				.catch(error => {
					console.error("Error: " + error);
					console.log(error);
				})
				.finally(() => {});
		},

		// Modal
		// --------------------------

		modal(id, action) {
			$(id).modal(action);
		},

		infoModal(title, content) {
			this.infoModalTitle = title;
			this.infoModalContent = content;
			
			this.$refs.InfoModal.openModal();
		},

		// Logs
		// --------------------------

		vuelog(e) {
			console.log(e);
		},

		// Alerts
		// --------------------------

		alertSuccess(message, message2 = '') {

			this.$swal({
				icon: "success",
				// title: 'Oops...',
				text: message,
				footer: "<span style='text-align:center'>" + message2 + "</span>"
			});

		},

		alertError(message, message2 = '') {

			this.$swal({
				icon: "error",
				title: "Ups...",
				text: message,
				footer: message2
			});
		},

		alertConfirm(message, message2 = '', callback) {
			this.$swal({
				title: message,
				text: message2,
				icon: "warning",
				showCancelButton: true,
				cancelButtonText: "Cancelar",
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sí, eliminar!"
			}).then(confirmed => {
				callback(confirmed && confirmed.value == true);
			});
		},

		alertConfirm2(message, message2 = '', buttonCancel = 'Cancelar', buttonAccept = 'Aceptar', action, callback) {
			this.$swal({
				title: message,
				text: message2,
				icon: "warning",
				showCancelButton: true,
				cancelButtonText: buttonCancel,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: buttonAccept
			}).then(confirmed => {
				callback(confirmed && confirmed.value == true);
			});
		},

		// Common Queries
		
	}
};
