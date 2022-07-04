<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do título">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for='foto in fotosComFiltro'>

        <meu-painel :titulo="foto.titulo">

            <imagem-responsiva v-meu-transform:scale.animate="1.1" :url="foto.url" :titulo="foto.titulo"/>
            <mue-botao tipo="button" 
            rotulo="REMOVER" 
            @botaoAtivado="remove(foto)" 
            :confirmacao="true"
            estilo="perigo" />

        </meu-painel>


      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva  from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

components: {

  'imagem-responsiva': ImagemResponsiva,
  'meu-painel': Painel,
  'mue-botao': Botao
},  

data(){

  return {

      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },

computed: {

  fotosComFiltro() {

    if(this.filtro){
      let exp = new RegExp(this.filtro.trim(), 'i');
      return this.fotos.filter(foto => exp.test(foto.titulo))
    } else {
      return this.fotos
    }
  }
},

methods: {
  remove( foto ) {
    this.$http
    .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
    .then(() => {
      let indice = this.fotos.indexOf(foto);
      this.fotos.splice(indice, 1);
      this.mensagem = 'Foto removida com sucesso'
    }, err => {
      console.log(err);
      this.mensagem = 'Não foi possível remover a foto';
    } )
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

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>