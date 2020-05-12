<template>
	<div>
		<!-- Modal -->
		<list-component 
			:item="item"
			:sectionTexts="sectionTexts" 
			:listDataVisible="listDataVisible"
			:listDataUpdateable="listDataUpdateable"
			:selectedItems="selectedItems"
			:customModal="true"
			@save="save(item)"
			@deleteItems="deleteItems"
			@setUpdateOrCreate="setUpdateOrCreate"
			@selectAllItems="selectAllItems"
		>
			<!-- List data -->
			<template slot="list-data">
				<tr class="table-row" v-for="(item, index) in items" :key="index" :class="{ 'table-row-selected': isSelected(item.id) }">
					
					<td class="align-middle checkbox-col">
						<!-- List Checkbox -->
						<b-form-checkbox size="lg" v-if="!undeleteableItems.includes(item.id)"
							v-model="selectedItems"
							:value="item.id"
							>
						</b-form-checkbox>
					</td>

					<!-- Data -->
					<td class="align-middle" v-for="(show, index) in listDataVisible" :key="index">
						<template v-if="!show.isRelation">
							{{ item[show.name] }}
						</template>

						<template v-else>
							{{ item.prov.name }}
						</template>
					</td>

					<list-actions>
						<div slot="list-actions" class="list-actions">
							<!-- Edit -->
							<b-dropdown-item @click="setUpdateOrCreate('update', item), $bvModal.show('Modal')" >
								<img :src="bIcon('pen')" /> Editar
							</b-dropdown-item>
							<!-- Delete -->
							<b-dropdown-item @click="deleteItems(item.id, sectionTexts.askDeleteItem + '<b> &nbsp ' + item.name + '</b>'), singleDelete()" v-if="!undeleteableItems.includes(item.id)">
								<img :src="bIcon('trash')" > Eliminar
							</b-dropdown-item>
						</div>
					</list-actions>
				
				</tr>
			</template>

			<div slot="customModal">
		
				<!-- Save Modal -->
				<modal-component id="Modal">
					<div slot="modal-title">
						<div v-if="updateMode"><h4 class="semi">Editar <span class="bold">{{ sectionTexts.singular }}</span></h4></div>
						<div v-else><h4 class="semi">Crear <span class="bold">{{ sectionTexts.singular }}</span></h4></div>
					</div>
					<div slot="modal-content">
						<form id="Form" @submit.prevent="save(item)">

							<input v-model="item.id" name="id" disabled type="hidden" class="form-control" placeholder="Id">

							<div class="form-group">
								<label for="name">Localidad</label>
								<input v-model="item.name" name="name" type="text" class="form-control" placeholder="Ingrese el nombre de la localidad">
								<div class="input-error" v-if="errors['name']">{{ errors['name'] }}</div>
							</div>
							
							<div class="form-group">
								<label for="name">Provincia</label>
								<select v-model="item.prov_id" name="prov_id" type="name" class="form-control" >
									<option placeholder="Nombre de la provincia" value="" disabled> Seleccione una provincia </option>
									<option v-for="(prov, index) in provs" :key="index" :value="prov.id"> {{ prov.name }} </option>
								</select>
								<div class="input-error" v-if="errors['prov_id']">{{ errors.prov_id[0] }}</div>
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
							
			</div>		
		</list-component >
		<!-- / Modal -->
	</div>
</template>


<script>
	// Mixins
	import CommonMixins from '../mixins/CommonMixin';
	import ListFeatures from '../mixins/ListMixin';  // In this mixin exist all crud operations, pagination, and listing.
	import Modal from '../components/slot-components/ModalSlotComponent'

	export default {
		mixins: [ CommonMixins, ListFeatures ],
		components: {
			'modal-component': Modal,
		},
		data () {
			return {
				// Section properties
				sectionTexts: { plural: 'Localidades', singular: 'Localidad', withArticle: "las localidades", new: "Nueva localidad",
								 askDelete: "Va a eliminar las localidades seleccionadas", askDeleteItem: "Va a eliminar la localidad: "},
				
				// Model properties
				sectionRoute: 'locs',
				item: { name: '', prov_id: ''},
				listData: [
							{ name: 'name', text: 'Localidad', type: 'text', placeholder: 'Ingrese el nombre de la localidad'},
							{ name: 'prov_id', text: 'Provincia', isRelation: true },
						],
				undeleteableItems: [],

				useProvs: true
			}
		}
	}
</script>
 