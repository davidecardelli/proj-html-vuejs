<script>
export default {
    name: 'GeneralButton',
    components: {},
    data() {
        return {}
    },
    props: {
        text: String,
        type: String,
        size: String,
        before: String,
        after: String
    },
    computed: {
    },
    methods: {
    },
    emits: ['button-click'],
}


</script>

<template>
    <a href="#" class="btn btn-general" :class="[type, size]" @click="$emit('button-click')">
        <i v-if="before" :class="before"></i>
        {{ text }}
        <i v-if="after" :class="after"></i>
    </a>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;

.btn.btn-general {
    background-color: $blue;
    color: $white;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 9px 24px;
    border-radius: 30px;
    transition: all 0.5s;

    &:hover {
        background-color: $red;
    }

    &.big {
        font-size: 1rem;
        padding: 12px 30px;
    }

    &.secondary {
        background-color: transparent;
        color: $grey;
        border: 1px solid $grey;
    }

    &.secondary:hover {
        background-color: $white;
        color: $black;
        border: 1px solid $black;
    }

    &.youtube {
        background-color: #FF0000;
        color: white;
    }

    &.youtube:hover {
        background-color: $red;
    }

    &.newsletter {
        padding: 9px 65px;
    }
}
</style>