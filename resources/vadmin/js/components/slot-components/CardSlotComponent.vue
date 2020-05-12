<template>
    <div class="card custom-card">
        <div class="card-header" :class="headerClass">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['headerClass'],
    }
</script>