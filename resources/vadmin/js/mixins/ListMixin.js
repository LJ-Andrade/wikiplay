
import List from '../components/ListComponent'
import ListCheckbox from '../components/ListCheckboxComponent'
import ListActions from '../components/ListActionsComponent'

import { mapState, mapActions, mapGetters, mapMutations } from "vuex"

export default {
	components: { 
		'list-component': List,
		'list-checkbox': ListCheckbox,
		'list-actions': ListActions
	},
	data(){
		return {
			item: [],
			selectedItems: [],
			errorMessage: '',
		}
	},
	created() {
		this.setRoute(this.sectionRoute);
	},
	mounted() {
		this.fetchData();
	},

	computed: {
		...mapGetters(['route']),
		...mapGetters(['items']),
		...mapGetters(['allChecked']),
		...mapGetters(['updateMode']),
		...mapGetters(['pagination']),
		...mapGetters(['errors']),
		...mapState(['query']),
		...mapState(['loader']),

	

		listDataUpdateable() {
			// console.log(this.listData);
			let i = this.listData;

			return i.filter(i => i.updateable == undefined || i.updateable == true);
		},

		listDataVisible() {
			let i = this.listData;
			return i.filter(i => i.show == undefined || i.show == true);
		}

	},

	
	methods: {
		...mapMutations(['setRoute']),
		...mapActions(['fetchData']),
		...mapMutations(['toggleLoader']),
		...mapMutations(['setListProp']),

		isSelected(id) {
			if(this.selectedItems.includes(id))
				return true;
			return false;
		},

		selectAllItems: function(selectAll) {
			
			if(selectAll) {
				this.items.forEach(element => {
					if(!this.undeleteableItems.includes(element.id))
						this.selectedItems.push(element.id);
				});
			} else {
				this.selectedItems = [];
			}
		},

		// CRUD
		// ------------------------------

		// Store Item

		save(itemData) {

			this.toggleLoader(true);
			
			axios.put('/vadmin/save_' + this.route, itemData)
			.then((res) => {
				// console.log(res);
				if(res.data.status == 'success'){
					this.clearForm();

					this.fetchData({ page: this.pagination.current_page });
					// Close modal here 
					this.$bvModal.hide('Modal');
					
					this.alertSuccess(res.data.message);	
				} 
				
				else if(res.data.status == 'error') 
				{
					this.setListProp('errors', res.data.message);
				} 
				
				else 
				{
					if(this.debug) {  
						console.log(res.data) 
					}
				}
			})
			.catch(error => {
				console.log('Hubo un error creando un item. Ruta: ' + this.route);
				if(this.debug) { 
					console.log(error) 
				}
			})
			.finally(() => {
				this.toggleLoader(false);
			});
		},


		singleDelete() {
			this.selectedItems = [];
		},

		// Delete Item

		deleteItems(ids, message) {

			let _this = this;
			
			this.alertConfirm(message, 'Estás segur@?', function (confirmed) {
				if (confirmed) {
					_this.toggleLoader(true);
					console.log(_this.route);
					axios.delete( _this.route + '/' + ids)
						.then(res => {
							console.log(res.data);
							if(res.data.status == 'error') {
								console.log(res.data);
							} else if(res.data.status == 'success') {
						
								let successMessage = "Registro eliminado correctamente";	
								if(res.data.message != '')
									successMessage = res.data.message;

								_this.alertSuccess(successMessage);
								_this.fetchData({ page: _this.pagination.current_page });
								_this.selectedItems = [];

							} else {
								if(_this.debug) {
									console.log("Error al eliminar item");
									console.log(res.data);
								}

							}
						})
						.catch(error => {
							console.log('Hubo un error eliminando: ' + _this.route);
							console.error(error);
						}).finally(() => {
							_this.toggleLoader(false);
						});
				}
			});
		}, 

		

		// Helper methods //
		// -----------------

		
		// Set the form to update or create - In case of update pass item and index parameters.
		setUpdateOrCreate(action, item) {

			this.clearForm();

			if(action == 'update')
			{
				this.setListProp({ property: 'updateMode', value: true });
				// this.updateMode = true;
				this.fillForm(item);
			}
			else
			{
				this.setListProp({ property: 'updateMode', value: false });
				// this.updateMode = false;
			}
		},

		// Fill form with selected item data
		fillForm(item){
			
			let updateableFields = this.listDataUpdateable;

			updateableFields.forEach(updateableField => {
				this.item[updateableField.name] = item[updateableField.name];
			});
			// Set Id on the update form
			this.item.id = item.id;
		},

		// Submit to store or update depeding on updateMode variable
		submitCombinedForm(route, item)
		{
			console.log(route, item);

			// if(this.updateMode)
			// 	this.update(route, item);
			// else
			// 	this.store(route, item);
		},

		// Clean actual item data and form 
		clearForm(){
			const fieldsToEmpty = Object.keys(this.item).length;
			
			for (let i = 0; i < fieldsToEmpty; i++) {
				this.item[Object.keys(this.item)[i]] = '';
			}
			this.setListProp('errors', []);
		},

		// Unset form for update
		cancelEdition(){
			// this.updateMode = false;
			this.setListProp({ property: 'updateMode', value: false });
		},

	}
}