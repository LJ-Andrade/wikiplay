<template>
		<div>
			<div class="table-responsive custom-table">
				<table class="table">
					<thead>
						<slot name="list-titles"></slot>
					</thead>
					<tbody>
						<slot name="list-no-results"></slot>
						<slot name="list-data"></slot>
					</tbody>
				</table>
			</div>
		</div>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
			}
		}
	}
</script>