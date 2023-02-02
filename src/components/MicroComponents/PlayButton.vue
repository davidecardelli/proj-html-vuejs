<script>
export default {
    name: 'PlayButton',
    components: {},
    data() {
        return {}
    },
    props: {
        size: String,
    },
    computed: {
    },
    methods: {
    },
    emits: ['button-click'],
}


</script>

<template>
    <a href="#">
        <i class="fa-solid fa-circle-play primary" :class="size"></i>
    </a>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;

.fa-circle-play {
    &.primary {
        background-color: $blue;
        color: $white;
        border-radius: 50%;
        font-size: 6rem;
        transition: all 0.5s;
    }

    &:hover {
        background-color: $red;
    }

    &.medium {
        font-size: 4rem;
    }

    &.smaill {
        font-size: 2rem;
    }
}
</style>