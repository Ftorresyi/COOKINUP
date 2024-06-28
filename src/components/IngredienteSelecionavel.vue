<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    }
}
</script>

<template>
    <Tag: texto="ingrediente" :ativa="selecionado" />
</template>