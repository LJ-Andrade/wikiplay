<template>
	<div>
		<b-modal :id="id" :Class="cssClass" hide-footer>
			<template v-slot:modal-title>
				<slot name="modal-title"></slot>
			</template>
			<div class="d-block">
				<slot name="modal-content"></slot>
			</div>
		</b-modal>
	</div>
</template>

<script>
	export default {
		props: ['cssClass', 'id'],
		components:{
		},
		data() {
			return {
				modalCustomClass: this.cssClass
			}
		},
		created() {
			if(this.id == undefined) {
				console.log("Modal ID is not defined on component. Using default modal id: 'Modal'");
				this.id = "Modal";
			}
		},
		mounted() {
			if(this.cssClass == undefined)
				this.modalCustomClass = '';
		}
	}
</script>