<template>
	<div>
		<!-- Modal -->
		<list-component 
			:item="item"
			:sectionTexts="sectionTexts" 
			:listDataVisible="listDataVisible"
			:listDataUpdateable="listDataUpdateable"
			:selectedItems="selectedItems"
			:useExtraActions="false"
			:customModal="true"
			@save="save(item)"
			@deleteItems="deleteItems"
			@setUpdateOrCreate="setUpdateOrCreate"
			@selectAllItems="selectAllItems"
		>
			<template slot="extra-actions">
				HOLA
			</template>

			<!-- Overrides modal create button -->
			<router-link slot="create-button" to="crear-articulo" class="btn btn-main" >
				<i class="fas fa-plus"></i> Crear un artículo
			</router-link>

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

					<td style="max-width: 50px">
						<img v-if="item.images" :src="item.images[0].name | imageSrcFilter" style="max-width: 100%; width: 50px"  alt="Imagen del articulo">
					</td>
					<td>{{ item.id }}</td>
					<td>{{ item.title }}</td>	
					<td>
						{{ item.address }} <br>
						<template v-if="item.prov">{{ item.prov.name }}</template>
						<template v-if="item.loc">{{ item.loc.name }}</template>
					</td>
					<td>{{ item.phone }} <br> {{ item.hour }}</td>
					<td>De {{ item.age_from }} a {{ item.age_to }}</td>
					<td>{{ item.price }}</td>

					<!-- Status -->
					<td>
						<label class="switch">
							<input class="switch-checkbox" type="checkbox"
							:checked="item.status | getStatusBoolean"
							v-on:click="changeStatus('Article', item.id, item.status, true)">
							<span class="slider round"></span>
						</label>
					</td>
					
					<list-actions>
						<div slot="list-actions" class="list-actions">
							<!-- Edit -->
							<b-dropdown-item>
								<router-link :to="'editar-articulo/'+item.id">
									<img :src="bIcon('pen')" /> Editar
								</router-link>
							</b-dropdown-item>
							<!-- Delete -->
							<b-dropdown-item @click="deleteItems(item.id, sectionTexts.askDeleteItem + '<b> &nbsp ' + item.title + '</b>'), singleDelete()" v-if="!undeleteableItems.includes(item.id)">
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
				sectionTexts: { plural: 'Artículos', singular: 'Artículo', withArticle: "los artículos", new: "Nuevo Artículo",
								askDelete: "Va a eliminar los artículos seleccionados", askDeleteItem: "Va a eliminar el artículo " },

				// Model properties
				sectionRoute: 'articles',
				item: {  username: '', first_name: '', last_name: '', email: '', password: '', password_confirmation: '' },
				listData: [
							{ name: 'image', text: 'Imágen', type: 'text' },
							{ name: 'id', text: 'ID', type: 'text' },
							{ name: 'title', text: 'Título', type: 'text' },
							{ name: 'address', text: 'Dirección', type: 'text' },
							{ name: 'phone', text: 'Teléfono', type: 'text' },
							{ name: 'age', text: 'Edades', type: 'text', },
							{ name: 'price', text: 'Precio', type: 'text', },
							{ name: '', text: '',  },
						],
				undeleteableItems: [],
			}
		}
	}

</script>
