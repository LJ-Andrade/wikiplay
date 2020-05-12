<template>
    <div>
        <label class="custom-checkbox" v-if="!undeleteableItems.includes(item.id)">
            <input type="checkbox" :checked="allChecked" v-model="itemsToDeletion" :id="item.id" :value="item.id">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script>
    export default {
        props: ['undeleteableItems', 'allChecked', 'itemsToDeletion', 'item']
        
    }
</script>