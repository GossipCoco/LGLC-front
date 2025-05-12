/** 
 * FCTS DATE (FORMAT, CALC) + OTHERS FONCTIONS
 * 
*/

const pica = require("pica")();

const resizeImage = (img, maxWidth, originalFile) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");

    // Maintenir le ratio d'aspect en ajustant la largeur à `maxWidth`
    const scaleFactor = maxWidth / img.width;
    canvas.width = maxWidth;
    canvas.height = img.height * scaleFactor;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Utiliser `pica` pour redimensionner et transformer le canvas en blob
    pica.resize(canvas, canvas, { quality: 3, alpha: true })
      .then(() => pica.toBlob(canvas, originalFile.type, 0.9))
      .then(blob => {
        const resizedFile = new File([blob], originalFile.name, { type: originalFile.type });
        resolve(resizedFile);
      })
      .catch(reject);
  });
};

const getDate = (value) => {
    const dateTest = new Date(value);
    const date = dateTest.toLocaleDateString("fr-FR");
    return date;
}
const CalcPagination = (total, nav) => {
  const pages = Math.trunc(total / nav.step) + (total % nav.step ? 1 : 0);
  nav.pages = pages;
  nav.middle = Math.trunc(pages / 2);
  return pages; 
}

const getStepByScreenWidth = (width) => {
  if (width >= 4400 && width <= 10000) {
    return 10;
  } else if (width >= 1920 && width < 4400) {
    return 8;
  } else if (width >= 1600 && width < 1920) {
    return 8;
  } else if (width >= 1400 && width < 1600) {
    return 8;
  } else if (width >= 1280 && width < 1400) {
    return 4;
  } else if (width >= 768 && width < 1280) {
    return 3;
  } else {
    return 2;
  }
};


const fonctions = {
    getDate,
    CalcPagination,
    resizeImage,
    getStepByScreenWidth
}
module.exports = fonctions