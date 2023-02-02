<script>
export default {
    name: 'BlogCard',
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
    <div class="col">
        <img :src="getImageUrl" :alt="item.title" class="img-fluid mb-3">
        <div class="article-content">
            <a href="#">
                <h6 class="mb-1">{{ item.title }}</h6>
            </a>
            <p class="date m-0">{{ item.date }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

.col {
    .article-content {
        margin-left: 1rem;

        a {
            color: $black;
        }

        p {
            color: $grey;
            font-size: 0.7rem;
        }
    }
}
</style>