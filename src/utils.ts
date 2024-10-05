export const toCamelCase = function toCamelCase(str: string) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    }) // Met en majuscule après caractères spéciaux
    .replace(/[^a-zA-Z0-9]/g, "") // Supprime les caractères non-alphanumériques
    .replace(/^(.)/, function (match) {
      return match.toLowerCase();
    }); // Première lettre en minuscule
};
