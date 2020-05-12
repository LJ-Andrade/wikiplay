import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);


const state = {
	query: '',
	articles: [],
	featuredArticles: [],
	newestArticle: [],
	markers: [],
}

const actions = {
	async fetchArticles({ commit }, query) {
		
		let route = 'getArticles';

		if(query == undefined)
			query = ''
		else
			route += query;

		const response = await axios.get(route);

		try {
			commit('setArticles', response.data);
		} catch (error) {
			console.log('Error getting articles');
			console.log(error);
		}
		finally {
			
		}

	},
	async fetchfeaturedArticles({commit}) {
		// console.log("fetching specialArticles");
		const response = await axios.get('getFeaturedArticles');

		try {
			commit('setFeaturedArticles', response.data);
		} catch (error) {
			console.log('Error getting articles');
			console.log(error);
		}
		finally {
			
		}
	}
}


const getters = {
	allArticles: (state) => state.articles,
	featuredArticles: (state) => state.featuredArticles,
	selectedItems: (state) => state.selectedItems,
	apiUrl: (state) => state.apiUrl,
	assetSrc: (state) => state.assetSrc
}

const mutations = {
	setArticles: (state, articles) => (state.articles = articles),
	setFeaturedArticles: (state, featuredArticles) => (state.featuredArticles = featuredArticles),
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	modules: {}
});
