<script>
export default {
    name: 'AppHeader',
    components: {},
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
            <div id="logo">
                <img src="../../assets/img/logo.png" alt="logo">
            </div>
            <nav>
                <ul class="d-flex align-items-center m-0">
                    <li v-for="voice in this.heaederMenu">
                        <a :href="voice.url" class="m-2" :class="{ 'selected': voice.current }">{{ voice.text }}</a>
                        <span v-if="voice.isNew">new</span>
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
</style>