<script>
export default {
    name: 'FirstSectionCard',
    components: {},
    data() {
        return {}
    },
    props: {
        item: Object
    },
    computed: {
        getImageUrl() {
            const url = new URL(`../../assets/img/${this.item.img}.jpg`, import.meta.url)
            return url.href
        }
    },
    methods: {
    },
}


</script>

<template>
    <div class="col text-start">
        <img :src="getImageUrl" :alt="item.title" class="img-fluid">
        <div class="content-card">
            <i class="fa-solid fa-wave-square mb-2"></i>
            <h5>{{ item.title }}</h5>
            <h6>{{ item.subtitle }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;

.col {
    position: relative;

    img {
        border-radius: 0 0 20% 0;
        filter: brightness(55%);
    }

    .content-card {
        position: absolute;
        bottom: 10%;
        left: 10%;

        i,
        h5 {
            color: $white;
            font-size: 2rem;
            // text-shadow: 1px 1px $black;
        }

        h6 {
            color: $yellow;
            font-size: 1.5rem;
            // text-shadow: 1px 1px $black;
        }
    }
}
</style>