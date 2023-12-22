import { reactive } from "vue";
import allNames from './alllNames'
const CharacterDatas = reactive({
  Id: null,
  allNames: allNames,
  CurrentName: null,
  Genre: null,
  KitName: null,
  ApprenticeName: null,
  WarriorName: null,
  OlderName: null,
  LeaderName: null,
  Age: null,
  Description: null,
  Personnality: null,
  Biography: null,
  Location: null,
  Image: null,
});

export default CharacterDatas;
