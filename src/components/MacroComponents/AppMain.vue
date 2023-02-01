<script>
import FirstSectionCard from '../MicroComponents/FirstSectionCard.vue';
import { challengeCard } from '../../assets/data';
export default {
    name: 'AppMain',
    components: { FirstSectionCard },
    data() { return { challengeCard } },
    props: {
    },
    computed: {
    },
    methods: {
    },
}

</script>

<template>
    <main>

        <!-- First Section -->
        <section id="first-section" class="text-center">
            <div class="container">
                <div class="row row-cols-3 px-5 pb-5">
                    <first-section-card v-for="card in this.challengeCard" :key="card.id"
                        :item="card"></first-section-card>
                </div>
                <div class="review px-5">
                    <h3 class="pb-3">“How you respond to the challenge in the second half will determine what you become
                        after the
                        game,
                        whether you are a winner or a loser.”</h3>
                    <i class="fa-solid fa-wave-square mb-2"></i>
                    <div class="customer-reviewer d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/avatar-1-2x.jpg" alt="Brad Johnson">
                        <p class="name m-0 ps-3">Brad Johnson</p>
                        <p class="city m-0 ps-3">Las Vegas</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End First Section -->



    </main>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;

#first-section {
    background: linear-gradient(130deg, $blue, $red);
    padding-top: 7rem;
    padding-bottom: 7rem;

    .row {
        position: relative
    }

    h3 {
        color: $white;
        font-size: 3.2rem;
    }

    i {
        color: $yellow;
        font-size: 3rem;
    }

    .customer-reviewer {
        img {
            border-radius: 50%;
            height: 4rem;
        }

        .name {
            color: $white;
            font-weight: 500;
            font-size: 1.2rem;
        }

        .city {
            color: $grey;
            font-weight: 500;
            font-size: 1.2rem;

        }
    }
}
</style>