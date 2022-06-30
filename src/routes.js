import Cadastro from './component/cadastro/Cadastro.vue';
import Home from './component/home/Home.vue';

export const routes = [
    { path: '', component: Home, titulo:'Home'},
    { path: '/cadastro', component: Cadastro, titulo:'Cadastro' }
];