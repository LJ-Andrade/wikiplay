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
						<!-- <label class="custom-checkbox" v-if="!undeleteableItems.includes(item.id)">
							<input type="checkbox" :checked="allChecked" v-model="selectedItems" :id="item.id" :value="item.id">
							<span class="checkmark"></span>
						</label> -->
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
							<b-dropdown-item @click="deleteItems(item.id, sectionTexts.askDeleteItem + '<b> &nbsp ' + item.username + '</b>'), singleDelete()" v-if="!undeleteableItems.includes(item.id)">
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
	import CommonMixins from '../mixins/CommonMixin';
	import ListFeatures from '../mixins/ListMixin';  // In this mixin exist all crud operations, pagination, and listing.

	export default {
		mixins: [ CommonMixins, ListFeatures ],
		data () {
			return {
				// Section properties
				sectionTexts: { plural: 'Categorías', singular: 'Categoría', withArticle: "las categorías", new: "Nueva categoría",
								 askDelete: "Va a eliminar las categorías seleccionadas", askDeleteItem: "Va a eliminar la categoría: "},
				
				// Model properties
				sectionRoute: 'article_categories',
				item: { name: ''},
				listData: [
							{ name: 'name', text: 'Nombre', type: 'text', placeholder: 'Ingrese un nombre' }
						],
				undeleteableItems: [ ], // array(), Set here the items that you dont want to allow deletion
			}
		}
	}
</script>