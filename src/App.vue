<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for='foto in fotos'>

        <mue-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </mue-painel>


      </li>
    </ul>
  </div>
</template>

<script>
import painel from './component/shared/painel/painel.vue';
export default {

components: {
  'mue-painel': painel
},  

data(){

    return {

      titulo: 'Alurapic',
      fotos: []
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>
