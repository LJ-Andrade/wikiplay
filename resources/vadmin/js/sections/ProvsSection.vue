<template>
	<div>
		<!-- Modal -->
		<list-component 
			:item="item"
			:sectionTexts="sectionTexts" 
			:listDataVisible="listDataVisible"
			:listDataUpdateable="listDataUpdateable"
			:selectedItems="selectedItems"
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

			<div slot="custom-modal"></div>		
		</list-component >
		<!-- / Modal -->
	</div>
</template>

<script>
	// Mixins
	import CommonMixin from '../mixins/CommonMixin'
	import ListMixin from '../mixins/ListMixin'

	export default {
		mixins: [ CommonMixin, ListMixin ],
		
		data () {
			return {
				sectionTexts: { plural: 'Provincias', singular: 'Provincia', withArticle: "las provincias", new: "Crear Provincia",
								askDelete: "Va a eliminar las provincias seleccionadas", askDeleteItem: "Va a eliminar la provincia " },
			
				// Model properties
                sectionRoute: 'provs',
                item: { name: '' },
				listData: [
                            { name: 'name', text: 'Nombre', type: 'text', placeholder: 'Ingrese un nombre' }
						],
				undeleteableItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // array(), Set here the items that you dont want to allow deletion
			}
		}
	}
</script>
