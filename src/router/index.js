import { createWebHistory, createRouter } from "vue-router";

// PUBLIC
import Accueil from "../components/Page/Accueil";
import MentionsLegales from "../components/Page/Accueil/MentionsLegales.vue";
import faq from "../components/Page/Accueil/faq.vue";
import Contact from "../components/Page/Accueil/Contact.vue";
import About from "../components/Page/Accueil/About.vue";

// AUTH
import Login from "../components/Page/Login";
import Register from "../components/Page/Register.vue";

// APP SHELL
import Home from "../components/Page/Home";

// NAV
import LgdcVue from "../components/Navigation/LgdcVue.vue";
import CreationVue from "../components/Navigation/CreationVue.vue";
import GamesVue from "../components/Navigation/GamesVue.vue";

// DASHBOARD
import DashboardLayout from "../components/Dashboard/DashboardLayout";

// LGDC
import AllCharactersLayout from "../components/Characters/AllCharactersLayout";
import CharacterDetails from "../components/Characters/CharacterComponent/CharacterDetails";
import MapForest from "../components/Locations/MapForest.vue";
import AllClansLayout from "../components/Locations/AllClansLayout";
import ClanDetails from "../components/Locations/ClanDetails";
import AllLocationsLayout from "../components/Locations/AllLocationsLayout.vue";
import LocationsDetails from "../components/Locations/LocationsDetails.vue";
import ArcBookLayout from "../components/ArcBook/ArcBookLayout.vue";
import OneArc from "../components/ArcBook/Components/OneArc.vue";
import OneBook from "../components/ArcBook/Components/OneBook.vue";

// CREATIONS
import CharacterCreate from "../components/Characters/CharacterComponent/CharacterCreate";
import OriginaleCharacterByUser from "../components/Characters/CharacterComponent/OriginaleCharacterByUser.vue";
import OriginaleCharacterDetails from "../components/Characters/CharacterComponent/OriginaleCharacterDetails.vue";
import CreateAnOriginalCharacter from "../components/Characters/CharacterForm/CreateAnOriginalCharacter.vue";
import EditAnOriginalCharacter from "../components/Characters/CharacterForm/EditAnOriginalCharacter.vue";

import AllExistingFictionsLayout from "../components/Fictions/AllExistingFictionsLayout.vue";
import MyAllFictions from "../components/Fictions/AllMyFictions/MyAllFictions.vue";
import FictionContain from "../components/Fictions/AllMyFictions/FictionContain";
import ChapterLayout from "../components/Fictions/Chapters/ChapterLayout.vue";
import CreateFiction from "../components/Fictions/FictionsForm/CreateFiction.vue";
import CreateChapter from "../components/Fictions/Chapters/CreateChapter.vue";
import EditChapter from "../components/Fictions/FictionsForm/EditChapter.vue";
import CommentLayout from "../components/Fictions/Comments/CommentLayout.vue";

// GAMES
import GameLayout from "../components/Game/GameLayout";
import MouseShot from "../components/Game/MouseShot/MouseShot.vue";
import GooseGameLayout from "../components/Game/GooseGame/GosseGameLayout.vue";
import QuestLayout from "../components/Game/Quest/QuestLayout.vue";
import QuestById from "../components/Game/Quest/QuestById.vue";
import RollOfDiceLayout from "../components/Game/RollOfDice/RollOfDiceLayout.vue";
import PuzzleLayout from "../components/Game/Puzzle/PuzzleLayout.vue";
import TreasureHunt from "../components/Game/TreasureHunt/TreasureHunt.vue";

// EVENTS
import EventGlobalLayout from "../components/Event/EventGlobaleLayout.vue";

// USER
import UserLayout from "../components/Users/UserLayout";
import UserCard from "../components/Users/UserCard.vue";
import Messagerie from "../components/UserPanel/UserMessagerie/Messagerie.vue";

// CLUBS
import GroupLayout from "../components/Group/GroupLayout.vue";
import OneGroupLayout from "../components/Group/GroupComponent/OneGroupLayout.vue";
import CreateANewPost from "../components/Group/PostCommentReactionComponent/CreateANewPost.vue";
import PostCommentComponent from "../components/Group/PostCommentReactionComponent/PostCommentComponent.vue";
import AllPostsComponent from "../components/Group/PostCommentReactionComponent/AllPostsComponent.vue";
import NewResponseToPostComponent from "../components/Group/PostCommentReactionComponent/NewResponseToPostComponent.vue";
import NewResponseToCommentComponent from "../components/Group/PostCommentReactionComponent/NewResponseToCommentComponent.vue";

// ADMIN
import AdminLayout from "../components/UserPanel/AdminDashboard";

const publicRoutes = [
  { path: "/Accueil", name: "Accueil", component: Accueil },
  { path: "/", redirect: "/Accueil" },
  { path: "/MentionsLegales", name: "MentionsLegales", component: MentionsLegales },
  { path: "/faq", name: "faq", component: faq },
  { path: "/About", name: "About", component: About },
  { path: "/Contact", name: "Contact", component: Contact },
];

const authRoutes = [
  { path: "/login", name: "login", component: Login },
  { path: "/Register", name: "Register", component: Register },
];

const lgdcRoutes = [
  { path: "/lgdc", name: "LgdcVue", component: LgdcVue, meta: { section: "lgdc" } },
  { path: "/allCharacters", name: "allCharacters", component: AllCharactersLayout, meta: { section: "lgdc" } },
  { path: "/characterDetails/:id", name: "characterDetails", component: CharacterDetails, meta: { section: "lgdc" } },
  { path: "/MapForest", name: "MapForest", component: MapForest, meta: { section: "lgdc" } },
  { path: "/AllClansLayout", name: "AllClansLayout", component: AllClansLayout, meta: { section: "lgdc" } },
  { path: "/clan/:id", name: "clanDetails", component: ClanDetails, meta: { section: "lgdc" } },
  { path: "/AllLocationsLayout", name: "AllLocationsLayout", component: AllLocationsLayout, meta: { section: "lgdc" } },
  { path: "/LocationsDetails/:id", name: "LocationsDetails", component: LocationsDetails, meta: { section: "lgdc" } },
  { path: "/ArcBookLayout", name: "ArcBookLayout", component: ArcBookLayout, meta: { section: "lgdc" } },
  { path: "/OneArc/:id", name: "OneArc", component: OneArc, meta: { section: "lgdc" } },
  { path: "/BookByTitle/:id", name: "OneBook", component: OneBook, props: true, meta: { section: "lgdc" } },
];

const creationRoutes = [
  { path: "/creation", name: "creationVue", component: CreationVue, meta: { section: "creation" } },

  // personnages
  { path: "/CharacterCreate", name: "CharacterCreate", component: CharacterCreate, meta: { section: "creation" } },
  { path: "/OriginaleCharacterDetails/:id", name: "OriginaleCharacterDetails", component: OriginaleCharacterDetails, meta: { section: "creation" } },
  { path: "/CreateAnOriginalCharacter", name: "CreateAnOriginalCharacter", component: CreateAnOriginalCharacter, meta: { section: "creation" } },
  { path: "/EditAnOriginalCharacter/:id", name: "EditAnOriginalCharacter", component: EditAnOriginalCharacter, meta: { section: "creation" } },
  { path: "/OriginaleCharacterByUser", name: "OriginaleCharacterByUser", component: OriginaleCharacterByUser, meta: { section: "creation" } },

  // fictions
  { path: "/AllExistingFictionsLayout", name: "AllExistingFictionsLayout", component: AllExistingFictionsLayout, meta: { section: "creation" } },
  { path: "/allFictions/:id", name: "MyAllFictions", component: MyAllFictions, meta: { section: "creation" } },
  { path: "/fiction/:id", name: "FictionContain", component: FictionContain, meta: { section: "creation" } },
  { path: "/chapter/:id", name: "ChapterLayout", component: ChapterLayout, props: true, meta: { section: "creation" } },
  { path: "/fiction/createChapter/:id", name: "CreateChapter", component: CreateChapter, meta: { section: "creation" } },
  { path: "/createANewFiction", name: "CreateFiction", component: CreateFiction, meta: { section: "creation" } },
  { path: "/EditChapter/:id", name: "EditChapter", component: EditChapter, meta: { section: "creation" } },
  { path: "/CommentByFiction/:id", name: "CommentLayout", component: CommentLayout, meta: { section: "creation" } },
];

const clubsRoutes = [
  { path: "/GroupLayout", name: "GroupLayout", component: GroupLayout, meta: { section: "clubs" } },
  { path: "/OneGroupLayout/:id", name: "OneGroupLayout", component: OneGroupLayout, meta: { section: "clubs" } },
  { path: "/AllPostsByGroup/:id", name: "AllPostsComponent", component: AllPostsComponent, meta: { section: "clubs" } },
  { path: "/CreateANewPost/:id", name: "CreateANewPost", component: CreateANewPost, meta: { section: "clubs" } },
  { path: "/PostComment/:id", name: "PostCommentComponent", component: PostCommentComponent, meta: { section: "clubs" } },
  { path: "/NewResponseToPost/:id", name: "NewResponseToPostComponent", component: NewResponseToPostComponent, meta: { section: "clubs" } },
  { path: "/NewResponseToComment/:id", name: "NewResponseToCommentComponent", component: NewResponseToCommentComponent, meta: { section: "clubs" } },
];

const gamesRoutes = [
  { path: "/games", name: "GamesVue", component: GamesVue },
  { path: "/game", name: "Game", component: GameLayout },
  { path: "/mouseShot", name: "MouseShot", component: MouseShot },
  { path: "/GooseGameLayout", name: "GooseGameLayout", component: GooseGameLayout },
  { path: "/Quest", name: "QuestLayout", component: QuestLayout },
  { path: "/QuestById/:id", name: "QuestById", component: QuestById },
  { path: "/TreasureHunt", name: "TreasureHunt", component: TreasureHunt },
  { path: "/rollOfDice", name: "RollOfDiceLayout", component: RollOfDiceLayout },
  { path: "/puzzle", name: "PuzzleLayout", component: PuzzleLayout },
];

const eventsRoutes = [
  { path: "/EventGlobal", name: "EventGlobal", component: EventGlobalLayout },
];

const userRoutes = [
  { path: "/user/:id", name: "UserLayout", component: UserLayout },
  { path: "/user/messagerie/:id", name: "Messagerie", component: Messagerie },
  { path: "/getUserBy/:id", name: "UserCard", component: UserCard },
];

const adminRoutes = [
  { path: "/admin", name: "administration", component: AdminLayout },
];

const appChildren = [
  // DASHBOARD
  { path: "/dashboard", name: "Dashboard", component: DashboardLayout },

  // SECTIONS
  ...lgdcRoutes,
  ...creationRoutes,
  ...clubsRoutes,

  // OTHER MODULES
  ...gamesRoutes,
  ...eventsRoutes,
  ...userRoutes,
  ...adminRoutes,
];

const routes = [
  ...publicRoutes,
  ...authRoutes,
  {
    path: "/home",
    name: "home",
    component: Home,
    children: appChildren,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;