<script lang="ts">
import { obterCategorias } from '@/http';
import ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';

export default {
    //As propriedades do objeto retornado no data() são estados.
    //Propriedades dentro de data são reativas por padrão.
    data() {
        return {
            categorias: [] as ICategoria[]
        }
    },
    //Created Retorna objetos depois de terem sido renderizados e async await fica na escuta aguardando alterações para sincronizar.
    //Esse método é executado após as propriedades de data() terem sido definidas, sendo assim possível acessá-las e modificá-las.
    async created() {
        this.categorias = await obterCategorias();
    },
    components: { CardCategoria }
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes"> Ingredientes </h1>

        <p class="intrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
            <br>
            <br>
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
                <CardCategoria v-bind:categoria="categoria"/>
            </li>
        </ul>

        <p class="dica">
            *Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>