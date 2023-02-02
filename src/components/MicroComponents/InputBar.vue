<script>
import GeneralButton from './GeneralButton.vue';
export default {
    name: 'InputBar',
    components: { GeneralButton },
    data() {
        return { mail: '' }
    },
    props: {
        placeholder: String,
    },
    computed: {
    },
    methods: {
    },
    emits: ['mail-has-change', 'submit-form'],
}


</script>

<template>
    <form class="d-flex flex-align-center" @submit.prevent="$emit('submit-form')">
        <input type="text" class="rounded-5 col-6 me-4 px-4" :placeholder="placeholder" v-model.trim="mail"
            @keyup="$emit('mail-has-change', mail)">
        <general-button text="Subscribe" type="newsletter" size="big"
            @click.prevent="$emit('submit-form')"></general-button>
    </form>
</template>

<style lang="scss" scoped>
@use'../../assets/style/partials/variables' as *;
</style>