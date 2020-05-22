<template>
	<div class="row">
        <div class="col-8">
            <!-- :style="featuredArticleImageSrc(featuredArticle)" -->
            <div class="card-with-backgound">
                <!-- baseline-grade-24px -->
                <!-- {{ vuelog(featuredArticle.image) }} -->
                {{ allArticles[0].id }}
            </div>
        </div>
        <div class="col-4">
            {{ newestArticle }}
        </div>				
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex";

    import CommonMixins from '../mixins/CommonMixin';
        
    export default {
        name: "SpecialArticles",
        mixins: [ CommonMixins ],
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['specialArticles']),
            ...mapGetters(['allArticles']),
            featuredArticle() {
                // FIX Seleccionar un item random del array
                if(this.specialArticles.featuredArticles != undefined)
                    return this.specialArticles.featuredArticles[0];
            },

            newestArticle() {
                return this.specialArticles.newestArticle;
            },

 
        },
        created(){
            this.fetchSpecialArticles();
        },
        mounted() {
            
            console.log(this.allArticles);
        },
        filters: {
            backgroundImage(image) {
                
                // console.log(image);

                // background-image: url(http://i54.tinypic.com/4zuxif.jpg)
            }
        },
        methods: {
            ...mapActions(['fetchSpecialArticles']),

            articleImage(image) {
                console.log(image);
            }
            // featuredArticleImageSrc(image) {
            //     console.log("IMAGE");
            //     console.log(image);
            // }
        }

    }
</script>