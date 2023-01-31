<script>
import { headerMenu } from '../../assets/data';
import Logo from '../MicroComponents/Logo.vue';
export default {
    name: 'AppHeader',
    components: { Logo },
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
        <div class="container d-flex justify-content-between align-items-center py-2">
            <logo></logo>
            <nav>
                <ul class="d-flex align-items-center m-0">
                    <li v-for="voice in this.headerMenu" :key="voice.id">
                        <a :href="voice.url" class="ms-3" :class="{ 'selected': voice.current }">{{ voice.text }}</a>
                        <span v-if="voice.isNew" class="is-new ms-2">new</span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

</template>
        
<style lang="scss">
@use'../../assets/style/partials/variables' as *;
@use'../../assets/style/style.scss';

header {
    background-color: $black;
}

.is-new {
    font-size: 0.7rem;
    padding: 2px;
    margin: 0;
    border-radius: 20%;
    background-color: $yellow;
}
</style>