<script>
import AppHeader from './components/MacroComponents/AppHeader.vue'
import AppMain from './components/MacroComponents/AppMain.vue'
import AppFooter from './components/MacroComponents/AppFooter.vue'

export default {
    name: 'App',
    components: { AppHeader, AppMain, AppFooter },
    data() { return {} },
    props: {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<template>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
</template>

<style lang="scss">
@use'./assets/style/partials/variables' as *;
</style>