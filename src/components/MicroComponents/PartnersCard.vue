<script>
export default {
    name: 'PartnersCard',
    components: {},
    data() {
        return {}
    },
    props: {
        item: Object
    },
    computed: {
        getImageUrl() {
            const url = new URL(`../../assets/img/${this.item.img}.png`, import.meta.url)
            return url.href
        }
    },
    methods: {
    },
}


</script>

<template>
    <div class="col d-flex flex-column align-items-center text-center px-3">
        <img :src="getImageUrl" :alt="item.link" class="img-fluid mb-3">
        <i class="fa-solid fa-wave-square mb-3"></i>
        <p class="mb-3">{{ item.text }}</p>
        <a href="#">
            <span class="me-1">{{ item.link }}</span>
            <i class="fa-solid fa-angle-right"></i>
        </a>
    </div>

</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

.col {

    i {
        color: $blue;
    }

    p {
        color: $grey;
    }

    a,
    .fa-angle-right {
        color: $black;
    }
}
</style>