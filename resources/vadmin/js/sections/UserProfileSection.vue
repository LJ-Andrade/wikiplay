<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<h1>Perfil de <b>{{ authUser.username }} </b></h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
                <div class="content-container">
                    <ul>
                       	<li><b>Nombre y Apellido:</b> {{ authUser.first_name + ' ' + authUser.last_name }}</li>
						<li><b>Nombre de usuario:</b> {{ authUser.username }}</li>
						<li><b>E-Mail:</b> {{ authUser.email }}</li>
						<!-- <li><b>Miembro desde: </b> {{ authUser.created_at }}</li> -->
                    </ul>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    // import CommonMixin from '../core/mixins/CommonMixin.js'

	export default {
        // mixins: [ CommonMixins ],
		data() {
			return {
		
			}	
        },
        computed: {
            ...mapGetters(["authUser"])
        },
		methods: {
		
		}
	}
</script>
