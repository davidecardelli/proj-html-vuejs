<script>
import FirstSectionCard from '../MicroComponents/FirstSectionCard.vue';
import PartnersCard from '../MicroComponents/PartnersCard.vue';
import BlogCard from '../MicroComponents/BlogCard.vue';
import TeamCard from '../MicroComponents/TeamCard.vue';
import { challengeCard, partnersCard, articlesBlog, teamCard } from '../../assets/data';
export default {
    name: 'AppMain',
    components: { FirstSectionCard, PartnersCard, BlogCard, TeamCard },
    data() { return { challengeCard, partnersCard, articlesBlog, teamCard } },
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
        <section id="first-section">
            <div class="container text-center">
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

        <!-- Team Section -->
        <section id="team">
            <div class="container">
                <div class="row row-cols-3">
                    <team-card v-for="activities in this.teamCard" :key="activities.id" :item="activities"></team-card>
                </div>
            </div>
        </section>
        <!-- Blog section -->
        <section id="blog">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="m-0">Last articles</h6>
                    <a href="#">
                        <span>Read all article</span>
                        <i class="fa-solid fa-angle-right ms-1"></i>
                    </a>
                </div>
                <div class="row row-cols-3">
                    <blog-card v-for="article in articlesBlog" :key="article.id" :item="article"></blog-card>
                </div>
            </div>
        </section>

        <!-- Buy section -->
        <section id="buy">
            <div class="jumbotron">
                <div class="container">
                    <div class="content-jumbotron text-center">
                        <h2 class="mb-3">“I’ve failed over and over again in my life. And that is why I succeed.”</h2>
                        <i class="fa-solid fa-wave-square mb-4"></i>
                        <p> Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed
                            massa
                            in
                            ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                        </p>
                        <p>BOTTONE</p>
                    </div>
                </div>
            </div>

        </section>
        <!-- End Buy section -->

        <!-- Sponsor section -->
        <section id="sponsor">
            <div class="container">
                <div class="row row-cols-4">
                    <partners-card v-for="partner in this.partnersCard" :key="partner.id"
                        :item="partner"></partners-card>
                </div>
            </div>
        </section>
        <!-- End Sponsor Section -->

        <!-- Workout of the day section -->
        <section id="workout-of-the-day">
            <div class="jumbotron">
                <div class="content-jumbotron text-center">
                    <p>PLAY</p>
                    <h2 class="mb-4">Crossfit workout of the day</h2>
                    <h3 class="mb-4">November 15th, 2019</h3>
                    <a href="#">
                        <span>View all videos</span>
                        <i class="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                </div>
            </div>

        </section>
        <!-- End Workout of the day section -->


    </main>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

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

#team {
    background-color: $black;
    padding-top: 7rem;
    padding-bottom: 7rem;
}

#blog {
    padding-top: 7rem;
    padding-bottom: 7rem;

    a {
        color: $black;
        font-size: 0.7rem;

        i {
            font-size: 0.7rem;
        }
    }
}

#buy {
    .jumbotron {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9) 100%), url(../../assets/img/banner2-2x.jpg);
        background-size: cover;
        background-position: bottom center;
        padding-top: 7rem;
        padding-bottom: 7rem;

        .content-jumbotron {
            padding-left: 9rem;
            padding-right: 9rem;

            h2 {
                color: $white;
                font-size: 3rem;
            }

            i {
                color: $yellow;
                font-size: 3rem;
            }

            p {
                color: rgba(255, 255, 255, 0.7);
                font-size: 1.6rem;
                font-weight: 400;
            }
        }


    }
}

#sponsor {
    background-color: $white;
    padding-top: 7rem;
    padding-bottom: 7rem;
}

#workout-of-the-day {
    .jumbotron {
        background-image: linear-gradient(150deg, rgba(65, 84, 255, 0.6) 35%, rgba(255, 65, 75, 0.6) 100%), url(../../assets/img/banner14-2x.jpg);
        background-size: cover;
        background-position: bottom center;
        padding-top: 7rem;
        padding-bottom: 7rem;

        h2 {
            color: $white;
            font-size: 3rem;
        }

        h3 {
            color: $yellow;
            font-size: 2.5rem;
        }

        a {
            color: $white;
        }
    }
}
</style>

