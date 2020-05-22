import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);


const state = {
	query: '',
	articles: [],
	specialArticles: [],
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

	
	fetchSpecialArticles({commit}) {
		axios.get('getSpecialArticles')
			.then((res) => {
				commit('setSpecialArticles', res.data);
				// console.log(res.data);
			})
			.catch((error) => {
				console.error('Error on getSpecialArticles()');
				console.error(error);
			}).finally(() => {

			});
	},


}


const getters = {
	allArticles: (state) => state.articles,
	specialArticles: (state) => state.specialArticles,
	selectedItems: (state) => state.selectedItems,
	apiUrl: (state) => state.apiUrl,
	assetSrc: (state) => state.assetSrc
}

const mutations = {
	setArticles: (state, articles) => (state.articles = articles),
	setSpecialArticles: (state, specialArticles) => (state.specialArticles = specialArticles),
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	modules: {}
});
