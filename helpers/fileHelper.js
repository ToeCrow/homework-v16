// /helpers/fileHelper.js
import fs from 'fs';
import path from 'path';

// Läs data från en JSON-fil
export const readFile = (fileName) => {
  const filePath = path.join(__dirname, `../data/${fileName}`);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

// Skriv data till en JSON-fil
export const writeFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../data/${fileName}`);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
};
