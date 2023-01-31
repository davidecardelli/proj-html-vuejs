<script>
import Logo from '../MicroComponents/Logo.vue';
export default {
    name: 'AppHeader',
    components: { Logo },
    data() {
        return {
            heaederMenu: [
                {
                    text: 'Home',
                    url: '#',
                    current: true,
                    isNew: false,
                },
                {
                    text: 'Services',
                    url: '#',
                    current: false,
                    isNew: false,
                },
                {
                    text: 'About',
                    url: '#',
                    current: false,
                    isNew: false,
                },
                {
                    text: 'Videos',
                    url: '#',
                    current: false,
                    isNew: false,
                },
                {
                    text: 'Blog',
                    url: '#',
                    current: false,
                    isNew: false,
                },
                {
                    text: 'Store',
                    url: '#',
                    current: false,
                    isNew: true,
                },
            ]
        }
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
        <div class="container d-flex justify-content-between align-items-center py-2">
            <logo></logo>
            <nav>
                <ul class="d-flex align-items-center m-0">
                    <li v-for="voice in this.heaederMenu">
                        <a :href="voice.url" class="m-2" :class="{ 'selected': voice.current }">{{ voice.text }}</a>
                        <span v-if="voice.isNew" class="is-new">new</span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

</template>
        
<style lang="scss">
@use'../../assets/style/partials/variables' as *;

header {
    background-color: $black;

    a {
        color: $grey;
    }

    .selected {
        color: $white;
    }
}

.is-new {
    font-size: 0.7rem;
    padding: 2px;
    margin: 0;
    border-radius: 20%;
    background-color: $yellow;
}
</style>