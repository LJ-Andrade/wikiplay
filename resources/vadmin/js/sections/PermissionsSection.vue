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
				// Section properties
				sectionTexts: { plural: 'Permisos', singular: 'Permiso', withArticle: "los permisos", new: "Crear Permiso",
								askDelete: "Va a eliminar los permisos seleccionados", askDeleteItem: "Va a eliminar el permiso " },
			
				// Model properties
                sectionRoute: 'permissions',
                item: { name: '', slug: '', description: '' },
				listData: [
                            { name: 'name', text: 'Nombre', type: 'text', placeholder: 'Ingrese un nombre' },
							{ name: 'slug', text: 'Slug', type: 'text', placeholder: 'Ingrese el slug' },
							{ name: 'description', text: 'Descripción', placeholder: 'Ingrese la descripción'}
						],
				undeleteableItems: [], // array(), Set here the items that you dont want to allow deletion
			}
		}
	}
</script>

