<template>
    <div>
        <div v-if="article" class="card-article">
            <a href="#" class="overlay">
                <div class="cta">Ver Más</div>
            </a>

            <div class="card-article-header" 
                :style="{ 'background-image': 'url(images/articles/' + articleImage + ')' }"
                style="background: no-repeat center center; background-size: cover">
                <div class="card-article-category" v-if="article.category">
                    {{ article.category.name }}
                </div>
            </div>
            
            <div class="card-article-content">
                <div class="title">{{ article.title }}</div>
                <div class="extra-info">
                    <img class="loc-icon" src="images/vendor/leaflet/dist/marker-icon.png">
                    {{ article.loc.name }}.
                    {{ article.daysText }}
                </div>
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
        }
    }   
</script>