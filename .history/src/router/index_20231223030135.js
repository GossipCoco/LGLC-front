import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/Page/Home";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import AllCharactersLayout from "../components/Characters/AllCharactersLayout";
import CharacterDetails from "../components/Characters/CharacterDetails";
import UserLayout from "../components/Users/UserLayout";
import AllClansLayout from "../components/Locations/AllClansLayout";
import ClanDetails from "../components/Locations/ClanDetails"
import GameLayout from '../components/Game/GameLayout'
import Login from '../components/Page/Login'
import AdminLayout from '../components/UserPanel/AdminDashboard'
// import Logout from '../components/Page/Logout'
// import Register from '../components/Page/Register'
// import CharacterLayout from '../components/Character/CharacterLayout'
import CharacterCreate from '../components/Character/CharacterCreate'
// 
// 
// import AllClans from '../components/Character/AllClans'
// import ClanDetails from '../components/Character/ClanDetails'
// import PageError from '../components/Page/404'

const routes = [
  {
    path: "/",
    redirect: "/home",
  },  {
    path: "/login",
    name: "/login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/user",
        name: "UserLayout",
        component: UserLayout,
      },
      {
        path: "/Dashboard",
        name: "dashboard",
        component: DashboardLayout,
      },
      {
        path: "/allCharacters",
        name: "allCharacters",
        component: AllCharactersLayout,
      },
      {
        path: "/CharacterCreate",
        name: "CharacterCreate",
        component: CharacterCreate,
      },
      {
        path: "/characterDetails/:id",
        name: "characterDetails",
        component: CharacterDetails,
      },
      {
        path: "/AllClansLayout",
        name: "AllClansLayout",
        component: AllClansLayout,
      },
      {
        path: "/clan/:id",
        name: "clanDetails",
        component: ClanDetails,
      },{
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardLayout
        },{
              path: '/game',
              name: 'Game',
              component: GameLayout
          },{
            path: '/admin',
            name: 'administration',
            component: AdminLayout

          }
    ],
  },

  //{
  //     path: '/character/create',
  //     name: 'characterCreate',
  //     component: CharacterCreate
  // },{
  //     path: '/dashboard',
  //     name: 'Dashboard',
  //     component: DashboardLayout
  // },{
  //     path: '/game',
  //     name: 'Game',
  //     component: GameLayout
  // },
  // {
  //     path: '/allClans',
  //     name: 'allClans',
  //     component: AllClans
  // },
  //{
  //     path: '/admin',
  //     name: 'Admin',
  //     component: AdminLayout
  // }

  // { path: '/404', name: 'Page 404', component: PageError },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
