<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type {PropType} from 'vue';

export default {
    //props indica que existe uma propriedade q esta sendo usada de um componente para outro. Do outro lado o componente
    //que quiser usar essa propriedade deve usar o v-bind para se ligar a ele e usar seus atributos/variáveis
    props: {
    categoria:{type: Object as PropType<ICategoria>, required: true}
  }
}
</script>

<template>
   <!--  {{ categoria.nome }} -->
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/images/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

            <h2 class="paragrafo-lg categoria__nome"> {{ categoria.nome }}  </h2>
        </header>
        <!-- <ul class="categoria__ingredientes">
            <li v-for="ingrediente in ingredientes.categoria" :key="ingrediente">
                {{ingrediente}}
            </li>
        </ul> -->
    </article>
</template>