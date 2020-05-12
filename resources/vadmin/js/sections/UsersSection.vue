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
			@save="save(item)"
			@deleteItems="deleteItems"
			@setUpdateOrCreate="setUpdateOrCreate"
			@selectAllItems="selectAllItems"
		>
			<template slot="extra-actions">
				HOLA
			</template>

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
						
						
					<!-- Relation data -->
						<template v-else>
							<template v-if="item.roles">	
								<span v-for="(role, index) in item.roles" :key="index" class="badge badge-primary mr-2" > 
									{{ role.name }}
								</span>
							</template>
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
	import CommonMixin from '../mixins/CommonMixin'
	import ListMixin from '../mixins/ListMixin'

	export default {
		mixins: [ CommonMixin, ListMixin ],
		data () {
			return {
				// Section properties
				sectionTexts: { plural: 'Usuarios', singular: 'Usuario', withArticle: "los usuarios", new: "Nuevo Usuario",
								askDelete: "Va a eliminar los usuarios seleccionados", askDeleteItem: "Va a eliminar el usuario " },

				// Model properties
				sectionRoute: 'users',
				item: {  username: '', first_name: '', last_name: '', email: '', password: '', password_confirmation: '' },
				listData: [
							{ name: 'id', text: 'Id', show: false, updateable: false}, 	
							{ name: 'username', text: 'Usuario', type: 'text', placeholder: 'Ingrese el nombre de usuario' },
							{ name: 'email', text: 'E-Mail', type: 'text', placeholder: 'Ingrese el email' },
							{ name: 'first_name', text: 'Nombre', type: 'text', placeholder: 'Ingrese el nombre' },
							{ name: 'last_name', text: 'Apellido', type: 'text', placeholder: 'Ingrese el apellido' },
							{ name: 'password', text: 'Contraseña', type: 'password', placeholder: 'Ingrese una contraseña', show: false },
							{ name: 'password_confirmation', text: 'Confirme Contraseña', type: 'password', placeholder: 'Confirme la contraseña', show: false },
							{ name: 'role', text: 'Rol', updateable: false, isRelation: true },	
						],
				undeleteableItems: [1], // array(), Set here the items id that you don´t want to allow deletion
			}
		}
	}
</script>
