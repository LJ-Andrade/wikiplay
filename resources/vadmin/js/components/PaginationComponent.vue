<template>
	<div>
		<ul class="pagination">
			<li v-bind:class="{'page-item':true, 'disabled':(pagination.current_page == 1)}">
				<a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)"> Atras </a>
			</li>
			<li v-for="(page, index) in pagesNumber" :key="index" v-bind:class="{'page-item':true, 'active':(page === isActive)}">
				<a class="page-link" href="#" @click.prevent="changePage(page)"> {{ page }} </a>
			</li>
			<li v-bind:class="{'page-item':true, 'disabled':(pagination.current_page == pagination.last_page)}">
				<a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)"> Adelante </a>
			</li>
			<li>
				<b-form-select v-model="results" 
					:options="resultsPerPageOptions" 
					v-on:change="setResultsPerPage(results), changePage(pagination.current_page)" class="ml-1">
				</b-form-select>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from "vuex";

	export default {
		data() {
			return {
				results: null,
				resultsPerPageOptions: [
					{ value: null, text: 'Resultados' },
					{ value: '5', text: '5' },
					{ value: '10', text: '10' },
					{ value: '20', text: '20' },
				]
			}
		},
		mounted() {
			if(this.resultsPerPage != 0 || this.resultsPerPage != undefined)
				this.results = this.resultsPerPage;
		},
		methods: {
			...mapActions(['fetchData']),
			...mapMutations(['setResultsPerPage']),

			changePage(page) {
				this.fetchData({ page: page });
			},

			getResults() {

			}
		},
		computed: {
			...mapGetters(['pagination']), 
			...mapGetters(['resultsPerPage']), 

			isActive: function() {
				return this.pagination.current_page;
			},

			pagesNumber: function() {
				if(!this.pagination.to) return [];
		
				let offset = 2;
		
				let from = this.pagination.current_page - offset;
				if (from < 1) from = 1;
		
				let to = from + (offset * 2);
				if (to >= this.pagination.last_page) to = this.pagination.last_page;
				
				let pagesArray = [];
		
				while (from <= to) {
					pagesArray.push(from);
					from++;
				}

				return pagesArray;
			},
		},
		
	}
</script>