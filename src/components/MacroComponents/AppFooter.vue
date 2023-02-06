<script>
import Logo from '../microcomponents/Logo.vue';
import { social, recentPost } from '../../assets/data';
export default {
    name: 'AppFooter',
    components: { Logo },
    data() { return { social, recentPost } },
    props: {
    },
    computed: {
    },
    methods: {
    },
}

</script>

<template>

    <footer>
        <div class="footer-border">
            <div class="container">
                <div class="row row-cols-3 py-5 px-2">

                    <!-- Left Column -->
                    <div class="col text-center">
                        <logo></logo>
                        <p class="mt-5">Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus.
                            Pellentesque
                            consectetur
                            amet purus ultrices mauris.</p>
                        <div id="social" class="mt-4">
                            <ul class="d-flex justify-content-center m-0 p-0">
                                <li v-for="icon in this.social" :key="icon">
                                    <a href="#" class="fa-brands pe-2" :class="icon"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Left Column -->

                    <!-- Central Column -->
                    <div class="col text-center">
                        <h5 class="text-uppercase mb-4">Recent post</h5>
                        <ul id="recent-post" class="m-0 p-0">
                            <li v-for="voice in this.recentPost" :key="voice" class="mb-3">
                                <a href="#"><span class="fa-solid fa-chevron-right me-1"></span>{{ voice }}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- End Central Column -->

                    <!-- Right Column -->
                    <div class="col text-center">
                        <h5 class="text-uppercase mb-4">Contact information</h5>
                        <p class="address mb-4">4746 Tipple Road Michigan 48449</p>
                        <h6 class="mb-1">Mobile: 1.8000.000.0000</h6>
                        <h6 class="m-0">Email: info@your-company.com</h6>
                    </div>
                    <!-- End Right Column -->

                </div>
            </div>
        </div>

        <div class="after-footer text-center py-2">
            <p class="m-0">© Copyright 2012 - 2023 | Avada Theme by
                <a href="#">ThemeFusion</a>
                | All Rights Reserved | Powered by
                <a href="#">Davide Cardelli</a>
            </p>
        </div>

    </footer>


</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';


footer {
    background-color: $black;
    color: $white;

    .footer-border {
        border-bottom: 1px solid $grey;
    }

    #social {
        a {
            color: $red;
        }
    }

    #recent-post {
        a {
            color: $white;
        }
    }

    .address {
        color: $grey;
    }

    .after-footer {
        color: $grey;

        a {
            color: $white;
        }
    }
}
</style>