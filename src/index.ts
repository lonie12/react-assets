#!/usr/bin/env node
import { readdirSync, writeFileSync } from 'fs';
import { assetPath, publicPath } from './constants.js';
import { folderExists, isFile, nameVariable } from './utils.js';

writeFileSync(`${assetPath}/assets.ts`, '', 'utf-8');

// Generate assets
if (folderExists(publicPath) && folderExists(assetPath)) {
  try {
    const files = readdirSync(publicPath, { recursive: true }).filter((e) =>
      isFile(`${publicPath}/${e}`),
    );
    files.forEach((e) => {
      const name = nameVariable(e as string);
      if (name) {
        writeFileSync(`${assetPath}assets.ts`, name, {
          flag: 'a+',
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
}
