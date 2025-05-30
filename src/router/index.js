import { createWebHistory, createRouter } from "vue-router";

import Accueil from '../components/Page/Accueil'
import Register from '../components/Page/Register.vue'
import MentionsLegales from '../components/Page/Accueil/MentionsLegales.vue'
import faq from '../components/Page/Accueil/faq.vue'
import Contact from '../components/Page/Accueil/Contact.vue'
import Login from '../components/Page/Login'
import About from "../components/Page/Accueil/About.vue";
import Home from "../components/Page/Home";

import DashboardLayout from "../components/Dashboard/DashboardLayout";

import AllCharactersLayout from "../components/Characters/AllCharactersLayout";
import CharacterDetails from "../components/Characters/CharacterComponent/CharacterDetails";
import CharacterCreate from '../components/Characters/CharacterComponent/CharacterCreate'
import OriginaleCharacterByUser from "../components/Characters/CharacterComponent/OriginaleCharacterByUser.vue";
import OriginaleCharacterDetails from "../components/Characters/CharacterComponent/OriginaleCharacterDetails.vue";
import AllClansLayout from "../components/Locations/AllClansLayout";
import AllLocationsLayout from "../components/Locations/AllLocationsLayout.vue"
import ClanDetails from "../components/Locations/ClanDetails"
import LocationsDetails from "../components/Locations/LocationsDetails.vue";
import ArcBookLayout from '../components/ArcBook/ArcBookLayout.vue'
import OneArc from "../components/ArcBook/Components/OneArc.vue";
import OneBook from "../components/ArcBook/Components/OneBook.vue";
import CreateAnOriginalCharacter from '../components/Characters/CharacterForm/CreateAnOriginalCharacter.vue'
import EditAnOriginalCharacter from "../components/Characters/CharacterForm/EditAnOriginalCharacter.vue";
import MapForest from '../components/Locations/MapForest.vue'

import AllExistingFictionsLayout from '../components/Fictions/AllExistingFictionsLayout.vue'
import FictionContain from '../components/Fictions/AllMyFictions/FictionContain'
import ChapterLayout from '../components/Fictions/Chapters/ChapterLayout.vue'
import CreateFiction from '../components/Fictions/FictionsForm/CreateFiction.vue'
import MyAllFictions from "../components/Fictions/AllMyFictions/MyAllFictions.vue";
import CreateChapter from '../components/Fictions/Chapters/CreateChapter.vue'
import EditChapter from '../components/Fictions/FictionsForm/EditChapter.vue'
import CommentLayout from "../components/Fictions/Comments/CommentLayout.vue";

import GameLayout from '../components/Game/GameLayout'
import MouseShot from '../components/Game/MouseShot/MouseShot.vue'
import GooseGameLayout from '../components/Game/GooseGame/GosseGameLayout.vue'
import QuestLayout from '../components/Game/Quest/QuestLayout.vue'
import QuestById from '../components/Game/Quest/QuestById.vue'
import RollOfDiceLayout from '../components/Game/RollOfDice/RollOfDiceLayout.vue'
import PuzzleLayout from '../components/Game/Puzzle/PuzzleLayout.vue'
import TreasureHunt from '../components/Game/TreasureHunt/TreasureHunt.vue'

import EventGlobalLayout from '../components/Event/EventGlobaleLayout.vue'

import UserLayout from "../components/Users/UserLayout";
import UserCard from '../components/Users/UserCard.vue'
import Messagerie from "../components/UserPanel/UserMessagerie/Messagerie.vue";

import AdminLayout from '../components/UserPanel/AdminDashboard'
import GroupLayout from "../components/Group/GroupLayout.vue";

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
    name: 'faq',
    component: faq
  },
  {
    path:'/About',
    name: 'About',
    component: About
  },
  {
    path:'/Contact',
    name: 'Contact',
    component: Contact
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
        path: "/user/messagerie/:id",
        name: "Messagerie",
        component: Messagerie,
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
      },{
        path: "/OriginaleCharacterDetails/:id",
        name: "OriginaleCharacterDetails",
        component: OriginaleCharacterDetails
      },{
        path: '/CreateAnOriginalCharacter',
        name: 'CreateAnOriginalCharacter',
        component:CreateAnOriginalCharacter
      },{
        path: '/EditAnOriginalCharacter/:id',
        name:'EditAnOriginalCharacter',
        component: EditAnOriginalCharacter
      },
      {
        path: "/OriginaleCharacterByUser",
        name: 'OriginaleCharacterByUser',
        component: OriginaleCharacterByUser
      },
      {
        path: "/MapForest",
        name: "MapForest",
        component: MapForest,
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
        path: '/QuestById/:id',
        name: 'QuestById',
        component: QuestById
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
        path: '/LocationsDetails/:id',
        name: 'LocationsDetails',
        component: LocationsDetails
      },
      {
        path: '/ArcBookLayout',
        name: 'ArcBookLayout',
        component: ArcBookLayout
      },
      {
        path: '/OneArc/:id',
        name: 'OneArc',
        component: OneArc
      },
      {
        path: '/BookByTitle/:id',
        name: 'OneBook',
        component: OneBook,
        props: true
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
        path: '/EventGlobal',
        name: 'EventGlobal',
        component: EventGlobalLayout
      },
      {
        path:'/allFictions/:id',
        name: 'MyAllFictions',
        component: MyAllFictions
      },
      {
        path: '/fiction/:id',
        name: 'FictionContain',
        component: FictionContain,
      },
      {
        path: '/CommentByFiction/:id',
        name: 'CommentLayout',
        component: CommentLayout
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
      },{
        path: '/GroupLayout',
        name:'GroupLayout',
        component: GroupLayout
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

  // { path: '/404', name: 'Page 404', component: PageError },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
