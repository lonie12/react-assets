import { existsSync, lstatSync } from 'fs';
import { basename, dirname } from 'path';

// Use filename and path to Generate a camelCase variable name
const toCamelCase = function toCamelCase(str: string) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    }) // Met en majuscule après caractères spéciaux
    .replace(/[^a-zA-Z0-9]/g, '') // Supprime les caractères non-alphanumériques
    .replace(/^(.)/, function (match) {
      return match.toLowerCase();
    }); // Première lettre en minuscule
};

// Check for folder exists
const folderExists = (folderPath: string) => {
  try {
    const exists = existsSync(dirname(folderPath));
    const isDir = lstatSync(folderPath).isDirectory();
    return exists && isDir;
  } catch (error) {
    console.error(error);
  }
};

// Check if path to file exists and is File
const isFile = (filePath: string) => {
  try {
    const fileExists = existsSync(filePath);
    if (!fileExists) return false;
    return lstatSync(filePath).isFile();
  } catch (err) {
    console.error(err);
    return false;
  }
};

// Generate string export
const nameVariable = (fileName: string) => {
  try {
    const exportName = `rAsset${toCamelCase(basename(fileName))}`;
    return `export const ${exportName} = "${fileName}"; \n`;
  } catch (err) {
    console.error(err);
  }
};

export { nameVariable, folderExists, isFile, toCamelCase };
