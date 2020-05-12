export default {
	data() {
		return {
		}
	},
	filters: {
		// imageSrcFilter(image) {
		// 	return '/images/articles/' + image;
		// },
		imageSrcFilter(image) {
			console.log(image);
			return '/images/articles/' + image;
		},	
	},
	methods: {
		// Logs
		// --------------------------

		vuelog(e) {
			console.log(e);
		},

		
	}
}