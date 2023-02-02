<script>
import { headerMenu } from '../../assets/data';
import Logo from '../MicroComponents/Logo.vue';
import GeneralButton from '../MicroComponents/GeneralButton.vue';
import PlayButton from '../MicroComponents/PlayButton.vue';
export default {
    name: 'AppHeader',
    components: { Logo, GeneralButton, PlayButton },
    data() {
        return { headerMenu }
    },
    props: {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<template>

    <header>
        <div class="container d-flex justify-content-between align-items-center py-3">
            <logo></logo>
            <nav>
                <ul class="d-flex align-items-center m-0">
                    <li v-for="voice in this.headerMenu" :key="voice.id">
                        <a :href="voice.url" class="ms-3" :class="{ 'selected': voice.current }">{{ voice.text }}</a>
                        <span v-if="voice.isNew" class="is-new ms-2">new</span>
                    </li>
                    <li class="ms-3">
                        <general-button text="Schedule a workout"></general-button>
                    </li>
                    <li class="ms-4">
                        <a href="#">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li class="ms-4">
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="jumbotron">
            <div class="container">
                <div class=" row row-cols-2 d-flex align-items-center justify-content-center">
                    <div class="col-8 py-5 flex-grow-1">
                        <h2 class="mb-4">Certified fitness professional</h2>
                        <h1 class="mb-4">Take control of your health</h1>
                        <i class="fa-solid fa-wave-square mb-4"></i>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
                        <div class="d-flex align-items-center gap-2">
                            <general-button text="Visit my YouTube channel" size="big"
                                before="fa-brands fa-youtube"></general-button>
                            <general-button text="Buy Avada today" type="secondary" size="big"
                                after="fa-solid fa-arrow-right"></general-button>
                        </div>
                    </div>
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <play-button></play-button>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>
        
<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

header {
    background-color: $black;

    .is-new {
        font-size: 0.7rem;
        padding: 2px;
        margin: 0;
        border-radius: 20%;
        background-color: $yellow;
    }

    .jumbotron {
        background-image: linear-gradient(90deg, $black 45%, rgba(6, 6, 7, 0) 90%), url(../../assets/img/slider82x-scaled.jpg);
        background-size: cover;
        background-position: top center;

        .row {
            padding-top: 7rem;
            padding-bottom: 7rem;

            h1 {
                color: $white;
                font-size: 4rem;
            }

            h2 {
                color: $red;
                font-size: 1.5rem;
            }

            i {
                color: $yellow;
                font-size: 3rem;
            }

            p {
                color: $grey;
                font-size: 1.3rem;
                font-weight: 400;
            }
        }


    }
}
</style>