<template>
	<div class="row">
        <div class="col-8">
            {{ featuredArticle }}
        </div>
        <div class="col-4">
            {{ newestArticle }}
        </div>				
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex";
        
    export default {
        name: "FeaturedArticles",
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['featuredArticles']),
            ...mapGetters(['allArticles']),

            featuredArticle() {
                return this.featuredArticles[0];
            },
            newestArticle() {
                let articles = this.allArticles;
                // let newest = articles.reduce((newest, item) => item.created_at > newest.created_at  ? item : newest);
                const newest = articles.slice().sort((b, a) => a.date - b.date )
                return newest[newest.length - 1];
            }
        },
        created(){
        },
        mounted() {
            this.fetchfeaturedArticles();
            console.log(this.featuredArticles);
            // console.log(this.fetchSpecialArticles);
        },
        methods: {
            ...mapMutations(['getNewestArticle']),
            ...mapActions(['fetchfeaturedArticles'])
        }

    }
</script>