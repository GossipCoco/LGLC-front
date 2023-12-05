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
    showPagination = true;
    nav.pages =
      Math.trunc(total / nav.step) +
      (total % nav.step ? 1 : 0);
    nav.middle = Math.trunc(nav.pages / 2);
}
const fonctions = {
    getDate,
    CalcPagination
}


module.exports = fonctions