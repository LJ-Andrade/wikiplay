<template>
    <div>
        <div class="skeleton">
            <div class="rows pulse" v-for="(row, index) in rows" :key="index">
                <div class="items left-items">
                    <span class="item"></span>
                </div>
                <div class="items right-items">
                    <span class="item"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['rows']
    }
</script>

