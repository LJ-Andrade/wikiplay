<template>
	<div class="card custom-list p-0">
		<div class="card-header">
			<slot name="list-header"></slot>
		</div>
		<div class="card-body">
			<simplebar class="table-responsive custom-table">
				<table class="table">
					<thead>
						<tr slot="list-titles">
							<th class="checkbox-col checkbox-title">
								<slot name="checkbox-main"></slot>
							</th>
							<slot name="list-titles"></slot>
							<th class="actions-cell"></th>
						</tr>
					</thead>
					<tbody>
						<slot name="list-data"></slot>
					</tbody>
				</table>
				<slot name="skeleton"></slot>
				<slot name="list-no-results"></slot>
			</simplebar>
		</div>
		<div class="card-footer">
			<slot name="card-footer"></slot>
		</div>
	</div>
</template>

<script>

	import CommonMixins from "../mixins/CommonMixin";
	import simplebar from 'simplebar-vue';
	
	export default {
		components: {
			simplebar		
		},
	}
	
</script>