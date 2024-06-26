import { createWebHistory, createRouter } from "vue-router";

import Accueil from '../components/Page/Accueil'
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
import CharacterCreate from '../components/Characters/CharacterComponent/CharacterCreate'
import RollOfDiceLayout from '../components/Game/RollOfDice/RollOfDiceLayout.vue'
import PuzzleLayout from '../components/Game/Puzzle/PuzzleLayout.vue'
import TreasureHunt from '../components/Game/TreasureHunt/TreasureHunt.vue'
import FictionContain from '../components/Game/Fictions/FictionContain'
import ChapterLayout from '../components/Game/Fictions/ChapterLayout.vue'
import CreateFiction from '../components/Game/Fictions/CreateFiction.vue'
import AllMyFictionsLayout from '../components/Game/Fictions/AllFictionsLayout.vue'
import MouseShot from '../components/Game/MouseShot/MouseShot.vue'
import GooseGameLayout from '../components/Game/GooseGame/GosseGameLayout.vue'
import CreateChapter from '../components/Game/Fictions/CreateChapter.vue'
import AllExistingFictionsLayout from '../components/Fictions/AllExistingFictionsLayout.vue'
import AExistingFictionContain from "../components/Fictions/AExistingFictionContain.vue";
import EditChapter from '../components/Game/Fictions/EditChapter.vue'
import QuestLayout from '../components/Game/Quest/QuestLayout.vue'
import UserCard from '../components/Users/UserCard.vue'
import AllLocationsLayout from "../components/Locations/AllLocationsLayout.vue"
import Register from '../components/Page/Register.vue'
import MentionsLegales from '../components/Page/MentionsLegales.vue'
import faq from '../components/Page/faq.vue'


const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: "/",
    redirect: "/Accueil",
    component: Accueil
  },
  {
    path: '/MentionsLegales',
    name: 'MentionsLegales',
    component: MentionsLegales
  },
  {
    path: '/faq',
    bame: 'faq',
    component: faq
  },
  
  {
    path: "/login",
    name: "/login",
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/user/:id",
        name: "UserLayout",
        component: UserLayout,
      },
      {
        path: '/getUserBy/:id',
        name: 'UserCard',
        component : UserCard
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
      }, {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardLayout
      }, {
        path: '/game',
        name: 'Game',
        component: GameLayout
      },
      {
        path: '/GooseGameLayout',
        name:'GooseGameLayout',
        component: GooseGameLayout
      },
      {
        path: '/Quest',
        name: 'QuestLayout',
        component: QuestLayout
      },
      {
        path: '/TreasureHunt',
        name: 'TreasureHunt',
        component: TreasureHunt
      },
      {
        path: '/AllLocationsLayout',
        name: 'AllLocationsLayout',
        component: AllLocationsLayout
      },
      {
        path: '/rollOfDice',
        name: 'RollOfDiceLayout',
        component: RollOfDiceLayout,
      },
      {
        path: '/puzzle',
        name: 'PuzzleLayout',
        component: PuzzleLayout,
      },
      {
        path: '/AllExistingFictionsLayout',
        name: 'AllExistingFictionsLayout',
        component: AllExistingFictionsLayout
      },
      {
        path:'/allFictions/:id',
        name: 'AllFictionsLayout',
        component: AllMyFictionsLayout
      },
      {
        path: '/fiction/:id',
        name: 'FictionContain',
        component: FictionContain,
      },
      {
        path: '/AExistingFictionContain/:id',
        name: 'AExistingFictionContain',
        component: AExistingFictionContain
      },
      {
        path: '/createANewFiction',
        name: 'CreateFiction',
        component: CreateFiction
      },
      {
        path: '/EditChapter/:id',
        name: 'EditChapter',
        component: EditChapter
      },
      {
        path: '/mouseShot',
        name: 'MouseShot',
        component: MouseShot
      },
      {
        path: '/chapter/:id',
        name: 'ChapterLayout',
        component: ChapterLayout,
        props: true
      },
      {
        path: '/fiction/createChapter/:id',
        name: 'CreateChapter',
        component: CreateChapter
      },
      {
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
