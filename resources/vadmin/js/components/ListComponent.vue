<template>
    <div>
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<h1>{{ sectionTexts.plural }}</h1>
				</div>
			</div>
			<div class="row">
				<div class="col">
					
					<div class="section-actions" 
						:class="{ 'section-actions-full': !sidebarState, 'section-actions-fixed': sectionScrolled } ">

						<!-- Create Button -->
						<slot name="create-button" v-if="customCreateButton"></slot> <!-- Custom Create Button (Optional - Comes from section) -->
						<button v-else class="btn btn-main" @click="setUpdateOrCreate('create'), $bvModal.show('Modal')">
							<i class="fas fa-plus"></i> {{ sectionTexts.new }}  
						</button>

						<!-- Delete Selected Action -->
						<button class="btn btn-danger round-btn" v-if="multipleItemsSelected" 
							@click="deleteItems(selectedItems, sectionTexts.askDelete)">
							<i class="far fa-trash-alt icon-delete delete"></i> 
						</button>
						<div class="float-sm-right right-actions">
							<searchinput-component></searchinput-component>
							<button v-if="useExtraActions" class="btn expand-extra-actions" @click="toggleExtraActions"><img :src="bIcon('list')"></button>
						</div>
						
						<div class="extra-actions" v-if="useExtraActions && extraActions">
							<slot name="extra-actions"></slot>
						</div>
						
					</div>

					<div class="custom-list">
						<simplebar class="table-responsive custom-table" v-if="!noResults">
							<table class="table">
								<thead>
									<tr>
										<th class="checkbox-col">
											<!-- Select All Checkbox -->
											<b-form-checkbox v-model="selectAllItems" size="lg"></b-form-checkbox>	
										</th>
										<!-- List Titles -->
										<th @click="changeOrder(item.name)" v-for="(item, index) in listDataVisible" :key="index" class="cursor-pointer">{{ item.text }}</th>
										<th class="actions-cell"></th>
									</tr>
								</thead>

								<tbody>
									<!-- Data -->
									<slot name="list-data">
									</slot>
								</tbody>
							</table>
							
						</simplebar>
						<div class="no-results" v-else>
							No se han encontrado resultados
						</div>

						
						<!-- Skeleton Loader -->
						<skeleton-list :rows="10" v-if="skeletonList"></skeleton-list>
						
						<!-- Pagination -->
						<pagination-component v-if="!noResults"></pagination-component>
						
					</div>
					
				</div>
			</div>		
		</div>
		<br>

		<!-- Save Modal -->
        <modal-component id="Modal" v-if="!customModal">
			<div slot="modal-title">
				<div v-if="updateMode"><h4 class="semi">Editar <span class="bold">{{ sectionTexts.singular }}</span></h4></div>
				<div v-else><h4 class="semi">Crear <span class="bold">{{ sectionTexts.singular }}</span></h4></div>
			</div>
			<div slot="modal-content">
				<form id="Form" @submit.prevent="save(item)">

					<input v-model="item.id" name="id" disabled type="hidden" class="form-control" placeholder="Id">

                    <div class="form-group" v-for="(field, index) in listDataUpdateable" :key="index"> 
                        <label :for="field.name">{{ field.text }}</label>
                        <input v-model="item[field.name]" :name="field.name" :type="field.type" class="form-control" :placeholder="field.placeholder">
						<div class="input-error" v-if="errors[field.name]">{{ errors[field.name][0] }}</div>
                    </div>

					<div class="modal-footer pb-0 pl-0 pr-0">						
						<button type="button" class="btn btn-secondary" @click="$bvModal.hide('Modal')">Cancelar</button>
						<div v-if="updateMode">
							<button type="submit" class="btn btn-main"><i class="fa fa-check"></i> Guardar Cambios</button>	
						</div>
						<div v-else>
							<button type="submit" class="btn btn-main"><i class="fa fa-check"></i>  Crear</button>	
						</div>
					</div>

				</form>
			</div>
		</modal-component>
		<slot name="customModal" v-if="customModal"></slot>
    </div>
</template>

<script>
	import CommonMixin from '../mixins/CommonMixin'

	import { mapGetters, mapState, mapMutations, mapActions } from "vuex"

	import Modal from '../components/slot-components/ModalSlotComponent'
	import SkeletonList from '../components/SkeletonList'
	import Pagination from '../components/PaginationComponent'
	import SearchInput from '../components/SearchInputComponent'
	import Simplebar from 'simplebar-vue'
	

    export default {
		props: [ 'sectionTexts', 'customModal', 'listDataVisible', 'listDataUpdateable', 'item', 'selectedItems', 'useExtraActions' ],
		mixins: [ CommonMixin ],
		components: {
			Simplebar,
			'modal-component': Modal,
			'skeleton-list': SkeletonList,
			'pagination-component': Pagination,
			'searchinput-component': SearchInput
		},
		data(){
			return {
				selectAllItems: false,
				sectionScrolled: false,
				extraActions: false,
				customCreateButton: false
			}
		},
		mounted() {
			window.addEventListener('scroll', (event) => {
				if(window.scrollY > 70)
					this.sectionScrolled = true;
				else
					this.sectionScrolled = false;
			});
			if(this.$slots['create-button'])
				this.customCreateButton = true;
		},
		computed: {
			...mapGetters(['route']),
			...mapGetters(['sidebarState']),
			...mapGetters(['updateMode']),
			...mapGetters(['allChecked']),
			...mapGetters(['batchDeleteMode']),
			...mapGetters(['noResults']),
			...mapGetters(['errors']),
			...mapGetters(['items']),
			...mapGetters(['pagination']), 
			...mapState(['skeletonList']),
			...mapState(['query']),

			
			noResults() {
				if(this.items.length == 0 && this.query.searchTerm != '' && !this.loader)
					return true;

				return false;
			},
			
			useCustomModal() {
				if(this.customModal != undefined && this.customModal)
					return true;

				return false;
			},

			multipleItemsSelected() {
				if(this.selectedItems.length > 1) 
					return true;

				return false;
			},
			
		},
		watch: {
			selectAllItems: function() {
				this.$emit("selectAllItems", this.selectAllItems);
			}
		},
		methods: {
			...mapMutations(['setOrder']),
			...mapMutations(['setListProperty']),
			...mapActions(['fetchData']),

			toggleExtraActions() {
				this.extraActions = !this.extraActions;
			}, 
			save(item) {
				this.$emit("save", item);
			},

			deleteItems(items, message) {
				this.$emit("deleteItems", items, message);
			},
			
			setUpdateOrCreate() {
				this.$emit("setUpdateOrCreate", 'create');
			},
					
			// Search and display options
			changeOrder(param) {
				this.setOrder(param);
				this.fetchData({ page: this.pagination.current_page });
			},
		}
    }
</script>

<style>

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}	
</style>