<script>
import ReviewCard from '../MicroComponents/ReviewCard.vue';
import PartnersCard from '../MicroComponents/PartnersCard.vue';
import BlogCard from '../MicroComponents/BlogCard.vue';
import TeamCard from '../MicroComponents/TeamCard.vue';
import PlaylistCard from '../MicroComponents/PlaylistCard.vue'
import GeneralButton from '../MicroComponents/GeneralButton.vue';
import PlayButton from '../MicroComponents/PlayButton.vue';
import InputBar from '../MicroComponents/InputBar.vue'
import { challengeCard, partnersCard, articlesBlog, teamCard, playlistCard } from '../../assets/data';
export default {
    name: 'AppMain',
    components: { ReviewCard, PartnersCard, BlogCard, TeamCard, PlaylistCard, GeneralButton, PlayButton, InputBar },
    data() { return { challengeCard, partnersCard, articlesBlog, teamCard, playlistCard, emailEntered: '' } },
    props: {
    },
    computed: {
    },
    methods: {
        updateMail(mail) {
            this.emailEntered = mail;
        },

        sendMail() {
            console.log(`Invia al backend questa email ${this.emailEntered}`)
        },

        playVideo() {
            console.log('Play Video')
        }
    },
}

</script>

<template>
    <main>

        <!-- Review Section -->
        <section id="review">
            <div class="container text-center">
                <div class="position-relative">
                    <div class="row row-cols-3 px-5 absolute">
                        <review-card v-for="card in this.challengeCard" :key="card.id" :item="card"></review-card>
                    </div>
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
        <!-- End Review Section -->

        <!-- Youtube Section -->
        <section id="youtube" class="d-flex">
            <div class="col-6">
                <div class="position-relative">
                    <img src="../../assets/img/service15-2x.jpg" alt="Youtube Video" class="img-fluid">
                    <play-button size="medium" position="absolute" @play-button-click="playVideo"></play-button>
                </div>
            </div>
            <div class="col-6 col-right">
                <h5 class="mb-5">Tune up your workouts</h5>
                <h2 class="mb-5">The best health & fitness advice online</h2>
                <div class="d-flex mb-5">
                    <img src="../../assets/img/unnamed.jpg" alt="Unnamed">
                    <div class="ms-2">
                        <p class="m-0">Theme Fusion</p>
                        <div class="d-flex">
                            <a href="#" class="btn-youtube-primary px-1">
                                <i class="fa-brands fa-youtube"></i>
                                Youtube
                            </a>
                            <a href="#" class="btn-youtube-secondary px-1">
                                999+
                            </a>
                        </div>

                    </div>
                </div>
                <h6 class="mb-5">Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo
                    integer sit
                    pellentesque.</h6>
                <general-button text="Visit my YouTube channel" type="youtube"
                    before="fa-brands fa-youtube"></general-button>

            </div>
        </section>
        <!-- End Youtube Section -->

        <!-- Playlist Section -->
        <section id="playlist">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="m-0">Last articles</h6>
                    <a href="#">
                        <span>Read all article</span>
                        <i class="fa-solid fa-angle-right ms-1"></i>
                    </a>
                </div>
                <div class="row row-cols-3">
                    <playlist-card v-for="video in playlistCard" :key="video.id" :item="video"></playlist-card>
                </div>
            </div>
        </section>
        <!-- End Playlist Section -->

        <!-- Newsletter Section -->
        <section id="newsletter">
            <div class="jumbotron">
                <div class="container">
                    <div class="col-8 py-5">
                        <h2 class="mb-4">Join our mailing list today</h2>
                        <h1 class="mb-4">Insider offers & flash sales in your inbox every week.</h1>
                        <i class="fa-solid fa-wave-square mb-5"></i>
                        <input-bar placeholder="Insert your email...*" @mail-has-change="updateMail"
                            @submit-form="sendMail"></input-bar>
                        <p class="mt-5">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit
                            amet,
                            consectetur adipiscing elit sed porttitor lectus.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Newsletter Section -->

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
                        <h2 class="mb-3">“I’ve failed over and over again in my life. And that is why I succeed.”
                        </h2>
                        <i class="fa-solid fa-wave-square mb-4"></i>
                        <p> Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec
                            sed
                            massa
                            in
                            ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                        </p>
                        <general-button text="Buy Avada today" after="fa-solid fa-angle-right"></general-button>
                    </div>
                </div>
            </div>

        </section>
        <!-- End Buy section -->

        <!-- Partner section -->
        <section id="partner">
            <div class="container">
                <div class="row row-cols-4">
                    <partners-card v-for="partner in this.partnersCard" :key="partner.id"
                        :item="partner"></partners-card>
                </div>
            </div>
        </section>
        <!-- End Partner Section -->

        <!-- Workout of the day section -->
        <section id="workout-of-the-day">
            <div class="jumbotron">
                <div class="content-jumbotron text-center">
                    <play-button @play-button-click="playVideo"></play-button>
                    <h2 class="mt-4 mb-4">Crossfit workout of the day</h2>
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

#review {
    background: linear-gradient(130deg, $blue, $red);
    padding-top: 7rem;
    padding-bottom: 7rem;

    .absolute {
        position: absolute;
        bottom: 150px;
        left: 0;
    }

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

#youtube {
    background-color: $white;

    img {
        border-radius: 0 0 20% 0;
    }

    .col-right {
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 10rem;

        h5 {
            font-size: 1.5rem;
            color: $blue;
        }

        h2 {
            font-size: 3.5rem;
        }

        h6 {
            font-size: 1.3rem;
            color: $grey;
            font-weight: normal;
        }


        p {
            font-size: 0.7rem;
        }

        .btn-youtube-primary {
            color: white;
            background-color: $red;
        }

        .btn-youtube-secondary {
            padding: 1px;
            color: $black;
            border: 1px solid $black;
        }
    }
}

#playlist {
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

#newsletter {
    background-image: linear-gradient(90deg, $black 35%, rgba(6, 6, 7, 0) 60%), url(../../assets/img/banner1-2x.jpg);
    background-size: cover;
    background-position: top right;
    padding-top: 7rem;
    padding-bottom: 7rem;

    h1 {
        color: $white;
        font-size: 3rem;
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

#partner {
    background-color: $white;
    padding-top: 7rem;
    padding-bottom: 7rem;
}

#workout-of-the-day {
    .jumbotron {
        background-image: linear-gradient(150deg, rgba(0, 155, 014, 0.4) 35%, rgba(255, 65, 75, 0.6) 100%), url(../../assets/img/banner14-2x.jpg);
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

