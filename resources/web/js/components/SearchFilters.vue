<template>
	<div class="container-fluid search-filters">
        <div class="container">
            <div class="row inner">
                <form class="form-inline">
                    <b-form-select @change="filterArticles" v-model="selectedItems.day" :options="daysOptions"></b-form-select>
                    <b-form-select @change="filterArticles" v-model="selectedItems.zone" :options="zonesOptions"></b-form-select>
                    <b-form-select @change="filterArticles" v-model="selectedItems.price" :options="pricesOptions" ></b-form-select>
                    <b-form-select @change="filterArticles" v-model="selectedItems.age" :options="agesOptions"></b-form-select>
                    <b-form-select @change="filterArticles" v-model="selectedItems.category" :options="categoriesOptions"></b-form-select>         
                    <button type="button" @click="filterArticles" class="btn btn-submit">Buscar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from "vuex";
    import axios from "axios";
        
    export default {
        name: "SearchFilters",
        data() {
            return {
                selectedItems: {
                    day: null,
                    zone: null,
                    price: null,
                    age: null,
                    category: null,
                },
                daysOptions: [
                    { value: null, text: 'Días' },
                    { value: '1', text: 'Lunes' },
                    { value: '2', text: 'Martes' },
                    { value: '3', text: 'Miércoles' },
                    { value: '4', text: 'Jueves' },
                    { value: '5', text: 'Viernes' },
                    { value: '6', text: 'Sábado' },
                    { value: '7', text: 'Domingo' },
                ],
                zonesOptions: [
                    { value: null, text: 'Zona' },
                    { value: 'zona1', text: 'Zona1' },
                    { value: 'zona2', text: 'Zona2' },
                ],
                agesOptions: [
                    { value: null, text: 'Edades' },
                    { value: '<,5', text: 'Menos de 5 años' },
                    { value: '5,10', text: 'Entre 5 y 10 años' },
                    { value: '>,11', text: 'Más de 10 años' },
                ],
                pricesOptions: [
                    { value: null, text: 'Precio'},
                    { value: 'ASC', text: 'Menor a Mayor'},
                    { value: 'DESC', text: 'Mayor a Menor'},
                ],
                categories: [],
                categoriesOptions: [
                    { value: null, text: 'Categorías' },
                ]
            }
        },

        created() {
            this.getCategories();
        },
        computed: {
            // ...mapState(['selectedItems'])
			...mapGetters(['apiUrl'])
        },
        methods: {
            ...mapActions(['fetchArticles']),
            
            getCategories(){ 
                axios
                    .get('getCategories')
                    .then(res => {
                        // console.log(res.data);
                        this.categoriesOptions = res.data;
                        this.categoriesOptions.newPropery = { value: null, text: 'Categorias'};
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        // 
                    });
            },
            filterArticles() {
                
                this.query = '';

                if(this.selectedItems.day != undefined || this.selectedItems.zone != undefined || this.selectedItems.price != undefined || this.selectedItems.age != undefined || this.selectedItems.category != undefined)
                {
                    this.query = '?';

                    if(this.selectedItems.day != undefined)
                        this.query += 'day=' + this.selectedItems.day + '&';
                    if(this.selectedItems.zone != undefined)
                        this.query += 'zone=' + this.selectedItems.zone + '&';
                    if(this.selectedItems.price != undefined)
                    {
                        this.query += 'orderBy=price&';
                        this.query += 'order=' + this.selectedItems.price + '&';
                    }
                    if(this.selectedItems.age != undefined)
                        this.query += 'age=' + this.selectedItems.age + '&';
                    if(this.selectedItems.category != undefined)
                        this.query += 'category=' + this.selectedItems.category + '&';
                    console.log("filterArticles");
                }
                
                console.log(this.query);
                this.fetchArticles(this.query);

            }
   
        }
    };
</script>

