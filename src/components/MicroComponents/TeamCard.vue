<script>
export default {
    name: 'TeamCard',
    components: {},
    data() {
        return {}
    },
    props: {
        item: Object
    },
    computed: {
    },
    methods: {
    },
}


</script>

<template>
    <div class="col d-flex flex-column align-items-center text-center px-5">
        <div class="border-box">
            <i :class="item.icon" class="mb-3"></i>
            <h5 class="mb-3">{{ item.title }}</h5>
            <h6 class="mb-5">{{ item.subtitle }}</h6>
            <p class="mb-3">{{ item.text }}</p>
            <a href="#">
                <span class="me-1">{{ item.link }}</span>
                <i class="fa-solid fa-angle-right"></i>
            </a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

.col {

    .border-box {
        padding: 4rem 2rem;
        border: 2px solid $blue;
        border-radius: 5px;

        i {
            color: $white;
            font-size: 5rem;
        }

        h5 {
            color: $white;
        }

        h6 {
            color: $yellow;
        }

        p {
            color: $grey;
        }

        a,
        .fa-angle-right {
            color: $white;
            font-size: 0.7rem;
        }
    }
}
</style>