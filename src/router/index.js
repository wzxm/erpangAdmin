import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import EditorPage from '@/components/page/EditorPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import Carousel from '@/components/others/Carousel';
import Dialog from '@/components/others/Dialog';
import Badge from '@/components/others/Badge';
import Pagination from '@/components/others/Pagination';
import Transfer from '@/components/others/Transfer';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/EditorPage',
          component:EditorPage
        },{
          path:'/MarkdownPage',
          component:MarkdownPage
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormInput',
          component:FormInput
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/BasicTables',
          component:BasicTables
        },{
          path:'/TodoList',
          component:TodoList
        },{
          path:'/Carousel',
          component:Carousel
        },{
          path:'/Dialog',
          component:Dialog
        },{
          path: '/Badge',
          component: Badge
        },{
          path: '/Pagination',
          component: Pagination
        },{
          path: '/Transfer',
          component: Transfer
        }
      ]
    }
  ]
})
