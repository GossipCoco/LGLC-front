/** 
 * FCTS DATE (FORMAT, CALC) + OTHERS FONCTIONS
 * 
*/
const getDate = (value) => {
    const dateTest = new Date(value);
    const date = dateTest.toLocaleDateString("fr-FR");
    return date;
}
const CalcPagination = (total, showPagination, nav) => {
    nav.pages =
      Math.trunc(total / nav.step) +
      (total % nav.step ? 1 : 0);
    nav.middle = Math.trunc(nav.pages / 2);
    if(nav){
        showPagination = true;
    }
   
}
const fonctions = {
    getDate,
    CalcPagination
}


module.exports = fonctions