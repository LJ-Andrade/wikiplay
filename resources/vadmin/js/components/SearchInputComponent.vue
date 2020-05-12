<template>
	<div class="input-group search-box-right custom-searchbox"> 
		 <b-input-group>
			<template v-slot:prepend>
				<!-- <b-input-group-text >X</b-input-group-text> -->
				<button v-if="activeSearch && searching" v-on:click="resetSearch"  class="btn btn-outline-secondary" type="button">X</button>
			</template>
			<b-form-input @keyup.enter="commitSearch" v-model="searchTerm"></b-form-input>

			<template v-slot:append>
				<button @click="commitSearch" class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
			</template>
		</b-input-group>
	</div>
</template>

<script>

	import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

	export default {
		data () { 
			return {
				searchTerm: '',
				searching: false
			}
		},
		methods: {
			...mapActions(['fetchData']),
			...mapMutations(['setSearchTerm']),

			resetSearch() {
				this.searchTerm = '';
				this.setSearchTerm();
				this.fetchData({ page: '1' });
				this.searching = false;
			},

			commitSearch() {
				this.setSearchTerm(this.searchTerm);
				this.fetchData({ page: '1' })
			}

		},
		computed: {
			...mapGetters(['pagination']),
			...mapGetters(['items']),
			...mapState(['query']),
			
			activeSearch: function() {

				if(this.query.searchTerm) {
					this.searching = true;
					return true;
				}
				
				this.searching = false;
				return false;

			}
		}
	}

</script>