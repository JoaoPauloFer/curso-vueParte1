<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Menu from './component/shared/menu/Menu.vue';
import { routes } from './routes';

export default {
  components: {
    'meu-menu': Menu
  },
  data(){
    return {
      routes
    }
  }
}

</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: auto;
  }

  .pagina-enter-active, .pagina-leave-active {
      opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
      transition: opacity 1s;
  }

</style>
