import { reactive } from "vue";
import allNames from './alllNames'
const CharacterDatas = reactive({
  Id: null,
  allNames: allNames,
  Age: null,
  Description: null,
  Personnality: null,
  Biography: null,
  Location: null,
  Image: null,
  GradeId: null

}); 

export default CharacterDatas;
