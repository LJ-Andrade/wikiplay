<template>
	<div>
  		<!-- <i class="fas fa-info" data-toggle="modal" data-target="#InfoModal"></i> -->
		<div class="modal fade" id="InfoModal" tabindex="-1" role="dialog" aria-labelledby="InfoModal" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body info-modal-component">
						<h1 v-html="fullTitle"></h1>
						<hr v-if="fullTitle">
						<p v-html="content"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	

	export default {
		props: ['title', 'content'],
		data() {
			return {
				overlay: false
			}
		},
		mounted() {
		},
		computed: {
			fullTitle (){
				return "<i class='fas fa-info-circle info-icon-title'></i> " + this.title;
			}
		},
		methods: {
			openModal() {
				$('#InfoModal').modal('show');
			}
		}
	}
</script>