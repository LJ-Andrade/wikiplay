<template>
    <td class="align-middle actions-cell">
        <b-dropdown class="simple-dropdown" variant="link">  
            <template slot="button-content">
                <span><img :src="bIcon('list')"></span>
            </template>
            <slot name="list-actions"></slot>
        </b-dropdown>
    </td>
</template>

<script>
    import CommonMixin from '../mixins/CommonMixin'

    export default {
        mixins: [ CommonMixin ],

    }
</script>