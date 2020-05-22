<template>
    <div class="container-fluid mt-5">
        <div class="row mb-2">
            <div class="col-2"></div>
            <div class="col-md-3">
                Recomendaciones
            </div>
            <div class="col-md-5 ctesan">
                <img src="images/web/ctesad/an8.jpg" alt="">
            </div>
            <div class="col-2"></div>
        </div>

        <div class="row equal">
            <div class="col-2"></div>
            <div class="col-md-3 ctesan">
                <img src="images/web/ctesad/an9.jpg" alt="">
            </div>
            <div class="col-md-5">
                <div class="row newsletter-item">
                    <div class="col1 col-3">
                        <img src="images/web/carta.png" alt="">
                    </div>
                    <div class="col2 col-9">
                        <h5>NEWSLETTER</h5>
                        <p>¿Te gustaría estar al tanto de las propuestas infantiles de la ciudad? ¡Dejanos tu mail y te las enviaremos!</p>

                        <b-form inline class="form">
                            <label class="sr-only" for="inline-form-input-name">Name</label>
                            <b-input
                            id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Tu Email"
                            ></b-input>

                            <b-button variant="primary" class="btn btn-submit">Save</b-button>
                        </b-form>

                        <p>¿Realizás alguna actividad para chicos y te gustaría difundirla en esta página? Envianos la info a mail@web.com.ar</p>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
        },
        mounted() {
            // console.log(this.article);
        }
    }   
</script>