import Cadastro from './component/cadastro/Cadastro.vue';
import Home from './component/home/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro }
];