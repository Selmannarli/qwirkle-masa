import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
const license=await readFile(new URL('../node_modules/three/LICENSE',import.meta.url),'utf8');
await build({entryPoints:['client/table-scene.mjs'],bundle:true,format:'esm',target:'es2020',minify:true,legalComments:'inline',banner:{js:'/* Three.js · '+license+' */'},outfile:'public/table-engine.mjs'});
