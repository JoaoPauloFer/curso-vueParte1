<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li :v-for='foto in fotos'>
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return {

      titulo: 'Alurapic',
      fotos: [
        {
          url: "https://blog.farmaciadebicho.com.br/wp-content/uploads/2017/08/cachorro-mergulhando-2.jpg",
          titulo: 'cachorro'
        },
        {
          url: "https://blog.farmaciadebicho.com.br/wp-content/uploads/2017/08/cachorro-mergulhando-2.jpg",
          titulo: 'cachorro'
        }
      ]
    }
  }
}
</script>

<style>

</style>
