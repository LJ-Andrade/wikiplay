<template>
    <div v-if="article" class="featured-article"
        :style="{ 'background-image': 'url(images/articles/' + articleImage + ')' }"
        style="background: no-repeat center center; background-size: cover">
        <a href="#" class="overlay">
            <div class="cta">Ver Más</div>
        </a>
        <div class="featured-text">
            <img src="images/web/baseline-grade-24px.svg">
            Destacado
        </div>
        <div class="bottom-text">
            <div class="title">{{ article.title }}</div>
            <div class="extra-info">
                <img class="loc-icon" src="images/vendor/leaflet/dist/marker-icon.png">
                {{ article.loc.name }}.
                {{ article.daysText }}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: [ 'article' ],
        data() {
            return {

            }
        },
        computed: {
            articleImage() {
                if(this.article.images != undefined)
                    return this.article.images[0].name;
                else
                    return 'default.png';
            }
        },
        mounted() {
            // console.log(this.article);
        }
    }   
</script>