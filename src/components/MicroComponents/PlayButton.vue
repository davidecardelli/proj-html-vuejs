<script>
export default {
    name: 'PlayButton',
    components: {},
    data() {
        return {}
    },
    props: {
        size: String,
        position: String,
    },
    computed: {
    },
    methods: {
    },
    emits: ['play-button-click'],
}


</script>

<template>
    <a href="#">
        <i class="fa-solid fa-circle-play primary" :class="[size, position]"
            @click.prevent="$emit('play-button-click')"></i>
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

    &.absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background-color: $red;
    }

    &.medium {
        font-size: 4rem;
    }

    &.small {
        font-size: 2rem;
    }
}
</style>