import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// On component
// import { mapMutations, mapActions, mapState, mapGetters } from "vuex";

// SIDEBAR
// -----------------------------------------------

function getSidebarState() {
	
	if(localStorage.sidebarState != null){
		if(localStorage.sidebarState == '0' ) {
			return false
		}
	}

	return true

};

function getResultsPerPage() {

	if(localStorage.resultsPerPage) {
		return localStorage.resultsPerPage;
	}

	return 10;

}



// CONSTANTS
// ------------------------------------------------

const state = {
	sidebarState: getSidebarState(),
	modelData: [],
	paginationData: [],
	query: {
		orderBy: 'id', 
		order: 'asc',
		searchTerm: ''
	},
	resultsPerPage: getResultsPerPage(),
	activeSearch: false,
	loader: false,
	skeletonList: false,
	sectionRoute: '',
	listProps: {
		updateMode: false,
		errors: [],
		batchDeleteMode: false,
		allChecked: false,
		noResults: false
	},
	authUser: {
		username: '', first_name: '', last_name: '', email: '', created_at: '', status: ''
	}
};

const actions = {

	getAuthUser({commit}) {
			axios.get('/vadmin/getAuthUser')
				.then((res) => {
					commit('setAuthUserData', res.data);
				})
				.catch((error) => {
					console.error('Error on getAuthUser()');
					console.error(error);
				}).finally(() => {

				});
	},
	// Sidebar
	// ----------------------------------
	sidebarToggle({ commit }, state) {

		if(state == false)
			localStorage.sidebarState = 1;
		else
			localStorage.sidebarState = 0;

		commit("setSidebar", !state);
	},

	// Get Model Data
	async fetchData({ commit }, rules ) {

		state.loader = true;
		
		if(state.modelData == 0)
			state.skeletonList = true;
		
		let page = 1

		if(rules)
		{
			if(rules.resultsPerPage != undefined)
				this.setResultsPerPage(resultsPerPage);
			
			if(rules.page != undefined)
				page = rules.page;
		}


		let url = '/vadmin/' + state.sectionRoute + '?page=' + page + '&orderBy=' + state.query.orderBy + '&order=' + state.query.order + "&resultsPerPage=" + state.resultsPerPage;

		// console.log(url);
		if(state.query.searchTerm != '' && state.query.searchTerm != undefined)
		{
			url += '&search=' + state.query.searchTerm;
		}
		// console.log(url);
		const response = await axios.get(url);
		// console.log(response.data);
		try {

			commit('setData', response.data.items.data);		
			commit('setPagination', response.data.pagination);

		} catch (error) {
			// commit('setListProperty', { property: errors, value: response.data.message });
			console.log('Error getting data in fetchData()');
			console.log(error);
			console.log("Route: " + state.sectionRoute);
			console.log("Page: " + page);
			console.log("Url: " + url);

		}
		finally {
			state.loader = false;
			state.skeletonList = false;
		}
	},
};


// GETTERS and SETTERS
// --------------------------------------------------

const getters = {
	sidebarState: state => state.sidebarState,
	searchTerm: state => state.searchTerm,
	items: state => state.modelData,
	pagination: state => state.paginationData,
	loader: state => state.loader,
	skeletonList: state => state.skeletonList,
	route: state => state.sectionRoute,
	updateMode: state => state.listProps.updateMode,
	errors: state => state.listProps.errors,
	noResults: state => state.listProps.noResults,
	allChecked: state => state.listProps.allChecked,
	batchDeleteMode: state => state.listProps.batchDeleteMode,
	resultsPerPage: state => state.resultsPerPage,
	authUser: state => state.authUser
};


// No se llaman las mutaciones directamente. Se llama al commit.
const mutations = {
	setData: (state, modelData) => (state.modelData = modelData),
	setPagination: (state, paginationData) => (state.paginationData = paginationData),
	setSidebar: (state, sidebarState) => (state.sidebarState = sidebarState),
	setOrder(state, query) {
		state.query.orderBy = query;

		if(state.query.order == 'asc')
			state.query.order = 'desc';
		else if(state.query.order == 'desc')
			state.query.order = 'asc';
	},
	
	setSearchTerm(state, searchQuery) {
		state.query.searchTerm = searchQuery;
	},

	setResultsPerPage(state, resultsPerPage) {
		if(localStorage.resultsPerPage) {
			localStorage.resultsPerPage = resultsPerPage 
			state.resultsPerPage = localStorage.resultsPerPage;
	 	} else {
			return state.resultsPerPage;
		}

	},
	
	setAuthUserData(state, data) {
		// console.log(data);
		state.authUser = data;
	},

	setRoute(state, route){
		state.sectionRoute = route;
	}, 

	toggleLoader(state, action)
	{
		state.loader = action;
	},

	setListProp(state, data) {
		state.listProps[data.property] = data.value;
	},



};

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	modules: {}
});
