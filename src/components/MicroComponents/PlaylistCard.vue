<script>
import PlayButton from './PlayButton.vue'
export default {
    name: 'PlaylistCard',
    components: { PlayButton },
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
        <div class="position-relative">
            <img :src="getImageUrl" :alt="item.link" class="img-fluid mb-3">
            <play-button size="small" position="absolute"></play-button>
        </div>
        <div class="article-content">
            <a href="#">
                <h6 class="mb-1">{{ item.title }}</h6>
            </a>
            <p class="date m-0">{{ item.subtitle }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

.col {

    img {
        border-radius: 0 0 20% 0;
    }

    .article-content {
        margin-left: 1rem;
        text-align: center;



        a {
            color: $black;
        }

        p {
            color: $blue;
            font-size: 0.8rem;
            font-weight: 500;
        }
    }
}
</style>